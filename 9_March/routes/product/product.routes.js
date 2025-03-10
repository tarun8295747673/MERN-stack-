const router = require('express');

const { getProductController } = require('../../controller/product/getProduct.controller');
const { addProductController } = require('../../controller/product/addProduct.controller');
const { editProductController } = require('../../controller/product/editProduct.controller');


const productRouter = router();

productRouter.get('/get', getProductController)

productRouter.get('/get/:id', getProductController)

productRouter.post('/add', addProductController)

productRouter.put('/edit/:features', editProductController)




module.exports ={
    productRouter
}