from flask import request, jsonify
from flask_restx import Resource, Namespace
from model import xsearch_engine


# upload = Namespace(name='upload', description='Access upload file from NestJs')

# @upload.route('/upload', methods=['POST'])
# @upload.response(400,'Please check upload file.')
# @upload.response(200,'Success!')
# @upload.response(500,'Error!')
# @upload.param('IMG_PATH', 'Data from NestJs, Need to processing')
# class UploadResource(Resource):
#     def handle_upload():
#         file_data = request.json.get('fileData')  # Access the file data sent by NestJS
#         return file_data
#         # 업로드 이미지 경로를 받아서 upload endpoint로 전달.
#     def post_data():
#         data = {'key': 'value'}
#         # Sending data to endpoint2 using JSON in the request body
#         response = request.post('http://localhost:5000/search', json=data)
#         return response.json()


from flask import request, jsonify
from flask_restx import Resource, Namespace
  

upload = Namespace(name='upload', description='Access upload file from NestJs')

@upload.route('', methods=['POST', 'GET'])
class UploadResource(Resource):
    @upload.response(400, 'Please check upload file.')
    @upload.response(200, 'Success!')
    @upload.response(500, 'Error!')
    @upload.param('IMG_PATH', 'Data from NestJs, Need to processing')
    def post(self):
        file_data = request.json.get('fileData')  # Access the file data sent by NestJS
        
        # Process the file_data or file_path and perform the image search using your AI engine and Milvus DB.
        # Return the search results or any other response as needed.
        return jsonify({'message': 'File uploaded successfully.'})
    
    @upload.response(200, 'Success!')
    @upload.response(500, 'Error!')
    def get(self):
        # Code to handle GET requests for the '/upload' endpoint
        return jsonify({'message': 'GET request received.'})
