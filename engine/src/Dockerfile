FROM python:3.10-slim-buster 

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /code

COPY . /code/

ENV PYTHONPATH /code

RUN pip install opencv-python
RUN apt-get update && apt-get -y install libgl1-mesa-glx 
RUN apt-get install -y libglib2.0-0

RUN pip install --no-cache-dir -r requirements.txt
# RUN apt-get update && apt-get install -y \
#     libgl1-mesa-glx

ENV FLASK_APP=main.py
ENV FLASK_RUN_HOST=172.30.208.1

EXPOSE 5000

# CMD ["python3", "-m", "/engine/main.py"]
CMD ["python3", "../main.py"]

