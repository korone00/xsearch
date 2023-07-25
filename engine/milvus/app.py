import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_restx import Resource, Namespace, fields
from milvus import dataLoader
from flask_restx import Api

app = Flask(__name__)
api = Api(app, version='1.0', title='XSearch Engine API',
          description='An API for performing image similarity search with XSearch Engine')

search = Namespace(name='search', description='Search similar image from milvus DB')

photo_model = search.model('Photo', {
    'filename': fields.String,
    'content_type': fields.String,
    'size': fields.Integer,
})

#define collection_name
collection_name = 'reverse_image_search'

#data load with collection name and milvus connect
milvus_instance = dataLoader(collection_name)

#image load with bucket name(not yet.)

#define search function
@search.route('', methods=['POST'])
class Search(Resource):
    @search.expect(photo_model)
    def post(self):
        #data = search.payload
        data = request.get_json()  # Get the JSON data sent by the client
        img_path = data['img_path'] #get query image path
            
        #img_path_sample = 'reverse_image_search/test/apiary/*.JPEG'
        result = milvus_instance.search(img_path)

        # Return the search results as JSON
        return jsonify(result)
    
#add search endpoint
api.add_namespace(search)

#connect flask
load_dotenv()
flaskHOST = os.environ.get("flaskHOST")
flaskPORT = os.environ.get("flaskPORT")
app.run(host = flaskHOST, port = flaskPORT , debug=True)