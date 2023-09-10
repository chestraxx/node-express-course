const authorize = (request, response, next) => {
  console.log('authorize');

  next();
};

module.exports = authorize;
