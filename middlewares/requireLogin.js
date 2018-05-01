module.exports = (req, res, next) => {
  if (!req.user) {
    return releaseEvents.status(401).sned({ error: 'You must log in!'});
  }

  next();
};