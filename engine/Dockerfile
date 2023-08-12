# Use the official Python slim-buster image as the base image
FROM python:3.10-slim-buster

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory inside the container
WORKDIR /app/src
COPY . /app

ENV PYTHONPATH /app

# Copy the engine code from the GitHub repository
RUN pip install opencv-python
RUN apt-get update && apt-get -y install libgl1-mesa-glx 
RUN apt-get install -y libglib2.0-0
# Install any required dependencies
RUN pip install --no-cache-dir -r /app/requirements.txt
# Add other dependencies if needed

# Set the environment variables for the Flask app
ENV FLASK_APP=main.py
ENV FLASK_RUN_HOST=172.30.208.1

# Expose the port on which the Flask API will run
EXPOSE 5000

RUN chmod +x run_scripts.sh

CMD ["./run_scripts.sh"]
