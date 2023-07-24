# Base image
FROM node:18

# alphin의 경우 linux 배포용이라 크기가 작다. 따라서 개발용 node:18을 사용하고 배포용으로 alphine을 사용하면 될 것 같다 

# Create app directory
RUN mkdir -p /var/app
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install app dependencies
RUN npm install

# If you are using it for distribution, save it as a RUN npm ci.
# RUN npm ci

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port to run the application on
EXPOSE 3000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
