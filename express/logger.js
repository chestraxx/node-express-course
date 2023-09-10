const logger = (request, response, next) => {
  const {method, url} = request;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  next();
};

module.exports = logger;
