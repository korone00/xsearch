from flask import Flask, request, jsonify
from dataset import dataloader
from model import xsearch_engine

app = Flask(__name__)

# Endpoint for image search
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
    app.run(host='0.0.0.0', port=5000)