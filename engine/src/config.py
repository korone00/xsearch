import os

############### Milvus Configuration ###############
MILVUS_HOST = os.getenv("MILVUS_HOST", "127.0.0.1")
MILVUS_PORT = int(os.getenv("MILVUS_PORT", "19530"))
VECTOR_DIMENSION = int(os.getenv("VECTOR_DIMENSION", "2048"))
INDEX_FILE_SIZE = int(os.getenv("INDEX_FILE_SIZE", "1024"))
METRIC_TYPE = os.getenv("METRIC_TYPE", "L2")
DEFAULT_TABLE = os.getenv("DEFAULT_TABLE", "milvus_img_search")
MODEL_NAME = os.getenv("MODEL_NAME", 'resnet50')
TOP_K = int(os.getenv("TOP_K", "5"))

############### MINIO Configuration ###############
MINIO_address = os.getenv("MINIO_address", "127.0.0.1:9000")
MINIO_ROOT_USER = os.getenv("MINIO_ROOT_USER", "admin")
MINIO_ROOT_PASSWORD = os.getenv("MINIO_ROOT_USER", "xsearchdbs")
MINIO_access_key = os.getenv("MINIO_access_key", "vvs1p5ZE4RHdzBzTOiWD")
MINIO_secret_key = os.getenv("MINIO_secret_key", "PbqcBTLXE3sSzOqVZj0SjYlg4UWsZjgLFhnEkqej")
# MINIO_access_key = os.getenv("MINIO_access_key", "Insert MinIo access key")
# MINIO_secret_key = os.getenv("MINIO_secret_key", "Insert MinIo secret key")

############### FLASK Configuration ################
FLASK_HOST = os.getenv("FLASK_HOST", "127.0.0.1")
FLASK_PORT = os.getenv("FLASK_PORT", "5000")


############### Data Path ###############
QUERY_DIR = os.getenv("QUERY_DIR", "results")

############### Number of log files ###############
LOGS_NUM = int(os.getenv("logs_num", "0"))
