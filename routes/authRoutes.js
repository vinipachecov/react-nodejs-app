
const passport = require('passport');


module.exports = (app) => {

  app.get('/', (req, res) => {
    res.send({ hi: 'there'});
  })

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

  app.get('/api/logout', (req,res) => {
    req.logout();
    res.send(req.user);
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
}
