![](https://dl.dropboxusercontent.com/s/5utw16rifv9cmqe/banner-128.png?dl=0) 
![Pic](https://s3.amazonaws.com/poly-screenshots.angel.co/Project/49/284111/9614db93bd26c7f1ee02ee920c83046f-original.png) 
![Demo](https://s3.amazonaws.com/poly-screenshots.angel.co/Project/49/284111/2d48fdcb2991a7f074c3143e634289c3-original.gif) 
---

# waddle [![Build Status](https://travis-ci.org/savory-penguin/waddle.svg?branch=master)](https://travis-ci.org/savory-penguin/waddle)

Waddle is a way to meet new people. Grab lunch or coffee with a someone new – who knows, it may just be the start of a beautiful friendship.

Supported operating systems are >= iOS 7.0

- [Team Members](#team-members-v-10)
- [Technology Stack](#technology-stack-apis-and-third-party-tools)
- [Client Framework](#client-framework-react-native)
- [Server Setup](#server-setup-node--express)
- [Database](#database-mongodb--mongoose)
- [Testing](#testing-jest--jasmine)
- [Continuous Integration](#continuous-integration-travis-ci)
- [Legacy Project Ideas](#legacy-project-ideas)
- [Tips & Tricks](#tips--tricks)

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

Users flow through waddle like so:
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


## Testing: Jest & Jasmine

Jest/Jasmine are used as the unit testing suite for this app. All tests can be found in __tests__/server_db_tests.js. Run the tests with the command 'npm test'.


## Continuous Integration: Travis CI

![](https://dl.dropboxusercontent.com/s/0jc7f5kpegy6rsg/travisSignUp.gif?dl=0)

Travis CI runs your test suite every time new code is pushed or a pull request is made, offering a sanity check before integrating any new code.

It's easy to set up:

  1. Go to [travis-ci.org](http://travis-ci.org) and have the admin for your organization sign in through Github
  2. Once signed in, enable your target repo
  3. Add a travis.yml file and specify your language and environment
  4. Add tests
  5. Push code or start making pull requests. Green builds are passing
  6. To add a build status indicator on your repo, paste in
  the following:
  

  `![](https://travis-ci.org/path/to/repo.svg?branch=master)`

  ** Your repo path if your github url is 
  https://github.com/savory-penguin/waddle
  will be savory-penguin/waddle



## Legacy Project Ideas

- Integrate Facebook login / authentication
- Geofencing. Disable / Hide 'I'm here' button until user is within a certain radius
- Refactor app using Redux architecture
- Write end to end tests
- Email Validation
- Add a user preferences / account settings / delete account / sign out section
- Incorporate a user rating system
- Expand service to coffee, dinner, workouts and more
- Refine matching algorithm
- Add push notifications (e.g. when match arrives)
- Integrate other apis (e.g uber, twilio)
- Make layout more responsive to handle different size screens
- Port waddle to Android

## Tips & Tricks

- [Install Xcode](https://developer.apple.com/xcode/download/) ASAP if you don't already have it installed.
- [How to add files to your Xcode project](https://developer.apple.com/library/ios/recipes/xcode_help-structure_navigator/articles/Adding_an_Existing_File_or_Folder.html)
- [How to run your app on an iOS device](https://facebook.github.io/react-native/docs/running-on-device-ios.html)
- [How to rename your app](https://developer.apple.com/library/ios/recipes/xcode_help-project_editor/RenamingaProject/RenamingaProject.html)
- Running `npm install` in the inner project folder and restarting the launch packager & Xcode can resolve errors involving 'RCT' files.
- If you receive a location error, go to your simulator, click debug -> location -> none. Then set a custom location to your current coordinates [debug -> location -> custom location]. Enabling location capabilites might also be necessary
