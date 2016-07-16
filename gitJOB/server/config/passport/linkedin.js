var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
import { linkedin } from '../secrets';
import unsupportedMessage from '../../db/unsupportedMessage';
import { passport as dbPassport } from '../../db';

export default (passport) => {
  if (!dbPassport || !dbPassport.linkedin || ! typeof dbPassport.linkedin === 'function') {
    console.warn(unsupportedMessage('passport-linkedin-oauth'));
    return;
  }

  passport.use(new LinkedInStrategy({
    clientID: linkedin.clientID,
    clientSecret: linkedin.clientSecret,
    callbackURL: linkedin.callbackURL        
  }, dbPassport.linkedin 
  ))
};
