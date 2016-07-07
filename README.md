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

## Team Members (v. 1.0)
[![Nathaniel Edwards](https://dl.dropboxusercontent.com/s/9dzxid7ihg37c97/nthaniel.png?dl=0)](https://github.com/nthaniel)

[![Michelle He](https://dl.dropboxusercontent.com/s/zecyw2vna8m56d3/michelleheh.png?dl=0)](https://github.com/michelleheh)

[![Rahim Dharrsi](https://dl.dropboxusercontent.com/s/3typmiqn3wv8f8k/rahimftd.png?dl=0)](https://github.com/rahimftd)

[![Kevin Nguyen](https://dl.dropboxusercontent.com/s/wyebxbavnc7ihk7/kevinwin.png?dl=0)](https://github.com/kevinwin)
  
## Technology Stack, APIs, and Third-party tools

- [React Native](https://facebook.github.io/react-native/)
- Node.js & [Express](http://expressjs.com/)
- [MongoDB](https://www.mongodb.org/) and [Mongoose](http://mongoosejs.com/)
- [Jasmine](http://jasmine.github.io/) & [Jest](https://facebook.github.io/jest/)
- [Travis CI](https://travis-ci.org/)
- [Digital Ocean](https://www.digitalocean.com/)
- [Foursquare API](https://developer.foursquare.com/)
- [react-native-video](https://github.com/brentvatne/react-native-video)
- [react-native-camera](https://github.com/lwansbrough/react-native-camera)


## Client Side: React Native

To get started with React Native, follow these steps as needed.

 1. Install [brew](http://brew.sh/)
 2. [Install Node.js](https://nodejs.org/en/) 4.0 or newer
 3. Run `brew install watchman`
 4. Run `brew install flow`
 5. Install [Xcode](https://developer.apple.com/xcode/download/)
 5. Install the React native command line tools

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
  - server/sever.js: Configures the server and listens on port 8000.
  - server/config/requestHandler.js: Majority of server processes are handled by this file. It contains handler functions for all requests that come into the server.
  - server/config/routes.js: Defines the routes for the various types of requests.
  - server/config/foursquare.js: Makes requests to the foursquare API. Used in the request handlers.
  - server/config/foursquarekeys.example.js: An example file that you will need to update with your Foursquare API keys to. It goes without saying that you should not push your API keys to github or anywhere else that may compromise their security.

The uploads folder is used to store users' profile images.


## Database: MongoDB & Mongoose

The Mongodb database has 3 tables: users, matchrequests, and successfulmatches (schema can be found in db/config.js). 
  - The users table has 5 columns: username, firstname, email, funfact, profileimage) which are set at the time of user signup.
  - The matchrequests table has 5 columns: username, latitude, longitude, isActive, and timestamp.
      > isActive is a boolean that flags whether the given matchRequest has been fulfilled.
      > Timestamp is set automatically. The server uses the timestamp to determine whether or not a given match is valid. Currently, any matchrequest older than 45s is considered to be invalid.
  - db/config.js contains the database schema and mongoose models for User, MatchRequest, and SuccessfulMatch

Database helper functions can be found in db/db.js. These helper functions are used by the request handlers in server/config/requestHandler.js
  - getUsers will return a list of userts matching the passed-in arguments.
  - checkIfUserExists will return a boolean value based on whether a given user exists in the database.
  - addUser will add a new user to the database.
  - getAllUsers will return a full list of users in the database. This function is not currently used, but may come in handy in the future.
  - removeUser will remove the specified user from the database. This function is not currently used, but may come in handy in the future.
  - getMatchRequests will return a list of matchRequests that meet the time cutoff (requestTimeCutoff)
  - getSuccessfulMatchForUser will return the successful match (if any) for a given user. Any match that is older than 1min will not be returned. This time cutoff has been included to prevent the system from accidentally returning old matches.
  - updateUser will update a user's database entry with the new values provided

## Future Features

- Integrate Facebook login / authentication
- Geofencing. Disable / Hide 'I'm here' button until user is within a certain radius
- Refactor app using Redux architecture
- Write end to end tests
