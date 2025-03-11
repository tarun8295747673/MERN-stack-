const express = require('express');


const { addProductController } = require('../../controller/product/addProduct.controller');

const productRouter = express.Router();

productRouter.post('/add', addProductController)


module.exports = {
    productRouter
}