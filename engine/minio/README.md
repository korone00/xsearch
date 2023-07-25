# 1. Engine Mechanism
![image](https://github.com/korone00/xsearch/assets/108120508/e7aa0413-2161-43b7-ba6f-22de61455b6b)

The engine will play a role in performing the request mainly when the user uploads the file and receives a request to the backend. The user converts the uploaded image into a vector and returns the most similar image information stored in the database.

## 1.1 environment

you should download all packages in requirements.txt. Using anaconda, you can handle the environments more easily.

## 1.2 docker engine

if docker engine is running, ProgreSQL (for backend), milvusDB(for engine), minio conainer should be running too.

## 1.3 backend server

```
npm install
```
```
npm run start:dev
```

Then, access the localhost:3000/api .
We use the swagger for testing the engine process.


## 1.4 engine server
run the app.py.
It can access flask web server (localhost:5000)


## 1.5 test engine using swagger
test the upload API by uploading file.

example response)
![image](https://github.com/korone00/xsearch/assets/108120508/e18e81f6-6428-4171-8284-c4c144f34df9)



# 2. min.io

min.io is a database that stores and manages all images used in this engine. It saves the image uploaded by the user, and again loads the image with high similarity, providing the path of the image and its unique id for the user to check. min.io is the most interacting database, not just the engine needed to convert an image into a vector, but also the backend that needs to provide the image to the user again.


## 2.1 docker image minIO download

```bash
$ docker-compose -f docker-compose.yml up -d
```
download the min.io yml files for docker.

```
pip install minio
```
download python package for min.io

## 2.2 access minIO server

http://localhost:9000
![image](https://github.com/korone00/xsearch/assets/108120508/813f42dc-51f5-4115-bd39-7fc1790748e8)

## 2.3 login id and password

id and password is in docker-compose.yml
At first, you enter the id and password directly.

## 2.4 create access key and secret key
To upload and access the images in min.io, you create access key and secret key.
The access key and secret key should be set as environmental variables in .env.
(You can create your own .env file by referring to the env.sample file.)

## 2.5 run minio_load.py

By running minio_load.py, you can upload an image to min.io storage that you previously connected to.

## 2.6 run minio_test.py

The image stored in the server may be stored in a local directory using the image path stored in the min.io.


