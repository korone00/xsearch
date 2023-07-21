import csv
from glob import glob
from towhee import pipe, ops
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection, utility
from dotenv import load_dotenv
import requests
import zipfile
import os
from flask import flask

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
        self.COLLECTION_NAME = 'reverse_image_search'
        self.INDEX_TYPE = 'IVF_FLAT'
        self.METRIC_TYPE = 'L2'
        
    # Function to download the file
    def download_file(self, url, save_path):
        if os.path.exists(save_path):
            print("File already exists. Skipping download.")
            return

        response = requests.get(url)
        if response.status_code == 200:
            with open(save_path, "wb") as f:
                f.write(response.content)
            print("File downloaded successfully.")
            
        else:
            print("Failed to download the file.")
        
    # Unzip the downloaded file in the same directory
    def unzip_file(self, zip_file_path):
        unzip_dir = os.path.splitext(zip_file_path)[0]
        if os.path.exists(unzip_dir):
            print("Unzipped folder already exists. Skipping decompression.")
            return

        with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
            zip_ref.extractall(os.path.dirname(zip_file_path))
        print("File unzipped successfully.")
        
    # Load image path
    def load_image(self, x):
        script_dir = os.path.dirname(os.path.abspath(__file__))
        os.chdir(script_dir)
        
        if x.endswith('csv'):
            with open(x) as f:
                reader = csv.reader(f)
                next(reader)
                for item in reader:
                    yield item[1]
        else:
            for item in glob(x):
                yield item
    
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
        
    def create_milvus_collection(self, collection_name, dim):
        fields = [
            FieldSchema(name='path', dtype=DataType.VARCHAR, description='path to image', max_length=500, 
                        is_primary=True, auto_id=False),
            FieldSchema(name='embedding', dtype=DataType.FLOAT_VECTOR, description='image embedding vectors', dim=dim)
        ]
        schema = CollectionSchema(fields=fields, description='reverse image search')
        collection = Collection(name=collection_name, schema=schema)

        index_params = {
            'metric_type': self.METRIC_TYPE,
            'index_type': self.INDEX_TYPE,
            'params': {"nlist": 2048}
        }
        collection.create_index(field_name='embedding', index_params=index_params)
        return collection
    
    def connect(self):
        # Connect to Milvus service
        connections.connect(host=self.HOST, port=self.PORT)
            
        # Create collection
        if utility.has_collection(self.COLLECTION_NAME):
            collection = Collection(self.COLLECTION_NAME)
            return collection
        
        else:
            collection = self.create_milvus_collection(self.COLLECTION_NAME, self.DIM)

        print(f'A new collection created: {self.COLLECTION_NAME}')
        
        return collection
    
    def setEnv(self):
        self.HOST = '0.0.0.0'
        self.PORT = '19530'
        #load_dotenv()
        #self.HOST = os.environ.get("milvusHOST")
        #self.PORT = os.environ.get("milvusPORT")
                    
#main function of dataset.py
def dataLoader():
    ## Prepration Data
    #create MilvusSearch class instance
    milvus = MilvusSearch()
    milvus.setEnv()
    
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # path to csv (column_1 indicates image path) OR a pattern of image paths
    INSERT_SRC = os.path.join(script_dir,'reverse_image_search.csv')
    
    download_link = "https://github.com/towhee-io/examples/releases/download/data/reverse_image_search.zip"
    
    # Specify the path where you want to save the downloaded file
    save_path = os.path.join(script_dir,"reverse_image_search.zip")

    # Check if the file already exists before downloading
    if not os.path.exists(save_path):
        milvus.download_file(download_link, save_path)
    
    # Call the unzip_file function with the downloaded file path
    milvus.unzip_file(save_path)

    #milvus connection
    collection = milvus.connect()
    
    milvus.insert(INSERT_SRC)
    
    # Check collection
    print('Number of data inserted:', collection.num_entities)
    print("Success!")

if __name__ == '__main__':
    dataLoader()