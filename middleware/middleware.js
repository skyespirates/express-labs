export const logger = (req, res, next) => {
  console.log("hello world");
  next();
};

export const requestTime = (req, res, next) => {
  req.requestTime = new Date();
  next();
};
