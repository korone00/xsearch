import csv
from glob import glob
from statistics import mean

from towhee import pipe, ops
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection, utility

import requests
import zipfile
import os



# Get the directory path of the current Python script
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)
#c:\Users\Minhyeok\Project\xsearch\engine\milvus

if __name__ == '__main__':
    ## Prepration Data
    # Download link as a string
    download_link = "https://github.com/towhee-io/examples/releases/download/data/reverse_image_search.zip"

    # Function to download the file
    def download_file(url, save_path):
        if os.path.exists(save_path):
            print("File already exists. Skipping download.")
            return

        response = requests.get(url)
        if response.status_code == 200:
            with open(save_path, "wb") as f:
                f.write(response.content)
            print("File downloaded successfully.")
        else:
            print("Failed to download the file.")

    # Unzip the downloaded file in the same directory
    def unzip_file(zip_file_path):
        unzip_dir = os.path.splitext(zip_file_path)[0]
        if os.path.exists(unzip_dir):
            print("Unzipped folder already exists. Skipping decompression.")
            return

        with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
            zip_ref.extractall(os.path.dirname(zip_file_path))
        print("File unzipped successfully.")

    # Specify the path where you want to save the downloaded file
    save_path = os.path.join(script_dir,"reverse_image_search.zip")

    # Check if the file already exists before downloading
    if not os.path.exists(save_path):
        download_file(download_link, save_path)

    # Call the unzip_file function with the downloaded file path
    unzip_file(save_path)

# Towhee parameters
MODEL = 'resnet50'
DEVICE = None # if None, use default device (cuda is enabled if available)

# Milvus parameters
HOST = '127.0.0.1'
PORT = '19530'
TOPK = 5 
DIM = 2048 # dimension of embedding extracted by MODEL
COLLECTION_NAME = 'reverse_image_search'
INDEX_TYPE = 'IVF_FLAT'
METRIC_TYPE = 'L2'

# path to csv (column_1 indicates image path) OR a pattern of image paths
INSERT_SRC = os.path.join(script_dir,'reverse_image_search.csv')
QUERY_SRC = './test/*/*.JPEG'


# Load image path
def load_image(x):
    if x.endswith('csv'):
        with open(x) as f:
            reader = csv.reader(f)
            next(reader)
            for item in reader:
                yield item[1]
    else:
        for item in glob(x):
            yield item
            
# Embedding pipeline
p_embed = (
    pipe.input('src')
        .flat_map('src', 'img_path', load_image)
        .map('img_path', 'img', ops.image_decode())
        .map('img', 'vec', ops.image_embedding.timm(model_name=MODEL, device=DEVICE))
)

# Create milvus collection (delete first if exists)
def create_milvus_collection(collection_name, dim):
    fields = [
        FieldSchema(name='path', dtype=DataType.VARCHAR, description='path to image', max_length=500, 
                    is_primary=True, auto_id=False),
        FieldSchema(name='embedding', dtype=DataType.FLOAT_VECTOR, description='image embedding vectors', dim=dim)
    ]
    schema = CollectionSchema(fields=fields, description='reverse image search')
    collection = Collection(name=collection_name, schema=schema)

    index_params = {
        'metric_type': METRIC_TYPE,
        'index_type': INDEX_TYPE,
        'params': {"nlist": 2048}
    }
    collection.create_index(field_name='embedding', index_params=index_params)
    return collection


# Connect to Milvus service
connections.connect(host=HOST, port=PORT)

# Create collection
if utility.has_collection(COLLECTION_NAME):
    collection = Collection(COLLECTION_NAME)
else:
    collection = create_milvus_collection(COLLECTION_NAME, DIM)

print(f'A new collection created: {COLLECTION_NAME}')

if __name__ == '__main__':
    # Insert pipeline
    p_insert = (
            p_embed.map(('img_path', 'vec'), 'mr', ops.ann_insert.milvus_client(
                        host=HOST,
                        port=PORT,
                        collection_name=COLLECTION_NAME
                        ))
            .output('mr')
    )


    # Insert data
    p_insert(INSERT_SRC)

# Check collection
print('Number of data inserted:', collection.num_entities)
print("Success!")

collection.release()