import csv
import os
import uuid
import requests
from glob import glob
from towhee import pipe, ops
from pathlib import Path
from urllib.parse import urlparse
from dotenv import load_dotenv
import requests
from requests.exceptions import RequestException
import zipfile
from zipfile import BadZipFile
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection, utility

class MilvusDB():
    def __init__(self, collection_name):
        self.HOST = None
        self.PORT = None
        self.DEVICE = None # if None, use default device (cuda is enabled if available)
        self.TOPK = 5 
        self.DIM = 2048 # dimension of embedding extracted by MODEL
        self.MODEL = 'resnet50'
        self.INDEX_TYPE = 'IVF_FLAT'
        self.METRIC_TYPE = 'L2'
        self.COLLECTION_NAME = collection_name
        self.unzip_dir = collection_name
        self.query_dir = 'result'
        self.parent_dir = None
        self.script_dir = None

    def connect(self):
        self.setEnv()
        connections.connect(host=self.HOST, port=self.PORT)
    
    def setEnv(self):
        load_dotenv()
        self.HOST = os.environ.get("milvusHOST")
        self.PORT = os.environ.get("milvusPORT")
    
    def drop_collection(self, collection_name):
        if utility.has_collection(collection_name):
            utility.drop_collection(collection_name)
            print(f"Collection '{collection_name}' dropped successfully.")

        else:
            print(f"No such collection: '{collection_name}'")
    
    def create_collection(self, collection_name):
        
        fields = [
            FieldSchema(name='minio_id', dtype=DataType.VARCHAR, description='minio id to image', max_length=500, 
                        is_primary=True, auto_id=False),
            FieldSchema(name='embedding', dtype=DataType.FLOAT_VECTOR, description='image embedding vectors', dim=self.DIM)
        ]
        
        schema = CollectionSchema(fields=fields, description='image search')
        collection = Collection(name=collection_name, schema=schema)

        index_params = {
            'metric_type': self.METRIC_TYPE,
            'index_type': self.INDEX_TYPE,
            'params': {"nlist": 2048}
        }
        
        collection.create_index(field_name='embedding', index_params=index_params)
        
        return collection

    
    # Load image path
    def load_image(self, x):
        #local file path
        script_dir = os.path.dirname(os.path.abspath(__file__))
        os.chdir(script_dir)
        
        x = x.lower()
        
        if x.endswith('csv'):
            if not os.path.exists(x):
                raise FileNotFoundError(f"{x} does not exist.")
            
            with open(x) as f:
                reader = csv.reader(f)
                headers = next(reader)  # Skip the header
                
                if len(headers) < 4 :
                    raise ValueError("minio id doesn't exist in this csv files.")
                
                for item in reader:
                    if len(item) < 4:
                        raise ValueError("Invalid CSV format.")
                    
                    minio_id = item[3]
                    
                    img_path = os.path.join(os.path.dirname(script_dir), self.unzip_dir, item[1])  # Construct absolute path from relative path
                    
                    if not os.path.isfile(img_path):
                        raise FileNotFoundError(f"Image file does not exist: {img_path}")
                    
                    yield minio_id, img_path
                        
        elif (x.endswith(".jpg") or x.endswith(".png") or x.endswith(".jpeg")):
            for item in glob(x):
                if not os.path.isfile(item):
                    raise FileNotFoundError(f"Image file does not exist: {item}")
                minio_id = str(uuid.uuid4())
                yield minio_id, item
        
        elif urlparse(x).scheme in ["http", "https"]: #search일 경우에만 사용
            for item in glob(x):
                try:
                    # 이미지 다운로드
                    response = requests.get(x)
                    response.raise_for_status()
                    
                    minio_id='' #empty minio_id
                    img_path = os.path.join(os.path.dirname(script_dir), self.query_dir, 'query.JPEG')
                    
            
                except RequestException as e:
                    print(f"Failed to download the file. Error: {e}")
                
                #폴더가 없을 경우 폴더 생성
                os.makedirs(os.path.dirname(img_path), exist_ok=True)
                
                # 파일로 저장
                with open(img_path, 'wb') as f:
                    f.write(response.content)
                
                if not os.path.isfile(img_path):
                    raise FileNotFoundError(f"Image file does not exist: {img_path}")
                
                yield minio_id, img_path #절대경로

        
        else:
            raise ValueError(f"Invalid input {x}")
        
    
    #insert image vector to milvusDB
    def insert(self, insert_src):
        p_embed = (
            pipe.input('src')
                .flat_map('src', ('minio_id','img_path'), self.load_image) #반복 가능한 객체 출력 가능
                .map('img_path', 'img', ops.image_decode())
                .map('img', 'vec', ops.image_embedding.timm(model_name=self.MODEL, device=self.DEVICE))
        )
        
        p_insert = (
            p_embed.map(('minio_id', 'vec'), 'mr', ops.ann_insert.milvus_client(
                        host=self.HOST,
                        port=self.PORT,
                        collection_name=self.COLLECTION_NAME
                        ))
            .output('mr')
        )
        
        p_insert(insert_src)
    
    #using img url, search the similarity image
    def search(self, img_url):
        p_embed = (
            pipe.input('url')
                .flat_map('url', ('minio_id','img_path'), self.load_image) #img_path는 절대경로
                .map('img_path', 'img', ops.image_decode())
                .map('img', 'vec', ops.image_embedding.timm(model_name=self.MODEL, device=self.DEVICE))
        )
        
        p_search_pre = (
            p_embed.map('vec', ('search_res'), ops.ann_search.milvus_client(
                        host=self.HOST, port=self.PORT, limit=self.TOPK,
                        collection_name=self.COLLECTION_NAME))
                    .map('search_res', ('pred_minioID'), lambda x: [str(Path(y[0]).resolve()) for y in x])
                    .map('search_res', ('score'), lambda x: [str(y[1]) for y in x])
        )
        
        p_search = p_search_pre.output('img_path', 'pred_minioID', 'score')
        
        dc = p_search(img_url)
        json_data = dc.get_dict()
            
        return json_data
        
        
