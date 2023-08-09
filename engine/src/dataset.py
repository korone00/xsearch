import os
from dotenv import load_dotenv
import csv
import uuid
import requests
import zipfile
import shutil

from milvusHelper import MilvusHelper
from minioHelper import MinioHelper

load_dotenv()

#setting variables
download_link = "https://github.com/towhee-io/examples/releases/download/data/reverse_image_search.zip"
temp_csv = 'output.csv'
bucket_name = str(os.getenv('MINIO_IMAGE_BUCKET'))
query_bucket_name = str(os.getenv('MINIO_QUERY_BUCKET'))
folder_name = "reverse_image_search"
input_csv = 'reverse_image_search.csv'
collection_name = "reverse_image_search" 
csv_path = None
           
def create_csv():
    input_path = os.path.join(folder_name, input_csv)
    output_path = os.path.join(folder_name, temp_csv)
    
    if os.path.exists(output_path):
        return output_path
    
    with open(input_path, 'r') as input_file, open(output_path, 'w', newline='') as output_file:
        reader = csv.reader(input_file)
        writer = csv.writer(output_file)

        # 첫 줄(헤더)에 새로운 열 이름 추가
        headers = next(reader)
        headers.append('minio_id')
        
        writer.writerow(headers)

        # 각 줄에 랜덤 값을 추가
        for row in reader:
            minio_id = 'a' + str(uuid.uuid4()).replace('-','_')
            row.append(minio_id)
            writer.writerow(row)
    
    return output_path

def get_minio_id(csv_path):
    try: 
        if csv_path.lower().endswith('csv'):
            with open(csv_path) as f:
                reader = csv.reader(f)
                next(reader)  # Skip the header
                
                for item in reader:
                    img_path = os.path.join(folder_name, item[1]).replace('\./', '/').replace('\\', '/')
                    category = item[2]
                    minio_id = item[3]
                    yield img_path, category, minio_id
                
    except Exception as e:
        print(f"Error: {e}")

abspath = os.path.dirname(os.path.realpath(__file__))
#local img dataset preprocessing
try:
    if not os.path.exists(os.path.join(abspath, folder_name)):
        # Create reverse_image_search folder
        os.makedirs(os.path.join(abspath , folder_name))

        # Download file
        response = requests.get(download_link)
        if response.status_code != 200:
            raise Exception("Failed to download file.")

        zip_path = os.path.join(abspath, folder_name, "reverse_image_search.zip")

        # Save zip file
        with open(zip_path, "wb") as f:
            f.write(response.content)

        # Extract zip file
        with zipfile.ZipFile(zip_path, 'r') as zip_ref:
            zip_ref.extractall(os.path.join(abspath , folder_name))

        # Remove reverse_image_search.zip file
        os.remove(zip_path)

        # Remove "exception", "object" folders
        for dir_name in ["exception", "object"]:
            shutil.rmtree(os.path.join(abspath , folder_name, dir_name))
    else:
        print(f"already exists {folder_name} folder.")
        
    try:
        folder_path = os.path.join(abspath , folder_name)  # folder 경로만

        if not os.path.exists(folder_path):
            raise Exception(f"Directory does not exist: {folder_path}.")

        # create output csv file including minio_id
        output_csv = create_csv()
        
    except Exception as e:
        print(f'Error: {e}')
except Exception as e:
    print(f"Error: {e}")


#insert imgs to minio
try:
    minio_client = MinioHelper()
    csv_path = os.path.join(abspath , collection_name, "output.csv").replace('\\','/')
    #if bucket exists, then pass upload
    if not minio_client.client.bucket_exists(bucket_name):
        minio_client.set_bucket(bucket_name)
        for img_path, category, minio_id in get_minio_id(csv_path):
            minio_client.process_image(img_path=img_path, category=category, minio_id=minio_id)
            print("image load to min.io successfully!")
    else:
        minio_client.set_bucket(bucket_name)
        print(f"{minio_client.bucket_name} already exists")

    if not minio_client.client.bucket_exists(query_bucket_name):
        minio_client.set_query_bucket(query_bucket_name)
        print(f"{minio_client.query_bucket_name} already exists")

except Exception as e:
        print(f"Error: {e}")


#insert embedding vec to milvus
try:
    milvus_client = MilvusHelper()
    if milvus_client.has_collection(collection_name):
        milvus_client.set_collection(collection_name)

    else:
        milvus_client.create_collection(collection_name)
        milvus_client.create_index(collection_name)
    
        # abs path of csv_path
        output_csv_path = os.path.join(os.path.abspath(os.curdir), 'reverse_image_search', 'output.csv')
        

        #insert embedding vector to milvus DB
        milvus_client.insert(output_csv_path)
        print("milvus_client setting")
except Exception as e:
    print(f"Error: {e}")