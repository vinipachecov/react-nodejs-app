
const passport = require('passport');


module.exports = (app) => {
  app.get('/auth/google',
  passport.authenticate('google', {
      scope: ['profile', 'email']
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile token', profile);
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
}
