# MEVN-boilerplate
A fullstack boilerplate with Mongo, ExpressJS, VueJS and NodeJS.

## Migration

1. Download Neo4j Desktop, create a database and password plus username. 
2. Please install POC https://neo4j.com/developer/neo4j-apoc/ plugin accordingly. 
3. `NPM install`
4. Go to `config.json` and then add bolt URL behind `url` also add `username and password`.
5. In terminal just run `npm run migration`.
6. After that you can run `node index`
7. Just open de browser which is shown in the terminal by default this is `http://localhost:3000`

## Backend 
1. Open terminal 
2. cd server
3. mongod
4. Open server (open new terminal, in the end you have three terminals running)
5. cd server
6. npm start
7. Open `http://localhost:8080` in browser any other browser which is shown in terminal

## Frontend 
1. Open terminal
2. cd client
3. npm start