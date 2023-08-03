import os
from glob import glob

from config import FLASK_HOST, FLASK_PORT

from flask import Flask, request, jsonify
from flask_restx import Resource, Namespace, fields, Api

from milvusHelper import MilvusHelper
from minioHelper import MinioHelper


#flask, swagger run
app = Flask(__name__)
api = Api(app, version='1.0', title='XSearch Engine API',
          description='An API for performing image similarity search with XSearch Engine')



#endpoint setting
search = Namespace(name='search', description='Search similar image from milvus DB')
api.add_namespace(search)



#model setting
photo_model = search.model('Photo', {
    'filename': fields.String,
    'collection_name':fields.String,
    'img_path' : fields.String,
    'category': fields.String,
})



#define bucket_name
bucket_name = 'baseimages'
#define collection_name
collection_name = 'reverse_image_search'



#client setting
minio_client = MinioHelper()
milvus_client = MilvusHelper()
minio_client.set_bucket(bucket_name)



#search route
@search.route('', methods=['POST'])
class Search(Resource):
    @search.expect(photo_model)
    def post(self):
        # Get the JSON data sent by the client
        data = request.get_json()
        
        #get query image path, get collection_name
        file_name = data.get('filename')
        img_path = data.get('img_path') 
        collection_name = data.get('collection_name')

        
        #search
        result = milvus_client.search(img_path=img_path,collection_name=collection_name)
        minio_client.get_image(bucket_name,img_path)
        
        
        #remove files in results
        folder_path = './results/*'
        files = glob(folder_path)
        for f in files:
            os.remove(f)
            
        
        # Return the search results as JSON
        return jsonify(result)
    

if __name__ == '__main__':
    app.run(host = FLASK_HOST, port = FLASK_PORT , debug=True)
    