import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_restx import Resource, Namespace, fields, Api
from milvusdb.milvusLoader import dataLoader
from miniodb.minioLoader import imageLoader
'''
app = Flask(__name__)
api = Api(app, version='1.0', title='XSearch Engine API',
          description='An API for performing image similarity search with XSearch Engine')

search = Namespace(name='search', description='Search similar image from milvus DB')

photo_model = search.model('Photo', {
    'filename': fields.String,
    'content_type': fields.String,
    'size': fields.Integer,
})
'''

#define bucket_name
bucket_name = 'images'

#image load with bucket name(not yet.)
minio_instance = imageLoader(bucket_name) #class minio 객체, not client


#define collection_name
collection_name = 'reverse_image_search'

#data load with collection name and milvus connect
milvus_instance = dataLoader(collection_name) #class milvus 객체

minio_id = '8cb92fe3-ec7a-4549-a6c4-17c029dce95b.JPEG' #get query image path, change img_path to minio_id
        
#from minio_id to image url
img_url = minio_instance.get_url(minio_id)

#img_path_sample = 'reverse_image_search/test/apiary/*.JPEG'
#get result data from milvus_data
result = milvus_instance.search(img_url)
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
        
        #from minio_id to image url
        img_url = minio_instance.get_url(minio_id)
        
        #img_path_sample = 'reverse_image_search/test/apiary/*.JPEG'
        #get result data from milvus_data
        result = milvus_instance.search(img_url)

        # Return the search results as JSON
        return jsonify(result)
    
    
    
#add search endpoint
api.add_namespace(search)

#connect flask
load_dotenv()
flaskHOST = os.environ.get("flaskHOST")
flaskPORT = os.environ.get("flaskPORT")
app.run(host = flaskHOST, port = flaskPORT , debug=True)

'''