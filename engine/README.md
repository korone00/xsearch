#x_search_engine
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
$ conda create -n xsearch python=3.7
```
It means to create a virtual environment called xsearch and install python 3.7 at the same time.

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
#numpy
$ conda install numpy

#PIL
$ conda install pillow

#transformers
$ conda install transformers

#faiss
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

## 2. Extract image features using resNet
## 3. Save feature in vector db
## 4. Similarity search using faiss
