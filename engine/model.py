from transformers import ViTFeatureExtractor, ViTModel
import chromadb
from tqdm import tqdm
import requests
from PIL import Image
import os
#from chromadb.config import Settings

class Xsearch:
    def __init__(self): #initialize model and database
        self.feature_extractor = ViTFeatureExtractor.from_pretrained('facebook/dino-vits16')
        self.model = ViTModel.from_pretrained('facebook/dino-vits16')
        self.client = chromadb.PersistentClient(path="chroma") 
        '''
        self.client = chromadb.Client(Settings(
            chroma_db_impl="duckdb+parquet",
            persist_directory=".chroma/index" # Optional, defaults to .chromadb/ in the current directory
        ))
        '''
        self.collection = self.client.get_collection("foods")
     
    def __call__(self, img_path): #call function with image path
        img_path = self.check_image_file(img_path)
        
        #process exception
        if (img_path == False):
            return print(f"File '{img_path}' is not a supported image file.")
        
        return self.embedding(img_path)
     
    def check_image_file(self, img_path):
        # List of supported image file extensions
        image_extensions = ['.jpg', '.jpeg', '.png', '.gif']

        # Get the file extension
        _, extension = os.path.splitext(img_path)

        # Check if the file extension is in the list of supported image extensions
        if not (extension.lower() in image_extensions):
            return False
            # Save the file_path
        return img_path
        
    
    def embedding(self, img_path):
        #open image from image path
        img = Image.open(img_path)
        
        #create the output feature tensor of image
        img_tensor = self.feature_extractor(images=img, return_tensors="pt")
        outputs = self.model(**img_tensor)
        
        embedding = outputs.pooler_output.detach().numpy().squeeze()
        
        return self.predict(embedding)
    
    
    def predict(self, embedding):
        return self.collection.query(
            query_embeddings = embedding.tolist(),
            n_results = 3
        )


if __name__ == '__main__':
    xsearch = Xsearch() #create the instance
    temp = xsearch("imgs/evaluation/Bread/0.jpg") #predict the image
    print(temp)



'''
{'ids': [['Egg_36', 'Egg_33', 'Meat_51']], 'distances': [[412.2847900390625, 422.6854248046875, 424.696533203125]], 'metadatas': [[{'name': 'Egg', 'uri': 'imgs/evaluation\\Egg\\6.jpg'}, {'name': 'Egg', 'uri': 'imgs/evaluation\\Egg\\3.jpg'}, {'name': 'Meat', 'uri': 'imgs/evaluation\\Meat\\1.jpg'}]], 'embeddings': None, 'documents': [[None, None, None]]}
'''