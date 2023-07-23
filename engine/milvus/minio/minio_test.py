import io
import os
from minio import Minio
from minio.error import S3Error
from minio_load import minioLoader

class minioSearch(minioLoader):
    def __init__(self):
        super().__init__()
        self.save_path = None
    
    def set_imgpath(self, img_path):
        if os.path.isabs(img_path):
            img_path = self.change_path(img_path)
            
        self.set_ospath()
        
        save_path = os.path.join(self.script_dir,'results', os.path.basename(img_path))
        self.save_path = save_path
        
    def get_image(self, img_path):
        try:
            data = self.client.get_object("images", img_path)

            os.makedirs(os.path.dirname(self.save_path), exist_ok=True)

            with open(self.save_path, "wb") as file:
                file.write(data.read())
                
        except S3Error as err:
            print(f"error: {err}")
    
    def change_path(self, abs_path):
        path_parts = abs_path.split('\\')  
        new_path = os.path.join(*path_parts[-4:])
        return new_path

if __name__ == '__main__':
    dataLoader = minioSearch()
    dataLoader.set_minio()
    dataLoader.set_bucket('images')
    
    img_path = 'train/yawl/n04612504_8870.JPEG'

    dataLoader.set_imgpath(img_path)
    dataLoader.get_image(img_path)
    
'''json examples
{'img_path': 'reverse_image_search/test/apiary\\n02727426_4398.JPEG', 
'pred': ['C:\\Users\\limgm\\xsearch\\engine\\milvus\\reverse_image_search\\train\\apiary\\n02727426_25725.JPEG', 
'C:\\Users\\limgm\\xsearch\\engine\\milvus\\reverse_image_search\\train\\apiary\\n02727426_7944.JPEG', 
'C:\\Users\\limgm\\xsearch\\engine\\milvus\\reverse_image_search\\train\\apiary\\n02727426_39745.JPEG'], 
'score': ['24.710521697998047', '26.434852600097656', '43.78236770629883']}
'''
    
