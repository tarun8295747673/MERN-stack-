const router = require('express');

const { getProductController } = require('../../controller/product/getProduct.controller');
const { addProductController } = require('../../controller/product/addProduct.controller');
const { editProductController } = require('../../controller/product/editProduct.controller');
const { deleteProductController } = require('../../controller/product/deleteProduct.controller');
const { addToFavourites } = require('../../controller/product/favourites/addFavourites.controller');
const { removeFromCart } = require('../../controller/product/cart/removeFromcart.controller');

const productRouter = router();

productRouter.get('/get', getProductController);

productRouter.get('/get/:id', getProductController);

productRouter.post('/add', addProductController);

productRouter.put('/edit/:features', editProductController);

productRouter.delete('/delete/:id', deleteProductController);

productRouter.post('/favourites/add', addToFavourites);

productRouter.post('/cart/remove', removeFromCart);

module.exports = {
    productRouter
};