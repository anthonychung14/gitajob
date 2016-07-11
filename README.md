<!--![](https://dl.dropboxusercontent.com/s/5utw16rifv9cmqe/banner-128.png?dl=0) -->
<!--![Pic](https://s3.amazonaws.com/poly-screenshots.angel.co/Project/49/284111/9614db93bd26c7f1ee02ee920c83046f-original.png) -->
---

# SWCH (switch)

SWCH helps you organize your job search by integrating job postings with workflow management.

- [Technology Stack](#technology-stack-apis-and-third-party-tools)
- [Client Framework](#client-framework-react-native)
- [Server Setup](#server-setup-node--express)
- [Database](#database-mongodb--mongoose)
- [Future Features](#future-features)

## Technology Stack, APIs, and Third-party tools

- [React](https://facebook.github.io/react-native/)
- [Redux]()
- Node.js & [Express](http://expressjs.com/)
- [MongoDB](https://www.mongodb.org/) and [Mongoose](http://mongoosejs.com/)


## Client Side: React Native


 ```
 $ npm install -g react-native-cli
 ```  
 6. Run `npm install` to install all dependencies

You may also need to follow some additional steps for the react-native-camera component:

 1. Complete the mostly-automatic install instructions [here](https://github.com/lwansbrough/react-native-camera#mostly-automatic-install)
 2. Complete step 5 of the manual iOS section directly below the automatic install section

Users flow through SWCH like so:
```
         +------+
         | Main |
         +---+--+
             |
             |   new user   +------+
             +-------------->Signup+--------+
             |              +------+        |
             |                              |
         +---v---+                          |
+-------->Welcome<-----+                 +--v---+
|        +---+----     |                 |Selfie|
|            |         |                 +--+---+
|            |         |   +---------+      |
|        +---v---+     +---+LooksGood<------+
|        |Loading|         +---------+
|        +---+---+
|            |
|  no match  |
+------------+
             |
         +---v---+
         |Results|
         +---+---+
             |
             |
          +--v--+
          |Match|
          +--+--+
             |
             |
          +--v--+
          |Enjoy|
          +-----+
```

## Server Setup: Node & Express

All files for the server can be found in the server folder. The server also makes use of the database helper functions in db/db.js.
  


## Database: MongoDB & Mongoose

The Mongodb database has 3 tables: users, matchrequests, and successfulmatches (schema can be found in db/config.js). 
  - 
  - 
  - 

Database helper functions can be found in db/db.js. These helper functions are used by the request handlers in server/config/requestHandler.js
  -

## Future Features

Front-end
- Modal contexts depending on where you are in pipeline
- Queue animation + solve the server-window issue
- Pagination feature instead of infinite scroll
- Drag and drop functionality a la TRELLO
- Anime.JS library integration
- Collapsible bars
- Integrate contacts into new user flows
