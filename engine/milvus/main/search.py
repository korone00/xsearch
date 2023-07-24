from flask import request, jsonify
from flask_restx import Resource, Namespace, fields
from model import xsearch_engine

search = Namespace(name='search', description='Search similar image from milvus DB')

photo_model = search.model('Photo', {
    'filename': fields.String,
    'content_type': fields.String,
    'size': fields.Integer,
})


@search.route('', methods=['POST'])
class SearchPhoto(Resource):
    @search.expect(photo_model)
    def post(self):
        data = search.payload
        print(data)
        # Process the information received from NestJS /upload endpoint
        # For example, you can use the photo information to perform a search
        # and return the results as JSON
        search_results = {
            'results': ['result1', 'result2', 'result3'],
            # Add more search results as needed
        }

        # Return the search results as JSON
        return jsonify(search_results)



# @search.route('', methods=['POST'])
# class SearchSimilarImages(Resource):
    
#     # Receiving data from search using JSON in the request body
#     def get():
#         data = request.json
#         key_value = data.get('key')
#         return jsonify({'received_value': key_value})   
    
#     @search.response(400,'Please check file upload.')
#     @search.response(200,'Success!')
#     @search.response(500,'Error!')
#     def post(self):
#         """유사 이미지 검색"""
#         try:
#             # Extract the image file from the request
#             if 'file' not in request.files:
#                 return jsonify({'error': 'No file part in the request.'}), 400 #http status code

#             file = request.files['file']
#             if file.filename == '':
#                 return jsonify({'error': 'No selected file.'}), 400 #http status code

#             # Call the model.py function to perform the image search
#             collection_name = 'reverse_image_search'  # Set the collection name as required
#             #collection_name = request.files['category']
            
#             results = xsearch_engine(file, collection_name)

#             return jsonify({'results': results}), 200 #http status code

#         except Exception as e:
#             return jsonify({'error': str(e)}), 500 #http status code
        