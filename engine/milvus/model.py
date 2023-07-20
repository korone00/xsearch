from pathlib import Path
from towhee import ops, DataCollection
from dataset import HOST, PORT, TOPK, COLLECTION_NAME, p_embed, collection 

# Search pipeline
p_search_pre = (
        p_embed.map('vec', ('search_res'), ops.ann_search.milvus_client(
                    host=HOST, port=PORT, limit=TOPK,
                    collection_name=COLLECTION_NAME))
                .map('search_res', ('pred'), lambda x: [str(Path(y[0]).resolve()) for y in x])
                .map('search_res', ('score'), lambda x: [y[1] for y in x])

)
p_search = p_search_pre.output('img_path', 'pred', 'score')

# Search for example query image(s)
collection.load()

dc = p_search('test/warplane/*.JPEG')

print(dc.get_dict())

# Disconnect database
collection.release()