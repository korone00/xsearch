## 0. set config

```bash
ipconfig
```

```bash
이더넷 어댑터 vEthernet (WSL):

   연결별 DNS 접미사. . . . :
   링크-로컬 IPv6 주소 . . . . : fe80::9183:71b:4352:731d%30
   IPv4 주소 . . . . . . . . . : 172.19.32.1
   서브넷 마스크 . . . . . . . : 255.255.240.0
   기본 게이트웨이 . . . . . . :
```

```python
############### Milvus Configuration ###############
MILVUS_HOST = os.getenv("MILVUS_HOST", "172.19.32.1")
MILVUS_PORT = int(os.getenv("MILVUS_PORT", "19530"))
```

## 1. create docker network

```bash
docker network create netnet
```

## 2. build docker images

```bash
cd ./xsearch/engine
```

```bash
docker build -t engine .
```

- Don't forget "." at the end.

## 3. create docker images

```bash
cd milvusdb
docker-compose up
```

```bash
cd ../miniodb
docker-compose up
```

at milvusdb & miniodb directory

## 4. run docker container

```bash
docker run --name engine -p 5000:5000 --net netnet engine 
```

```bash
docker run --name engine -p 5000:5000 --net netnet -v D:\dev\Xsearch\engine\src:/app/src engine
```

 - this command is for dev