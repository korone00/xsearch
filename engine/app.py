import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_restx import Resource, Namespace, fields, Api
from milvusLoader import dataLoader
from minioLoader import imageLoader

app = Flask(__name__)
api = Api(app, version='1.0', title='XSearch Engine API',
          description='An API for performing image similarity search with XSearch Engine')

search = Namespace(name='search', description='Search similar image from milvus DB')

photo_model = search.model('Photo', {
    'filename': fields.String,
    'content_type': fields.String,
    'size': fields.Integer,
})

#define bucket_name
bucket_name = 'baseimages'

#image load with bucket name(not yet.)
minio_instance = imageLoader(bucket_name) #class minio 객체, not client


#define collection_name
collection_name = 'reverse_image_search'

#data load with collection name and milvus connect
milvus_instance = dataLoader(collection_name) #class milvus 객체
   
#from minio_id to image url
# img_url = minio_instance.get_url(minio_id)
# print(img_url)


#test
'''
minio_id = 'a78aa47ee_0417_4c3a_b2fd_97b0e7f99a2b' #get query image path, change img_path to minio_id
minio_instance.get_image(minio_id)
img_path_sample = 'results/*.JPEG'
result = milvus_instance.search(img_path_sample)
print(result)
'''

#define search function
@search.route('', methods=['POST'])
class Search(Resource):
    
    @search.expect(photo_model)
    def post(self):
        #get minio_id from requests
        data = request.get_json()  # Get the JSON data sent by the client
        minio_id = data['img_path'] #get query image path, change img_path to minio_id
        
        minio_instance.get_image(minio_id)
        img_path_result = 'results/*.JPEG'
        result = milvus_instance.search(img_path_result)

        # Return the search results as JSON
        return jsonify(result)
    
#add search endpoint
api.add_namespace(search)

#connect flask
load_dotenv()
flaskHOST = os.environ.get("flaskHOST")
flaskPORT = os.environ.get("flaskPORT")
app.run(host = flaskHOST, port = flaskPORT , debug=True)