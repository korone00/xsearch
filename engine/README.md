# x_search_engine
image search engine

# Engine build steps
0. Establishment of development environment
1. Import images
2. Extract image features using resNet
3. Save feature to vector db
4. Similarity search using faiss


## 0. Establishment of development environment
### 0.1 [anaconda](https://www.anaconda.com/download) install

After installing anaconda, run the conda prompt.

```
(base) C:\Users\Minhyeok>conda --version
conda 23.5.2
```
I installed the latest version, version 23.5.2.

---

### 0.2 Set virtual environment

```
$ conda create -n xsearch python=3.8
```
It means to create a virtual environment called xsearch and install python 3.8 at the same time.
You have to download python version below 3.11.

```
#check virtual environments list
$ conda env list
```

```
# activate virtual env
$ conda activate xsearch
```

#### package install
Install the package in the virtual environment.

```
#PIL
$ conda install pillow

#transformers
$ conda install transformers


#faiss(optional)
$ conda install -c pytorch faiss-cpu # CPU version
//$ conda install -c pytorch faiss-gpu # GPU version

#chromadb
$ pip install chromadb
```

## 1. Import image
We used the Food-11 image dataset in Kaggle.

There are image photos divided into 11 categories.

Ten pictures were used for each category.

### 1.1 kaggle api install

```
$ conda install -c conda-forge kaggle
$ conda install kaggle
```


### 1.2 create kaggle api token

Access [kaggle](https://www.kaggle.com/) and log in.

On the profile page, select the Accout tab.

![image](https://github.com/mhkim23/x_search_engine/assets/132381239/df7d90d6-2482-420b-b2c4-3e6ecc88080c)

in the API sector
Click CREATE NEW TOKEN.
![image](https://github.com/mhkim23/x_search_engine/assets/132381239/9cfc34a0-6664-4e02-a550-5fbee183fd15)

Return to the anaconda prompt and enter the command kaggle .

![image](https://github.com/mhkim23/x_search_engine/assets/132381239/f05980ee-ed89-4412-a1a7-60d45ed2f730)

Then, a folder called ```.kaggle``` is created.

![image](https://github.com/mhkim23/x_search_engine/assets/132381239/ebbca884-eb70-4282-8a2c-62d002404521)

Copy the previously downloaded ```kaggle.json``` file to this ```.kaggle``` folder.

Enter the following command in the anaconda prompt and check if the output is good. This command shows a list of ongoing contests in Kaggle.

```
kaggle competitions list
```

![image](https://github.com/mhkim23/x_search_engine/assets/132381239/8a59195d-426b-4ffd-ad56-c2f30782798a)


### 1.3 data download from kaggle

If you enter the command below, you can download the food11-image-dataset in the path path.

```
kaggle datasets download -d trolukovich/food11-image-dataset -p <path>
```

## 2. Extract image features and save them using ViT(Vision Transformer) and chromaDB

We define dataset used for finding image similarity in dataset.py.

### 2.1 the kaggle dataset is downloaded

If you want to change the image dataset, you modify this code. the dataset is stored in imgs folder.

```
kaggle.api.dataset_download_files('trolukovich/food11-image-dataset', path='imgs', unzip=False)
with zipfile.ZipFile('imgs/food11-image-dataset.zip', 'r') as zip_ref:
    zip_ref.extractall('imgs')
```

### 2.2 images in dataset is changed to embedded vector using FeatureExtractor, ViT

image is changed to imbedded vector through feature extractor.
ViT model extracts feature vector of image embedded vector.

```
feature_extractor = ViTFeatureExtractor.from_pretrained('facebook/dino-vits16')
model = ViTModel.from_pretrained('facebook/dino-vits16')
```

### 2.3 embedded vectors of images are stored in chromaDB

initialize the chromaDB.
*We have utilized a method of creating directories to store data. If you wish to store data using a server or any other method, we recommend referring to the chromaDB documentation(https://docs.trychroma.com/).

```
client = chromadb.PersistentClient(path="./chroma")
collection = client.create_collection("foods")
```

add the vector of image data to collection of chromadb.

```
collection.add(
    embeddings=embeddings, #image tensor 
    metadatas=metadatas, #url, image label
    ids=ids #image id
)
```

## 3. Predict similarity of images

In model.py, class instance is created and calculate similarity of target image and others image in chromaDB

### 3.1 create the class 'Xsearch' instance

```
xsearch = Xsearch()
```

### 3.2 call function with image path of target image

```
xsearch("your_image_path")
```

### 3.3 return result dictionary of query() function in chromaDB

result dictionary is included image id, similarity(distance), metadata(name(image class), image url)

example)
```
{'ids': [['Egg_36', 'Egg_33', 'Meat_51']], 
'distances': [[412.2847900390625, 422.6854248046875, 424.696533203125]], 
'metadatas': [[{'name': 'Egg', 'uri': 'imgs/evaluation\\Egg\\6.jpg'}, 
{'name': 'Egg', 'uri': 'imgs/evaluation\\Egg\\3.jpg'}, 
{'name': 'Meat', 'uri': 'imgs/evaluation\\Meat\\1.jpg'}]], 
'embeddings': None, 'documents': [[None, None, None]]}
```

Looking at the structure of the above dictionary, the values corresponding to the keys are all 2-dimensional lists. Therefore, to use these values, you need to first convert the 2-dimensional lists into 1-dimensional lists.

```
#sample
query_result["metadatas"][0]
```

