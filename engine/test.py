from flask import Flask, request, jsonify
import logging
import os

app = Flask(__name__)

logging.basicConfig(level=logging.INFO)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        logging.info('No file part')
        return 'No file part', 400
    file = request.files['file']
    if file.filename == '':
        logging.info('No selected file')
        return 'No selected file', 400
    if file:
        # filename = os.path.join(os.getcwd(), file.filename)
        # file.save(filename)
        # logging.info('File successfully saved {}'.format(filename))
        return jsonify({'message': 'success'}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
