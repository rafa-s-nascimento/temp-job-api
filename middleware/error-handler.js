const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customerror = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Somenthing went wrong.. try again later",
  };

  if (err.code && err.code === 11000) {
    customerror.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customerror.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.name === "ValidationError") {
    customerror.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");

    customerror.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.name === "CastError") {
    customerror.msg = `No item found with id:${err.value}`;
    customerror.statusCode = StatusCodes.NOT_FOUND;
  }

  return res.status(customerror.statusCode).json({ msg: customerror.msg });
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};

module.exports = errorHandlerMiddleware;
