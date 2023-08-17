#!/bin/bash

sleep 30
python3 milvusHelper.py
python3 minioHelper.py
python3 dataset.py
python3 main.py
