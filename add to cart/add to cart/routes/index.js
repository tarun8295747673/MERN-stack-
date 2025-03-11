const express = require("express");

const { userRouter } = require("./user/user.routes");
const { productRouter } = require("./product/product.routes");

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);

mainRouter.use("/products", productRouter);

module.exports = {
  mainRouter,
};

// http://localhost:9092/api/v1/user/edit

// http://localhost:9092/api/v1/product/
