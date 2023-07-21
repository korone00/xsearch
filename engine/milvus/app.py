from dotenv import load_dotenv
import os
from flask import Flask, request, jsonify
from dataset import dataLoader
from model import xsearch_engine

app = Flask(__name__)

@app.before_first_request
def initialize_engine():
    print("Initializing engine...")
    dataLoader()
    
@app.route('/search', methods=['POST'])
def search_similar_images():
    try:
        # Extract the image file from the request
        if 'file' not in request.files:
            return jsonify({'error': 'No file part in the request.'}), 400 #http status code

        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No selected file.'}), 400 #http status code

        # Call the model.py function to perform the image search
        collection_name = 'reverse_image_search'  # Set the collection name as required
        #collection_name = request.files['category']
        
        results = xsearch_engine(file, collection_name)

        return jsonify({'results': results}), 200 #http status code

    except Exception as e:
        return jsonify({'error': str(e)}), 500 #http status code

if __name__ == '__main__':
    #load_dotenv()
    #flaskIP = os.environ.get("flaskIP")
    #flaskHOST = os.environ.get("flaskPORT")
    flaskHOST = '127.0.0.1'
    flaskPORT = '5000'
    app.run(host=flaskHOST, port=flaskPORT)

