import os
from dotenv import load_dotenv
import csv
import sys
from typing import List
from towhee import pipe, ops
from pathlib import Path

from urllib.parse import urlparse
import requests
from requests.exceptions import RequestException
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection, utility
from logs import LOGGER


class MilvusHelper():
    def __init__(self):
        self.MILVUS_HOST = None
        self.MILVUS_PORT = None
        self.VECTOR_DIMENSION = '2048'
        self.INDEX_FILE_SIZE = '1024'
        self.METRIC_TYPE = 'L2'
        self.MODEL_NAME = 'resnet50'
        self.TOP_K = 5
        self.collection = None
        self.collection_name = 'reverse_image_search'
        try:
            self.set_env()
            connections.connect(host=self.MILVUS_HOST, port=self.MILVUS_PORT)
            LOGGER.debug(f"Successfully connect to Milvus with IP:{self.MILVUS_HOST} and PORT:{self.MILVUS_PORT}")
        except Exception as e:
            LOGGER.error(f"Failed to connect Milvus: {e}")
            sys.exit(1)

    def get_topK(self):
        return self.TOP_K
    
    def change_topK(self, num):
        self.TOP_K = num

    def set_env(self):
        load_dotenv()
        self.MILVUS_HOST = str(os.getenv('MILVUS_HOST'))
        self.MILVUS_PORT = int(os.getenv('MILVUS_PORT'))

    def set_collection(self, collection_name):
        try:
            self.collection_name = collection_name
            self.collection = Collection(name=collection_name)
        except Exception as e:
            LOGGER.error(f"Failed to set collection in Milvus: {e}")
            sys.exit(1)

    def has_collection(self, collection_name):
        # Return if Milvus has the collection
        return utility.has_collection(collection_name)
        

    def create_collection(self, collection_name):
        # Create milvus collection if not exists
        try:
            fields = [
            FieldSchema(name='minio_id', dtype=DataType.VARCHAR, description='minio id to image', max_length = 800,
                        is_primary=True, auto_id=False),
            FieldSchema(name='embedding', dtype=DataType.FLOAT_VECTOR, description='image embedding vectors', dim=self.VECTOR_DIMENSION)
        ]
        
            schema = CollectionSchema(fields=fields, description='image search')
            self.collection = Collection(name=collection_name, schema=schema)           
            LOGGER.debug(f"Create Milvus collection: {collection_name}")
            return "OK"
        except Exception as e:
            LOGGER.error(f"Failed create collection in Milvus: {e}")
            sys.exit(1)  

    def create_index(self, collection_name):
        # Create IVF_FLAT index on milvus collection
        try:
            self.set_collection(collection_name)
            default_index = {"metric_type": self.METRIC_TYPE, "index_type": "IVF_FLAT", "params": {"nlist": 2048}}
            status = self.collection.create_index(field_name="embedding", index_params=default_index)
            if not status.code:
                LOGGER.debug(
                    f"Successfully create index in collection:{collection_name} with param:{default_index}")
                return status
            else:
                raise Exception(status.message)
        except Exception as e:
            LOGGER.error(f"Failed to create index: {e}")
            sys.exit(1)

    def delete_collection(self, collection_name):
        # Delete Milvus collection
        try:
            self.set_collection(collection_name)
            self.collection.drop()
            LOGGER.debug("Successfully drop collection!")
            return "ok"
        except Exception as e:
            LOGGER.error(f"Failed to drop collection: {e}")
            sys.exit(1)

      # Load image path
    
    def is_supported_image_extension(self, url: str, allowed_extensions: List[str] = None) -> bool:
        if allowed_extensions is None:
            allowed_extensions = [".png", ".jpg", ".jpeg", ".bmp", ".gif"]
        url = urlparse(url).path
        file_ext = os.path.splitext(url)[1].lower()
        return file_ext in allowed_extensions
    
    def load_image_path(self, x):
        #when using method 'insert'
        if x.lower().endswith('csv'): 
            # file path
            script_dir = os.path.join(os.path.abspath(os.curdir), 'reverse_image_search')
            # os.chdir(script_dir)
            if not os.path.exists(x):
                raise FileNotFoundError(f"{x} does not exist.")
            
            with open(x) as f:
                reader = csv.reader(f)
                next(reader)  # Skip the header
                for item in reader:
                    if len(item) < 3:
                        raise ValueError("Invalid CSV format.")
                    
                    
                    img_path = os.path.join(script_dir, item[1])  # Construct absolute path from relative path
                    # 점이 중간에 있는 경우, 점 앞뒤로 슬래시가 있는 부분을 찾아 점을 뺌
                    img_path = img_path.replace('\./', '/')
                    
                    # 백슬래시를 슬래시로 바꿈
                    img_path = img_path.replace('\\', '/')

                    print(img_path)
                    
                    if not os.path.isfile(img_path):
                        raise FileNotFoundError(f"Image file does not exist: {img_path}")
                    
                    minio_id = item[3] #uuid + file format
                    
                    yield img_path, minio_id
        
        elif urlparse(x).scheme in ["http", "https"]:  # search일 경우에만 사용
            # local file path
            script_dir = os.path.dirname(os.path.abspath(__file__))
            # os.chdir(script_dir)
            if not self.is_supported_image_extension(x):
                print(f"Unsupported image extension in URL {x}")
            else:
                try:
                    # 이미지 다운로드
                    response = requests.get(x, stream=True)
                    response.raise_for_status()
                    
                    img_path = os.path.join(os.path.dirname(script_dir), 'results', 'query.JPEG')

                except RequestException as e:
                    print(f"Failed to download the file. Error: {e}")

                # 폴더가 없을 경우 폴더 생성
                os.makedirs(os.path.dirname(img_path), exist_ok=True)

                # 파일로 저장
                with open(img_path, 'wb') as f:
                    f.write(response.content)

                if not os.path.isfile(img_path):
                    raise FileNotFoundError(f"Image file does not exist: {img_path}")

                yield img_path  # 절대경로
        
        elif self.is_supported_image_extension(x):
            script_dir = os.path.dirname(os.path.abspath(__file__))
            # os.chdir(script_dir)
            
            img_path = os.path.join("..", "..", "backend", "uploads",
            os.path.basename(x))
            
            yield img_path
            
        else:
            raise ValueError(f"Invalid input {x}")
    
    def insert(self, insert_src):
    #insert image vector to milvusDB
        p_embed = (
            pipe.input('src')
                .flat_map('src', ('img_path','minio_id'), self.load_image_path) #반복 가능한 객체 출력 가능
                .map('img_path', 'img', ops.image_decode.cv2_rgb()) # cv2('rgb') : local
                .map('img', 'vec', ops.image_embedding.timm(model_name=self.MODEL_NAME))
        )
        
        p_insert = (
            p_embed.map(('minio_id','vec'), 'mr', ops.ann_insert.milvus_client(
                        host=self.MILVUS_HOST,
                        port=self.MILVUS_PORT,
                        collection_name=self.collection_name
                        ))
            .output('mr')
        )
        
        p_insert(insert_src)        
    
    def search(self, img_path):
        p_embed = (
            pipe.input('src')
                .flat_map('src', 'img_path', self.load_image_path)
                .map('img_path', 'img', ops.image_decode.cv2_rgb()) # cv2('rgb') : local
                .map('img', 'vec', ops.image_embedding.timm(model_name=self.MODEL_NAME))
        )
        
        p_search_pre = (
            p_embed.map('vec', ('search_res'), ops.ann_search.milvus_client(
                        host=self.MILVUS_HOST, port=self.MILVUS_PORT, limit=self.TOP_K,
                        collection_name=self.collection_name))
                    .map('search_res', ('pred'), lambda x: [str(y[0]) for y in x])
                    .map('search_res', ('score'), lambda x: [str(y[1]) for y in x])
        )
        
        p_search = p_search_pre.output('img_path', 'pred', 'score')
        
        dc = p_search(img_path)
        json_data = dc.get_dict()
        
       
        return json_data
    
if __name__ == '__main__':
    mil = MilvusHelper()
    
    COLLECTION_NAME = 'reverse_image_search'
    if mil.has_collection(COLLECTION_NAME):
        mil.delete_collection(COLLECTION_NAME)