# Function to download the file
def download_file(url, save_path):
    if os.path.exists(save_path):
        print("File already exists. Skipping download.")
        return
    
    try:
        response = requests.get(url)
        response.raise_for_status()  # If the response was successful, no Exception will be raised
        
        with open(save_path, "wb") as f:
            f.write(response.content)
            
        print("File downloaded successfully.")
        
    except RequestException as e:
        print(f"Failed to download the file. Error: {e}")


def unzip_file(zip_file_path): #unzip image files
    try:
        unzip_dir = os.path.splitext(zip_file_path)[0]
        
        if os.path.exists(unzip_dir):
            print("Unzipped folder already exists. Skipping decompression.")
            return unzip_dir

        # Create the directory if it doesn't already exist
        os.makedirs(unzip_dir, exist_ok=True)

        with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
            zip_ref.extractall(unzip_dir)  # extract files into `unzip_dir`
        print("File unzipped successfully.")
        
    except FileNotFoundError:
        print(f"File {zip_file_path} does not exist.")
        
    except BadZipFile:
        print(f"File {zip_file_path} is not a zip file or it is corrupted.")
        
    except PermissionError:
        print(f"Permission denied when trying to create directory {unzip_dir}.")
    
    return unzip_dir


#sub dataLoader function
def _dataLoader(milvus, collection_name):
    ## Prepration Data
    #create MilvusSearch class instance
    #dataloader = MilvusLoader(collection_name)
   
    download_link = "https://github.com/towhee-io/examples/releases/download/data/reverse_image_search.zip"
    
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # Specify the path where you want to save the downloaded file
    save_path = os.path.join(os.path.dirname(script_dir),"reverse_image_search.zip")

    # Check if the file already exists before downloading
    if not os.path.exists(save_path):
        print("downloaded the image zip file.")
        download_file(download_link, save_path)
    
    # Call the unzip_file function with the downloaded file path
    unzip_dir = unzip_file(save_path)
    
    # path to csv (column_1 indicates image path) OR a pattern of image paths
    INSERT_SRC = os.path.join(os.path.dirname(script_dir), unzip_dir, 'output.csv')
    
    if not os.path.exists(INSERT_SRC):
        raise FileNotFoundError(f"{INSERT_SRC} does not exist.")
    
    collection = milvus.create_collection(collection_name)
    
    milvus.insert(INSERT_SRC) #insert id, path, label
    
    # Check collection
    print('Number of data inserted:', collection.num_entities)
    print("Success!")
    
    return collection

#main dataLoader function
def dataLoader(collection_name):
    milvus = MilvusDB(collection_name)
    milvus.connect()
    
    # if utility.has_collection(collection_name): #test
    #     utility.drop_collection(collection_name)
            
    if utility.has_collection(collection_name):
        print("collection is already existed.")
        
        return milvus

    else:
        print("creating the collection data...")
        _dataLoader(milvus, collection_name)
    
    return milvus
    

#main function
if __name__ == '__main__':
    #test
    collection_name = 'reverse_image_search'
    milvus_instance = dataLoader(collection_name)
    
    #Test
    # img_url = 'img_url'
    # result = milvus_instance.search(img_url)
    # print(result.get_dict())