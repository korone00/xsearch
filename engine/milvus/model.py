
import json

from pathlib import Path


from towhee import ops 
from dataset import HOST, PORT, TOPK, COLLECTION_NAME, p_embed, collection 

# Search pipeline
p_search_pre = (
        p_embed.map('vec', ('search_res'), ops.ann_search.milvus_client(
                    host=HOST, port=PORT, limit=TOPK,
                    collection_name=COLLECTION_NAME))
               .map('search_res', ('pred'), lambda x: [str(Path(y[0]).resolve()) for y in x])
               .map('search_res', ('score'), lambda x: [str(y[1]) for y in x])
)

p_search = p_search_pre.output('img_path', 'pred', 'score')

# Search for example query image(s)
collection.load()
dc = p_search('test/warplane/*.JPEG')
dc = dc.get_dict()

#json
json_data = json.dumps(dc)

with open('json_result.json', 'w') as f:
    f.write(json_data)

# Disconnect database
collection.release()