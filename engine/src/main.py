import os
from dotenv import load_dotenv
from glob import glob

from flask import Flask, request, jsonify
from flask_restx import Resource, Namespace, fields, Api

from milvusHelper import MilvusHelper
from minioHelper import MinioHelper

import dataset


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


#client setting
minio_client = MinioHelper()
milvus_client = MilvusHelper()

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
        
        #search
        result = milvus_client.search(img_path) #json_data    
        
        #remove files in results
        folder_path = './results/*'
        files = glob(folder_path)
        for f in files:
            os.remove(f)
            
        # Return the search results as JSON
        return jsonify(result)
    

if __name__ == '__main__':
    FLASK_HOST = str(os.getenv('FLASK_HOST'))
    FLASK_PORT = int(os.getenv('FLASK_PORT'))
    app.run(host = FLASK_HOST, port = FLASK_PORT , debug=True)
    