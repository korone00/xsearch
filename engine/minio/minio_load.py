import os
from minio import Minio
from minio.error import S3Error
from dotenv import load_dotenv
import requests
from requests.exceptions import RequestException
import zipfile
from zipfile import BadZipFile

class minioLoader():
    def __init__(self):
        self.client = None
        self.bucket_name = None
        self.scrip_dir = None
        
        
    def set_minio(self):
        load_dotenv()
        self.client = Minio(
            os.environ.get("MINIO_address"),
            access_key=os.environ.get("MINIO_access_key"),
            secret_key=os.environ.get("MINIO_secret_key"),
            secure=False,
        )
        print('complete set minio')

    def set_bucket(self, bucket_name):
        self.bucket_name = bucket_name
        try:
            if not self.client.bucket_exists(bucket_name):
                self.client.make_bucket(bucket_name)
            print('complete set bucket')
                
        except S3Error as err:
            print(err)
            
    def set_ospath(self):
        script_dir = os.path.dirname(os.path.abspath(__file__))
        os.chdir(script_dir)
        self.script_dir = script_dir
            
    def set_path(self, download_link):
        
        self.set_ospath()
        
        # Specify the path where you want to save the downloaded file
        save_path = os.path.join(self.script_dir,"reverse_image_search.zip")
        self.save_path = save_path
        
        # Check if the file already exists before downloading
        if not os.path.exists(save_path):
            print("downloaded the image zip file.")
            self.download_file(download_link, save_path)
                

    def download_file(self, url, save_path):
        if os.path.exists(save_path):
            print("File already exists. Skipping download.")
            return
        
        try:
            response = requests.get(url)
            response.raise_for_status()  # If the response was successful, no Exception will be raised
            with open(save_path, "wb") as f:
                f.write(response.content)
                
            print("File downloaded successfully.")
            
        except RequestException as e:
            print(f"Failed to download the file. Error: {e}")
            
        return self.unzip_file(save_path)


    def unzip_file(self, zip_file_path):
        try:
            unzip_dir = os.path.splitext(zip_file_path)[0]
            self.unzip_dir = unzip_dir
            
            if os.path.exists(unzip_dir):
                print("Unzipped folder already exists. Skipping decompression.")
                return

            # Create the directory if it doesn't already exist
            os.makedirs(unzip_dir, exist_ok=True)

            with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
                zip_ref.extractall(unzip_dir)  # extract files into `unzip_dir`
            print("File unzipped successfully.")
            
        except FileNotFoundError:
            print(f"File {zip_file_path} does not exist.")
            
        except BadZipFile:
            print(f"File {zip_file_path} is not a zip file or it is corrupted.")
            
        except PermissionError:
            print(f"Permission denied when trying to create directory {unzip_dir}.")
        
        return 
    
    def load_minio(self):
        try:
            folder_path = os.path.join(self.script_dir, self.unzip_dir)
            
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
                        result = self.client.fput_object(
                            self.bucket_name, s3_key, file_path,
                        )
                        
                        print(
                            "created {0} object; etag: {1}, version-id: {2}".format(
                                result.object_name, result.etag, result.version_id,
                            ),
                        )
                        
                    except S3Error as err:
                        print(err)
                        
                else:
                    print("wrong format.")

if __name__ == '__main__':
    dataLoader = minioLoader()
    dataLoader.set_minio()
    dataLoader.set_bucket('images')
    
    download_link = "https://github.com/towhee-io/examples/releases/download/data/reverse_image_search.zip"
    dataLoader.set_path(download_link)
    dataLoader.download_file(dataLoader.script_dir, dataLoader.save_path)
    dataLoader.unzip_file(dataLoader.save_path)
    dataLoader.load_minio()