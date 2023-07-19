# xsearch_engine powered by milvus

## Prepration

### Install dependencies

Windows 10

create virtual env
```bash
conda create -n env_name python=3.10
```

install python package
```bash
python -m pip install -q towhee opencv-python pillow
```

### Prepare data

To use the ```unzip``` command in Windows, refer to the following link.

[cmd에서 zip 사용하기](https://fcurryman.tistory.com/101)

image download
```bash
curl -L https://github.com/towhee-io/examples/releases/download/data/reverse_image_search.zip -O

unzip -q -o reverse_image_search.zip
```

docker image download
```bash
curl -LJO https://github.com/milvus-io/milvus/releases/download/v2.2.10/milvus-standalone-docker-compose.yml
```

rename docker image
```bash
rename milvus-standalone-docker-compose.yml docker-compose.yml
```

add milvus container
```bash
docker-compose up
```

install milvus
```bash
python -m pip install -q pymilvus==2.2.11
```

## Reverse Image Search

### Configuration

```python
import csv
from glob import glob
from pathlib import Path
from statistics import mean

from towhee import pipe, ops, DataCollection
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection, utility


# Towhee parameters
MODEL = 'resnet50'
DEVICE = None # if None, use default device (cuda is enabled if available)

# Milvus parameters
HOST = '127.0.0.1'
PORT = '19530'
TOPK = 10
DIM = 2048 # dimension of embedding extracted by MODEL
COLLECTION_NAME = 'reverse_image_search'
INDEX_TYPE = 'IVF_FLAT'
METRIC_TYPE = 'L2'

# path to csv (column_1 indicates image path) OR a pattern of image paths
INSERT_SRC = 'reverse_image_search.csv'
QUERY_SRC = './test/*/*.JPEG'
```

### Embedding pipeline

```python
# Load image path
def load_image(x):
    if x.endswith('csv'):
        with open(x) as f:
            reader = csv.reader(f)
            next(reader)
            for item in reader:
                yield item[1]
    else:
        for item in glob(x):
            yield item
            
# Embedding pipeline
p_embed = (
    pipe.input('src')
        .flat_map('src', 'img_path', load_image)
        .map('img_path', 'img', ops.image_decode())
        .map('img', 'vec', ops.image_embedding.timm(model_name=MODEL, device=DEVICE))
)
```

```python
# Display embedding result, no need for implementation
p_display = p_embed.output('img_path', 'img', 'vec')
DataCollection(p_display('./test/goldfish/*.JPEG')).show()
```

### Steps

1. create a Milvus collection
2. insert data into collection
3. query image across database

### 1. create a Milvus collection

```python
# Create milvus collection (delete first if exists)
def create_milvus_collection(collection_name, dim):
    if utility.has_collection(collection_name):
        utility.drop_collection(collection_name)
    
    fields = [
        FieldSchema(name='path', dtype=DataType.VARCHAR, description='path to image', max_length=500, 
                    is_primary=True, auto_id=False),
        FieldSchema(name='embedding', dtype=DataType.FLOAT_VECTOR, description='image embedding vectors', dim=dim)
    ]
    schema = CollectionSchema(fields=fields, description='reverse image search')
    collection = Collection(name=collection_name, schema=schema)

    index_params = {
        'metric_type': METRIC_TYPE,
        'index_type': INDEX_TYPE,
        'params': {"nlist": 2048}
    }
    collection.create_index(field_name='embedding', index_params=index_params)
    return collection
```

```python
# Connect to Milvus service
connections.connect(host=HOST, port=PORT)

# Create collection
collection = create_milvus_collection(COLLECTION_NAME, DIM)
print(f'A new collection created: {COLLECTION_NAME}')
```

### 2. insert data into collection

```python
# Insert pipeline
p_insert = (
        p_embed.map(('img_path', 'vec'), 'mr', ops.ann_insert.milvus_client(
                    host=HOST,
                    port=PORT,
                    collection_name=COLLECTION_NAME
                    ))
          .output('mr')
)
```

```python
# Insert data
p_insert(INSERT_SRC)

# Check collection
print('Number of data inserted:', collection.num_entities)
```


### 3. Search

```python
# Search pipeline
p_search_pre = (
        p_embed.map('vec', ('search_res'), ops.ann_search.milvus_client(
                    host=HOST, port=PORT, limit=TOPK,
                    collection_name=COLLECTION_NAME))
               .map('search_res', 'pred', lambda x: [str(Path(y[0]).resolve()) for y in x])
#                .output('img_path', 'pred')
)
p_search = p_search_pre.output('img_path', 'pred')
```

```python
# Search for example query image(s)
collection.load()
dc = p_search('test/goldfish/*.JPEG')

# Display search results with image paths
DataCollection(dc).show()
```

```python
# Display search results with images, no need for implementation

import cv2
from towhee.types.image import Image

def read_images(img_paths):
    imgs = []
    for p in img_paths:
        imgs.append(Image(cv2.imread(p), 'BGR'))
    return imgs

p_search_img = (
    p_search_pre.map('pred', 'pred_images', read_images)
                .output('img', 'pred_images')
)
DataCollection(p_search_img('test/goldfish/*.JPEG')).show()
```
