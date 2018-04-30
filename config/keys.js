
if (process.env.NODE_ENV === 'production') {
  // we are in production
  module.exports = require('./dev')
} else {
  module.exports = require('./dev')
}
module.exports = {
  googleClientId: "832509044521-m0fv12bp1ve8u44k2j0gtlta4t20tlng.apps.googleusercontent.com",
  googleClientSecret: "-I1YhW9291KsiTvfVSC83YDe",
  mongoURI: 'mongodb://admin:admin@ds135876.mlab.com:35876/emaily-dev-vini',
  cookieKey: 'SECRET_KEY'
};