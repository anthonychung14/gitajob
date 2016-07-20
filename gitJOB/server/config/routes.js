/**
 * Routes for express app
 */
import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;
const jobsController = controllers && controllers.jobs;
const appController = controllers && controllers.applications
const companyController = controllers && controllers.company
const feedbackController = controllers && controllers.feedback

export default (app) => {
  // user routes
  if (usersController) {
    app.post('/login', usersController.login);
    app.post('/signup', usersController.signUp);
    app.post('/logout', usersController.logout);
  } else {
    console.warn(unsupportedMessage('users routes'));
  }

  
  app.get('/auth/linkedin', 
    passport.authenticate('linkedin', {       
      scope: ['r_emailaddress', 'r_basicprofile', 'w_share'],
      state: true,
    }), function(req, res){
  // The request will be redirected to LinkedIn for authentication, so this
  // function will not be called.
  });

  app.get('/auth/linkedin/callback', 
    passport.authenticate('linkedin', {
      successRedirect: '/dashboard',
      failureRedirect: '/about'
    })
  )
  

  if (passportConfig && passportConfig.google) {
    // google auth
    // Redirect the user to Google for authentication. When complete, Google
    // will redirect the user back to the application at
    // /auth/google/return
    

    // Authentication with google requires an additional scope param, for more info go
    // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
    app.get('/auth/google', passport.authenticate('google', {      
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }));

    // Google will redirect the user to this URL after authentication. Finish the
    // process by verifying the assertion. If valid, the user will be logged in.
    // Otherwise, the authentication has failed.
    app.get('/auth/google/callback', passport.authenticate('google', {        
        successRedirect: '/dashboard',
      failureRedirect: '/about'
      }))
  } 

      
  
  // job routes
  if (jobsController) {
    app.get('/posting', jobsController.all);
    app.post('/posting/:id', jobsController.addQueue);
    app.post('/posting/nope/:id', jobsController.addNope);
    app.delete('/posting/:id', jobsController.remove);
  } else {
    console.warn(unsupportedMessage('job routes'));
  }

  //application routes
  if (appController) {
    app.get('/apps', appController.all)
    app.post('/apps/:id', appController.moveUp);
  } else {
    console.warn(unsupportedMessage('app routes'))
  }

  if (companyController) {
    app.get('/company/:id', companyController.getContacts)
    app.post('/company/:id', companyController.addContact)
  }
  
  if (feedbackController) {
    app.post('/feedback', feedbackController.postFeedback)    
  }
};

