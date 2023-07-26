
import kaggle
import zipfile
from PIL import Image
from transformers import ViTFeatureExtractor, ViTModel
import chromadb
from glob import glob
import requests

#  dataset.py is for initializing the database.
# If you excute dataset.py, you don't have to excute this file again.

# 'trolukovich/food11-image-dataset' kaggle dataset download

#You have to run the below code only once.

kaggle.api.dataset_download_files('trolukovich/food11-image-dataset', path='imgs', unzip=False)
with zipfile.ZipFile('imgs/food11-image-dataset.zip', 'r') as zip_ref:
    zip_ref.extractall('imgs')


#store img paths
img_list = sorted(glob("imgs/evaluation/*/[0-9].jpg"))

#define chromadb
#client = chromadb.Client() -> previous version
client = chromadb.PersistentClient(path="./chroma")
collection = client.create_collection("foods")

#initialize list
embeddings = [] #store image embedding vectors
metadatas = [] #store img path and label
ids = [] #store image unique id

#create feature_extractor and model
feature_extractor = ViTFeatureExtractor.from_pretrained('facebook/dino-vits16')
model = ViTModel.from_pretrained('facebook/dino-vits16')

#iteration for storing images to database
for i, img_path in enumerate(img_list): #i : image index, img_path : image path
    img = Image.open(img_path) #image open
    #store image class
    cls_temp = img_path.split("/")[1] 
    cls = cls_temp.split("\\")[1]
    
    #store image feature tensor, shape : torch.Size([1, 3, 224, 224])
    img_tensor = feature_extractor(images=img, return_tensors="pt") 
    
    #store output through model, shape : shape (384, )
    outputs = model(**img_tensor) 
    
    #embedding , shape : (384,)
    embedding = outputs.pooler_output.detach().numpy().squeeze() 

    #add image embedding vector 
    embeddings.append(embedding.tolist())

    #add metadata of image
    metadatas.append({
        "uri": img_path, #add image url
        "name": cls #add image label
    })
    
    #rename image id
    id = cls+'_'+str(i)
    
    #add image id
    ids.append(id)


#add image embedding vector to ChromaDB 
collection.add(
    embeddings=embeddings, #image tensor 
    metadatas=metadatas, #url, image label
    ids=ids #image id
)


#test

'''
test_img = Image.open(requests.get("https://i.imgur.com/yNp6qTS.png", stream=True).raw).convert("RGB")


test_img_tensor = feature_extractor(images=test_img, return_tensors="pt")
test_outputs = model(**test_img_tensor)

test_embedding = test_outputs.pooler_output.detach().numpy().squeeze()

query_result = collection.query(
    query_embeddings=test_embedding.tolist(),
    n_results=3,
)

print(query_result)
'''