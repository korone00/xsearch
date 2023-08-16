# Guide about Docker Compose

This guide illustrates how to use a xsearch using Docker Compose.

> **Note**: This documentation is a docker container created using docker compose, so if you want to create a separate container for frontend, backend, and engine, please read the documentation in the README within each subfolder!

## Step 1: Make .env fie
If you don't have .env file or update that, you need to change the .env file where root directory

<p align="center">
 <img src = "./readmeimgs/dotenv.png">
</p>

What you need to know about the path to HOST is that in docker compose you can name each container HOST, but if you don't, you'll need to write localhost or another IP address!

## Step 2: Run Docker Compose

Start the Postgres and Minio services using Docker Compose. You can do this by entering the following command in your terminal:

```bash
docker-compose up -d
```

### That screen should then appear in your docker container!

<p align="center">
 <img src = "./readmeimgs/docker container.png">
</p>

## Step 3: Make minio bucket

> **Note**: Minio does not support creating a bucket using Docker Compose. Therefore, before proceeding with this step, ensure that Access Policy option set public in Minio.



<p align="center">
 <img src = "./readmeimgs/make two bucket.png">
</p>
Create buckets named xsearchimgs and baseimages, one for the base images and one to store them in!

## Step 3-1: adjust Buckets option

<p align="center">
 <img src = "./readmeimgs/make sure access policy is private.png">
</p>
Among the options for bucket, make sure to set access policy to private!

## Step 3-2: Make Access Key

The access key is the key you created to make sure that no one else has access to the minio you created. You must create this key!

<p align="center">
 <img src = "./readmeimgs/minio access key.png">
</p>

This is covered in the 
```
MINIO_ACCESS_KEY=user
MINIO_SECRET_KEY=q1w2e3r4

```
so be sure to check it before creating it.

# Now you can check docker desktop

<p align="center">
 <img src = "./readmeimgs/container.png">
</p>

> **Notice**: you can visit localhost(or HOST you set)/(you set front end's PORT)
can check screen!

<p align="center">
 <img src = "./readmeimgs/frontend screen.png">
</p>

## Troubleshooting

If you encounter any issues with the connection, check and modify the access permissions of your Minio bucket, if necessary. If the issue persists, reach out to your supervisor or the person responsible for assistance.