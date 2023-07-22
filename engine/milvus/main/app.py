from dotenv import load_dotenv
import os
from flask import Flask, request, jsonify
from dataset import dataLoader
from model import xsearch_engine
from flask_restx import Api, Resource
from search import search
from upload import upload, UploadResource

app = Flask(__name__)
api = Api(app, version='1.0', title='XSearch Engine API',
          description='An API for performing image similarity search with XSearch Engine')

api.add_namespace(search)
api.add_namespace(upload)

# @app.before_first_request
# def initialize_engine():
#     print("Initializing engine...")
#     dataLoader()

if __name__ == '__main__':
    #load_dotenv()
    #flaskIP = os.environ.get("flaskIP")
    #flaskHOST = os.environ.get("flaskPORT")
    flaskHOST = '127.0.0.1'
    flaskPORT = '5000'
    app.run(host=flaskHOST, port=flaskPORT, debug=True)