import csv
import os
from glob import glob
from towhee import pipe, ops
from dotenv import load_dotenv
import requests
from requests.exceptions import RequestException
import zipfile
from zipfile import BadZipFile
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection, utility

#class : MilvusSearch
class MilvusSearch:
    def __init__(self):
        # Towhee parameters
        self.MODEL = 'resnet50'
        self.DEVICE = None # if None, use default device (cuda is enabled if available)
        # Milvus parameters
        self.HOST = None
        self.PORT = None
        self.TOPK = 5 
        self.DIM = 2048 # dimension of embedding extracted by MODEL
        self.COLLECTION_LIST = ['reverse_image_search']
        self.COLLECTION_NAME = None
        self.INDEX_TYPE = 'IVF_FLAT'
        self.METRIC_TYPE = 'L2'
        self.unzip_dir = None
        
    # Function to download the file
    def download_file(self, url, save_path):
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
        
    def unzip_file(self, zip_file_path):
        try:
            unzip_dir = os.path.splitext(zip_file_path)[0]
            self.unzip_dir = unzip_dir
            
            if os.path.exists(unzip_dir):
                print("Unzipped folder already exists. Skipping decompression.")
                return unzip_dir

            # Create the directory if it doesn't already exist
            os.makedirs(self.unzip_dir, exist_ok=True)

            with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
                zip_ref.extractall(self.unzip_dir)  # extract files into `unzip_dir`
            print("File unzipped successfully.")
            
        except FileNotFoundError:
            print(f"File {zip_file_path} does not exist.")
            
        except BadZipFile:
            print(f"File {zip_file_path} is not a zip file or it is corrupted.")
            
        except PermissionError:
            print(f"Permission denied when trying to create directory {unzip_dir}.")
        
        return unzip_dir
        
    # Load image path
    def load_image(self, x):
        script_dir = os.path.dirname(os.path.abspath(__file__))
        os.chdir(script_dir)
        
        x = x.lower()
        
        if x.endswith('csv'):
            if not os.path.exists(x):
                raise FileNotFoundError(f"{x} does not exist.")
            
            with open(x) as f:
                reader = csv.reader(f)
                next(reader)  # Skip the header
                for item in reader:
                    if len(item) < 2:
                        raise ValueError("Invalid CSV format.")
                    
                    img_path = os.path.join(script_dir, self.unzip_dir, item[1])  # Construct absolute path from relative path
                    if not os.path.isfile(img_path):
                        raise FileNotFoundError(f"Image file does not exist: {img_path}")
                    
                    yield img_path
                        
        elif (x.endswith(".jpg") or x.endswith(".png") or x.endswith(".jpeg")):
            for item in glob(x):
                if not os.path.isfile(item):
                    raise FileNotFoundError(f"Image file does not exist: {item}")
                yield item
    
        else:
            raise ValueError(f"Invalid input {x}")
    
    
    def insert(self, insert_src):
        p_embed = (
            pipe.input('src')
                .flat_map('src', 'img_path', self.load_image)
                .map('img_path', 'img', ops.image_decode())
                .map('img', 'vec', ops.image_embedding.timm(model_name=self.MODEL, device=self.DEVICE))
        )
        
        p_insert = (
            p_embed.map(('img_path', 'vec'), 'mr', ops.ann_insert.milvus_client(
                        host=self.HOST,
                        port=self.PORT,
                        collection_name=self.COLLECTION_NAME
                        ))
            .output('mr')
        )
        
        p_insert(insert_src)
        
    def drop_collection(self, collection_name):
        if utility.has_collection(collection_name):
            utility.drop_collection(collection_name)
            print(f"Collection '{collection_name}' dropped successfully.")

        else:
            print(f"No such collection: '{collection_name}'")
        
    def create_milvus_collection(self, collection_name, dim):
        
        fields = [
            FieldSchema(name='path', dtype=DataType.VARCHAR, description='path to image', max_length=500, 
                        is_primary=True, auto_id=False),
            FieldSchema(name='embedding', dtype=DataType.FLOAT_VECTOR, description='image embedding vectors', dim=dim)
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
    
    def connect(self, collection_name):
        self.setEnv()
        connections.connect(host=self.HOST, port=self.PORT)
        
        # Create collection
        for cname in self.COLLECTION_LIST:        
            if (cname == collection_name ) and (utility.has_collection(collection_name)):
                self.COLLECTION_NAME = collection_name
                collection = Collection(self.COLLECTION_NAME)
                print(f'{self.COLLECTION_NAME} named collection is already existed.')
                return collection
            
        self.COLLECTION_NAME = collection_name
        collection = self.create_milvus_collection(self.COLLECTION_NAME, self.DIM)
        print(f'A new collection created: {self.COLLECTION_NAME}')
        
        return collection
    
    def setEnv(self):
        self.HOST = '127.0.0.1'
        self.PORT = '19530'
        #load_dotenv()
        #self.HOST = os.environ.get("milvusHOST")
        #self.PORT = os.environ.get("milvusPORT")
                    
#main function of dataset.py
def dataLoader():
    ## Prepration Data
    #create MilvusSearch class instance
    milvus = MilvusSearch()
    #set environment
   
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    download_link = "https://github.com/towhee-io/examples/releases/download/data/reverse_image_search.zip"
    
    # Specify the path where you want to save the downloaded file
    save_path = os.path.join(script_dir,"reverse_image_search.zip")

    # Check if the file already exists before downloading
    if not os.path.exists(save_path):
        print("downloaded the image zip file.")
        milvus.download_file(download_link, save_path)
    
    # Call the unzip_file function with the downloaded file path
    unzip_dir = milvus.unzip_file(save_path)
    
    # path to csv (column_1 indicates image path) OR a pattern of image paths
    INSERT_SRC = os.path.join(script_dir, unzip_dir, 'reverse_image_search.csv')
    #milvus connection
    collection = milvus.connect('reverse_image_search')
    
    milvus.insert(INSERT_SRC) #insert id, path, label
    
    # Check collection
    print('Number of data inserted:', collection.num_entities)
    print("Success!")

if __name__ == '__main__':
    dataLoader()