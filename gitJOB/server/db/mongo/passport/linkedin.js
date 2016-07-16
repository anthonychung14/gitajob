import User from '../models/user';

/* eslint-disable no-param-reassign */
export default (req, accessToken, refreshToken, profile, done) => {
  if (req.user) {
    return User.findOne({linkedin: profile.id}, (findOneerr, existingUser => {
      if(existingUser) { 
        return done(null, false, { message: 'There is already a LinkedIn account that belongs to you. Sign in with that account or delete it, then link it with your current account.' })
      }
      return User.findById(req.user.id, (findByIdErr, user) => {
        user.linkedin = profile.id;
        user.tokens.push({ kind: 'linkedin', accessToken: refreshToken['accessToken'] });
        user.profile.name = user.profile.name || profile.displayName;        
        user.save((err) => {
          done(err, user, { message: 'LI account has been linked.' });
        });
      });
    })
  )}  
  return User.findOne({ linkedin: profile.id }, (findLinkederr, existingUser) => {
    if (existingUser) {
      done(null, existingUser)
      return      
    };

    return User.findOne({ email: profile._json.publicProfileUrl }, (findByEmailErr, existingEmailUser) => {      
      if (existingEmailUser) {
        return done(null, false, { message: 'There is already an account using this email address. Sign in to that account and link it with Google manually from Account Settings.' });
      }
      const user = new User();
      user.email = profile._json.publicProfileUrl;
      user.linkedin = profile.id;
      user.tokens.push({ kind: 'linkedin', accessToken: refreshToken['accessToken'] });
      user.profile.name = profile.displayName;          
      return user.save((err) => {
        done(err, user);
      });
    });
  });  
};