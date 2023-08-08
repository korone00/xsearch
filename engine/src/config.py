import os

############### Milvus Configuration ###############
MILVUS_HOST = os.getenv("MILVUS_HOST", "172.30.208.1") #insert your wsl ip
MILVUS_PORT = int(os.getenv("MILVUS_PORT", "19530"))
VECTOR_DIMENSION = int(os.getenv("VECTOR_DIMENSION", "2048"))
INDEX_FILE_SIZE = int(os.getenv("INDEX_FILE_SIZE", "1024"))
METRIC_TYPE = os.getenv("METRIC_TYPE", "L2")
DEFAULT_TABLE = os.getenv("DEFAULT_TABLE", "milvus_img_search")
MODEL_NAME = os.getenv("MODEL_NAME", 'resnet50')
TOP_K = int(os.getenv("TOP_K", "5"))

############### MINIO Configuration ###############
MINIO_address = os.getenv("MINIO_address", "172.30.208.1:9000") #insert your wsl ip
MINIO_ROOT_USER = os.getenv("MINIO_ROOT_USER", "admin")
MINIO_ROOT_PASSWORD = os.getenv("MINIO_ROOT_USER", "xsearchdbs")
# MINIO_access_key = os.getenv("MINIO_access_key", "user")
# MINIO_secret_key = os.getenv("MINIO_secret_key", "q1w2e3r4")
MINIO_access_key = os.getenv("MINIO_access_key", "8K6Udfnx6pU1eUigqLdo") #insert your access key
MINIO_secret_key = os.getenv("MINIO_secret_key", "mDcYRyFbRhxP2enqtkFp4e73GI2Y9Inaai7QOoLh") #insert your secret key

############### FLASK Configuration ################
FLASK_HOST = os.getenv("FLASK_HOST", "0.0.0.0")
FLASK_PORT = os.getenv("FLASK_PORT", "5000")


############### Data Path ###############
QUERY_DIR = os.getenv("QUERY_DIR", "results")

############### Number of log files ###############
LOGS_NUM = int(os.getenv("logs_num", "0"))
