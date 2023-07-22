import io
import os
from minio import Minio
from minio.error import S3Error

# Create a client with the MinIO server, access key, and secret key
client = Minio(
    "127.0.0.1:9000",
    access_key="YVBEDpDv5r7mXK53zqOr",
    secret_key="JAVY3ydROz0g4Y26jhAPW7EHfSuBu49JyCCL6zaG",
    secure=False,
)

script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)
    
img_path = 'train/yawl/n04612504_8870.JPEG'
save_path = os.path.join(script_dir,'results', os.path.basename(img_path))

try:
    data = client.get_object("images", img_path)

    os.makedirs(os.path.dirname(save_path), exist_ok=True)

    with open(save_path, "wb") as file:
        file.write(data.read())
        
except S3Error as err:
    print(f"error: {err}")
    
'''
{'img_path': 'reverse_image_search/test/apiary\\n02727426_4398.JPEG', 
'pred': ['C:\\Users\\limgm\\xsearch\\engine\\milvus\\reverse_image_search\\train\\apiary\\n02727426_25725.JPEG', 
'C:\\Users\\limgm\\xsearch\\engine\\milvus\\reverse_image_search\\train\\apiary\\n02727426_7944.JPEG', 
'C:\\Users\\limgm\\xsearch\\engine\\milvus\\reverse_image_search\\train\\apiary\\n02727426_39745.JPEG'], 
'score': ['24.710521697998047', '26.434852600097656', '43.78236770629883']}
'''