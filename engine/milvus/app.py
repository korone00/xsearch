from dotenv import load_dotenv
from flask import Flask
from dataset import dataLoader
from model import MilvusPredict
from flask_restx import Api
from search import search
from upload import upload
from pymilvus import utility

app = Flask(__name__)
api = Api(app, version='1.0', title='XSearch Engine API',
          description='An API for performing image similarity search with XSearch Engine')

api.add_namespace(search)
api.add_namespace(upload)

collection_name = 'reverse_image_search' 

@app.before_first_request
def initialize_engine():
    print("Initializing engine...")
    milvus = MilvusPredict()
    milvus.connect()
    if utility.has_collection(collection_name):
        # Get collection
        milvus.setCollectionName(collection_name)
        # #test
        # img_path = 'C:/Users/Minhyeok/Desktop/test branch/xsearch_dev/xsearch_dev/engine/milvus/main/dddd.JPEG' # 상대경로로는 안되는데 절대 경로로는 실행됨.
        # jsons = milvus.search(img_path) #return json
        # print(jsons)
    else:
        dataLoader()

if __name__ == '__main__':
    #load_dotenv()
    #flaskIP = os.environ.get("flaskIP")
    #flaskHOST = os.environ.get("flaskPORT")
    flaskHOST = '127.0.0.1'
    flaskPORT = '5000'
    app.run(host=flaskHOST, port=flaskPORT, debug=True)