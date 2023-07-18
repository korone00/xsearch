## Set up a PostgresSQL database with Docker

# 1. docker install

windows, mac, linux

https://hub.docker.com/

# install postgresql images, pull PostgreSQL by using docker 
```bash
$ docker pull postgres
```
And login docker hub

# 2. login docker
```bash
$ docker login  
```
# 3. play docker container
```bash
$ docker run -d -p 5432:5432 --name some-postgres -e POSTGRES_PASSWORD=1234 postgres
```
# 4. docker ps

Type the \l, You can check the database list

this shows a list of all images that are running. If you are wonder container is running. Check the status "Up ~~ seconds"

# 5. excution the postgres sql
```bash
$ docker exec -it some-postgres /bin/bash
$ psql -U postgres
```




Database setup

1. Create database

```sql
create database test_db;
```

nest js Setup
Install NestJS CLI 
```bash
$ npm install -g @nestjs/cli
```
PostgreSQL driver and TypeORM package
```bash
$ cd your_project_name
$ npm install --save typeorm pg @nestjs/typeorm
```

npm install

## Installation

```bash
$ npm install
$ npm install --save-dev @nestjs/testing
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## check and test API by POSTMAN

# 1. Install postman
https://www.postman.com/downloads/

# 2. Launch Postman: Run the installed Postman app.

# 3. Create a request: Click the "+" button at the top to create a new request tab.

# 4. Choose HTTP method and URL: Select the desired HTTP method from the dropdown list and enter the API endpoint URL in the URL input field.

# 5. Set authentication and headers: Configure the required authentication tokens, headers, etc. for the request.

# 6. Write request body: If using methods like POST or PUT, write the request body in the appropriate format under the "Body" tab.

# 7. Send the request: Click the blue "Send" button to send the request.

'''
{
  "firstName": "John",
  "lastName": "Doe"
}

''' 

# 8. Check the response: The response for the sent request will be displayed in the panel below.


## Handlebars
```bash
$ npm install --save @nestjs/serve-static hbs
```

## render
```bash
$ npm install --save @nestjs-modules/render
```



## So far, we have developed that we can communicate with the postpresql database and nest js using docker, and we can add data to the database using post man. Our future goal is to store the member's information in the database through the login function