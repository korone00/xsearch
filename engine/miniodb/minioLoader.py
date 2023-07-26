from PIL import Image
import io
import os
import csv
import uuid
from glob import glob
from minio import Minio
from minio.error import S3Error
from dotenv import load_dotenv
import requests
from requests.exceptions import RequestException
import zipfile
from zipfile import BadZipFile
from datetime import timedelta

class MinioDB():
    def __init__(self, bucket_name):
        self.client = None
        self.bucket_name = bucket_name
        self.access_key = None
        self.secret_key = None
        self.minio_address= None
        
    
    def set_env(self):
        
        load_dotenv()

        self.access_key = os.environ.get("MINIO_access_key")
        self.secret_key = os.environ.get("MINIO_secret_key")    
        self.minio_address = os.environ.get("MINIO_address")
        
    
    def connect(self):
        #set environment
        self.set_env()
        
        self.client = Minio(
            self.minio_address,
            access_key=self.access_key,
            secret_key=self.secret_key,
            secure=False,
        )
        
        return self.client
    
    #insert images to min_io
    def insert(self, folder_path, image_src): #folder_path, output_csv
        
        if image_src.endswith('csv'):
            if not os.path.exists(image_src):
                raise FileNotFoundError(f"{image_src} does not exist.")
            
            with open(image_src) as f:
                reader = csv.reader(f)
                next(reader)  # Skip the header
                for item in reader:
                    if len(item) < 3:
                        raise ValueError("Invalid CSV format.")
                    
                    
                    img_path = os.path.join(folder_path, item[1])  # Construct absolute path from relative path
                    # 점이 중간에 있는 경우, 점 앞뒤로 슬래시가 있는 부분을 찾아 점을 뺌
                    img_path = img_path.replace('\./', '/')
                    
                    # 백슬래시를 슬래시로 바꿈
                    img_path = img_path.replace('\\', '/')

                    print(img_path)
                    
                    if not os.path.isfile(img_path):
                        raise FileNotFoundError(f"Image file does not exist: {img_path}")
                    
                    minio_id = item[3] + '.JPEG'#uuid + file format
                    
                    try:
                    # Open image and convert to bytes
                        result = self.client.fput_object(
                            self.bucket_name, minio_id, img_path)
                        
                        print(
                            "created {0} object; etag: {1}, version-id: {2}".format(
                                result.object_name, result.etag, result.version_id,
                            ),
                        )
                        
                    except S3Error as err:
                        print(err)
                        
                        
        elif (image_src.lower().endswith(".jpg") or image_src.lower().endswith(".png") or image_src.lower().endswith(".jpeg")):
            for item in glob(image_src):
                if not os.path.isfile(item):
                    raise FileNotFoundError(f"Image file does not exist: {item}")
                
                minio_id = str(uuid.uuid4())
                
                try:
                        result = self.client.fput_object(
                            self.bucket_name, minio_id, item,
                        )
                        
                        print(
                            "created {0} object; etag: {1}, version-id: {2}".format(
                                result.object_name, result.etag, result.version_id,
                            ),
                        )
                        
                except S3Error as err:
                    print(err)

    
        else:
            raise ValueError(f"Invalid input {image_src}")
                    
    
    def get_url(self, minio_id): #minio id 이용해서 이미지 찾기 -> url 찾기 -> url로 milvus에서 이미지로 만들어서 디코딩 -> search -> minio id 반환
        #milvus에 저장되는 id를 minio id로 저장
        try:
            #data = self.client.get_object("images", minio_id)
            data_url = self.client.presigned_get_object(self.bucket_name, minio_id, expires=timedelta(hours=1))

            # with open(self.save_path, "wb") as file:
            #     file.write(data.read())
            
            return data_url
                
        except S3Error as err:
            print(f"error: {err}")
        
#add minio_id 
def create_csv(input_csv, output_csv, folder):
    input_path = os.path.join(folder, input_csv)
    output_path = os.path.join(folder, output_csv)
    
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
            minio_id = str(uuid.uuid4())
            row.append(minio_id)
            writer.writerow(row)
    
    return output_path


#zip file download
def download_file(url, save_path):
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
        
    return

#unzip zip foler
def unzip_file(zip_file_path):
    try:
        unzip_dir = os.path.splitext(zip_file_path)[0]

        if os.path.exists(unzip_dir):
            print("Unzipped folder already exists. Skipping decompression.")
            return unzip_dir

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
    
    return unzip_dir

#sub imageLoader function
def _imageLoader(minio):
    
    download_link = "https://github.com/towhee-io/examples/releases/download/data/reverse_image_search.zip"
    
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    save_path = os.path.join(os.path.dirname(script_dir), "reverse_image_search.zip")
    
            # Check if the file already exists before downloading
    print(save_path)
    
    if not os.path.exists(save_path):
        print("downloaded the image zip file.")
        download_file(download_link, save_path)
        
    # Call the unzip_file function with the downloaded file path
    unzip_dir = unzip_file(save_path) #zip foler path
    
    try:
        folder_path = os.path.join(os.path.dirname(script_dir), unzip_dir) # folder 경로만
        
        if not os.path.exists(folder_path):
            raise Exception(f"Directory does not exist: {folder_path}.")
        
        #define csv file names
        input_csv = 'reverse_image_search.csv'
        temp_csv = 'output.csv'
        
        #create output csv file including minio_id
        output_csv = create_csv(input_csv, temp_csv, folder_path)
   
        #dataLoader.set_path(download_link)
        minio.insert(folder_path, output_csv) #output_csv는 절대경로
        print("image load to min.io successfully!")
        
    except Exception as e:
        print(f'Error: {e}')
    
    


#main imageLoader function
def imageLoader(bucket_name):
    minio = MinioDB(bucket_name)
    _minio_instance = minio.connect()
    
    # # #test
    # if _minio_instance.bucket_exists(bucket_name):
    #     _minio_instance.remove_bucket(bucket_name)
    
    try:
        if not _minio_instance.bucket_exists(bucket_name):
            _minio_instance.make_bucket(bucket_name)
            
            print("creating a new bucket...")
            _imageLoader(minio)
        
        else:
            print("The bucket is already existed.")
            
    except S3Error as err:
        print(err)
    
    return minio  #Minio class instance





#main function
if __name__ == '__main__':
    #test
    bucket_name = 'images'
    minio_instance = imageLoader(bucket_name)
    
    #TEST
    # minio_id = 'uuid + .JPEG'
    # img_url = minio_instance.get_url(minio_id)
    # print(img_url)
    