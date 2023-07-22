import os
from minio import Minio
from minio.error import S3Error

# set client
client = Minio(
    "127.0.0.1:9000",
    access_key="YVBEDpDv5r7mXK53zqOr",
    secret_key="JAVY3ydROz0g4Y26jhAPW7EHfSuBu49JyCCL6zaG",
    secure=False,
)

bucket_name = 'images' 

try:
    if not client.bucket_exists(bucket_name):
        client.make_bucket(bucket_name)
        
except S3Error as err:
    print(err)

script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

try:
    folder_path = os.path.join(script_dir,"../reverse_image_search")
    if not os.path.exists(folder_path):
        raise Exception(f"Directory does not exist: {folder_path}.\n please run dataset.py in milvus")
    
except Exception as e:
    print(f'Error: {e}')

#upload image files to minio server
for subdir, dirs, files in os.walk(folder_path):
    for file in files:
        print(file)
        if file.lower().endswith(".jpg") or file.lower().endswith(".png") or file.lower().endswith(".jpeg"):
            file_path = os.path.join(subdir, file)

            s3_key = os.path.relpath(file_path, folder_path).replace("\\", "/")

            try:
                result = client.fput_object(
                    bucket_name, s3_key, file_path,
                )
                print(
                    "created {0} object; etag: {1}, version-id: {2}".format(
                        result.object_name, result.etag, result.version_id,
                    ),
                )
            except S3Error as err:
                print(err)
        else:
            print("no such files.")