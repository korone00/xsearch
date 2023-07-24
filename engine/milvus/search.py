from flask import request, jsonify
from flask_restx import Resource, Namespace, fields
from model import MilvusPredict
from dataset import dataLoader
from pymilvus import utility
from app import App

search = Namespace(name='search', description='Search similar image from milvus DB')

photo_model = search.model('Photo', {
    'filename': fields.String,
    'content_type': fields.String,
    'size': fields.Integer,
})


@search.route('', methods=['POST'])
class Search(Resource):
    @search.expect(photo_model)
    def post(self):
        #data = search.payload
        data = request.get_json()  # Get the JSON data sent by the client
        img_path = data['img_path']
        # Process the information received from NestJS /upload endpoint
        # For example, you can use the photo information to perform a search
        # and return the results as JSON
        
        milvus = MilvusPredict()
        milvus.connect()
        collection_name = 'reverse_image_search'
        
        if utility.has_collection(collection_name):
            # Get collection
            milvus.setCollectionName(collection_name)
            #
            # #test
            #img_path = 'C:\\Users\\limgm\\xsearch\\engine\\milvus\\main\\reverse_image_search\\train\\Afghan_hound\\n02088094_1045.JPEG' # 상대경로로는 안되는데 절대 경로로는 실행됨.
            #jsons = milvus.search(img_path) #return json
            #print(jsons)
            
        else:
            dataLoader()
            
        # Do something with the image_path...
        #img_path_sample = 'reverse_image_search/test/apiary/*.JPEG'
        result = milvus.search(img_path)

        # Return the search results as JSON
        return jsonify(result)