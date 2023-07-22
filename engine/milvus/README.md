<p align="center">
  <a href="https://github.com/korone00/xsearch" rel="noopener">
    <img width="1536px" height="px" src="engine\readmeimgs\linkedin_banner_image_2.png" alt="Project logo">
  </a>
</p>

<h1 align="center">XSearch_engine</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/korone00/xsearch)
[![GitHub Issues](https://img.shields.io/github/issues/korone00/xsearch.svg)](https://github.com/korone00/xsearch/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/korone00/xsearch.svg)](https://github.com/korone00/xsearch/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> We can find the image you want.
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Find similar images on the web. It works with Milvus DB and is easy to start with a docker image.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

#### 1. Install Docker

- Visit the Docker Hub website: <https://hub.docker.com/>
  - Download and install Docker for your operating system (Windows, macOS, or Linux).

#### you can take a xsearch_engine images on this page

<https://hub.docker.com/r/rlafosem/xsearch_engine/tags>

#### 2. Set up a Milvus DB images with Docker

- Open a terminal and run the following commands:
  - Make a directory

      ```bash
      cd <your_project_directory>
      ```

  - Docker image download

      ```bash
      curl -LJO https://github.com/milvus-io/milvus/releases/download/v2.2.10/milvus-standalone-docker-compose.yml
      ```

  - Rename docker image

      ```bash
      rename milvus-standalone-docker-compose.yml docker-compose.yml
      ```

  - Add milvus container

      ```bash
      docker-compose up
      ```

  - Install milvus

      ```bash
      python -m pip install -q pymilvus==2.2.11
      ```

#### 3. Set up a Xsearch_engine imageswith Docker

- Open a terminal and run the following commands:

     ```bash
     # Pull the Xsearch_engine Docker image
     $ docker pull rlafosem/xsearch_engine:latest
     ```

### Installing

If you, succeed you can check the rlafosem/xserach_engine image in Docker desktop image
you can choose two options to make container

#### 3-1. Use CLI
     ```
     $ docker run -d --name xsearh_engine -p 5000:5000 rlafosem/xsearch_engine:latest
     ```


#### 3-2. Use Docker Desktop
|text|type|
|---|---|
|container name|xsearch_engine|
|Hostport|5000|
|Volumes Host Path|{path you want to}|

<p align="center">
 <img src = "engine\readmeimgs\container_run.PNG">
</p>

Set options and RUN

### If you've been following along, you should have successfully created your container.

------------------------------------------------------------------------------
작성중...
## 🔧 Running the tests <a name = "tests"></a>

Explain how to run the automated tests for this system.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system.

## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@kylelobo](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
