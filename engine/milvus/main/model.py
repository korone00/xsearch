import json
from pathlib import Path
from towhee import pipe, ops
from dataset import MilvusSearch
from flask import Flask, request

class MilvusPredict(MilvusSearch):
    def __init__(self):
        super().__init__()
    
    def setCollectionName(self, collection_name):
        self.COLLECTION_NAME = collection_name
        
    
    def search(self, img_path):
        p_embed = (
            pipe.input('src')
                .flat_map('src', 'img_path', self.load_image)
                .map('img_path', 'img', ops.image_decode())
                .map('img', 'vec', ops.image_embedding.timm(model_name=self.MODEL, device=self.DEVICE))
        )
        
        p_search_pre = (
            p_embed.map('vec', ('search_res'), ops.ann_search.milvus_client(
                        host=self.HOST, port=self.PORT, limit=self.TOPK,
                        collection_name=self.COLLECTION_NAME))
                    .map('search_res', ('pred'), lambda x: [str(Path(y[0]).resolve()) for y in x])
                    .map('search_res', ('score'), lambda x: [str(y[1]) for y in x])
        )
        
        p_search = p_search_pre.output('img_path', 'pred', 'score')
        
        path = img_path
        dc = p_search(path)
        json_data = dc.get_dict()
        
       
        #json file download
        '''
        json_data = json.dumps(json_data)
        with open('jsonfile.json', 'w') as f:
            f.write(json_data)
        '''
            
        return json_data


def xsearch_engine(img_path, collection_name):
    milvus = MilvusPredict()
    
    collection = milvus.connect(collection_name)
    
    collection.load()
    jsons = milvus.search(img_path)
    
    # Disconnect database
    collection.release()
    
    #return json data
    return jsons
    
# Search for example query image(s)
if __name__ == '__main__':
    #img_path = 'reverse_image_search/test/warplane/*.JPEG' #test example
    img_path = 'reverse_image_search/test/apiary/*.JPEG'
    collection_name = 'reverse_image_search' #collection_name_example

    jsons = xsearch_engine(img_path, collection_name) #return json
    print(jsons)