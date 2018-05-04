module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return releaseEvents.status(403).sned({ error: 'Not enough credits!'});
  }

  next();
};