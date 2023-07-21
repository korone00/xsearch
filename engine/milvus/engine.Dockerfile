# Use the official Python slim-buster image as the base image
FROM python:3.9-slim-buster

# Set the working directory inside the container
WORKDIR /engine

# Copy the engine code from the GitHub repository
RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/korone00/xsearch.git && \
    cp -r xsearch/engine/milvus/* /engine/ && \
    rm -rf xsearch

# Install any required dependencies
RUN pip install --no-cache-dir flask==2.2.2 requests==2.26.0 towhee==1.1.1 opencv-python==4.8.0.74 pillow==10.0.0 python-dotenv==1.0.0 pymilvus==2.2.11
# Add other dependencies if needed

# Set the environment variables for the Flask app
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=127.0.0.1

# Expose the port on which the Flask API will run
EXPOSE 5000

# Set the entry point for the application (start the Flask server)
CMD ["flask", "run"]
