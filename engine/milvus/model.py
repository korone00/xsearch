import csv
from glob import glob
from pathlib import Path
from statistics import mean

from towhee import pipe, ops, DataCollection
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection, utility
from dataset import script_dir, HOST, PORT, TOPK, COLLECTION_NAME, p_embed, collection 
import cv2
from towhee.types.image import Image

# Search pipeline
p_search_pre = (
        p_embed.map('vec', ('search_res'), ops.ann_search.milvus_client(
                    host=HOST, port=PORT, limit=TOPK,
                    collection_name=COLLECTION_NAME))
               .map('search_res', 'pred', lambda x: [str(Path(y[0]).resolve()) for y in x])
        #        .output('img_path', 'pred')
)
p_search = p_search_pre.output('img_path', 'pred')

# Display search results with images, no need for implementation

# Search for example query image(s)
collection.load()
dc = p_search('test/goldfish/*.JPEG')

# Display search results with image paths
dc.get_dict('pred').values()

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