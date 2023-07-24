import os
from dotenv import load_dotenv
from flask import Flask
from flask_restx import Resource, Namespace, fields
from dataset import dataLoader
from model import MilvusPredict
from flask_restx import Api
from pymilvus import utility
from search import search

app = Flask(__name__)
api = Api(app, version='1.0', title='XSearch Engine API',
          description='An API for performing image similarity search with XSearch Engine')

api.add_namespace(search)


@app.before_first_request
def initialize_engine():
    app_instance = App()
    app_instance.initialize_milvus()

class App():
    def __init__(self):
        self.flaskHOST = None
        self.flaskPORT = None
        self.collection_name = 'reverse_image_search'
        self.milvus = None
    
    def set_env(self):
        load_dotenv()
        self.flaskHOST = os.environ.get("flaskIP")
        self.flaskPORT = os.environ.get("flaskPORT")

    def initialize_milvus(self):
        print("Initializing engine...")
        self.milvus = MilvusPredict()
        
        #self.set_env()
        self.milvus.connect()
        
        if utility.has_collection(self.collection_name):
            # Get collection
            self.milvus.setCollectionName(self.collection_name)
            # #test
            # img_path = 'C:/Users/Minhyeok/Desktop/test branch/xsearch_dev/xsearch_dev/engine/milvus/main/dddd.JPEG' # 상대경로로는 안되는데 절대 경로로는 실행됨.
            # jsons = milvus.search(img_path) #return json
            # print(jsons)
            
        else:
            dataLoader()
            
if __name__ == '__main__':
    initialize_engine()
    
    
        