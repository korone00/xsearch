import csv
from glob import glob
from pathlib import Path
from statistics import mean

import json
from towhee import pipe, ops, DataCollection
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection, utility
from dataset import script_dir, HOST, PORT, TOPK, COLLECTION_NAME, p_embed, collection 

from towhee.types.image import Image
# Search pipeline
p_search_pre = (
        p_embed.map('vec', ('search_res'), ops.ann_search.milvus_client(
                    host=HOST, port=PORT, limit=TOPK,
                    collection_name=COLLECTION_NAME))
               .flat_map('search_res', ('pred', 'score'), lambda x: [(str(Path(y[0]).resolve()), y[1]) for y in x])
        #        .output('img_path', 'pred')
)
p_search = p_search_pre.output('img_path', 'pred', 'score')

# Search for example query image(s)
collection.load()
dc = p_search('test/goldfish/*.JPEG')

DataCollection(dc).show()
print(dc.get_dict())
# Assuming you have a DataCollection called "data_collection"
# and it contains image data
# data_list = []
# for item in DataCollection(dc):
#     img_path = item['img_path']
#     img = item['img']
#     vec = item['vec']
#     data_list.append({
#         'img_path': img_path,
#         'img': img.to_numpy(),  # Convert Image object to numpy array
#         'vec': vec.tolist()  # Convert vector to list
#     })

# # Convert data_list to JSON and save it to a file
# json_data = json.dumps(data_list, indent=4)
# with open('data_collection.json', 'w') as json_file:
#     json_file.write(json_data)


# Display search results with image paths

# DataCollection(dc).show()


# dc.get_dict()


# Disconnect database
collection.release()

# def read_images(img_paths):
#     imgs = []
#     for p in img_paths:
#         imgs.append(Image(cv2.imread(p), 'BGR'))
#     return imgs

# p_search_img = (
#     p_search_pre.map('pred', 'pred_images', read_images)
#                 .output('img', 'pred_images')
# )
# DataCollection(p_search_img('test/goldfish/*.JPEG')).show()