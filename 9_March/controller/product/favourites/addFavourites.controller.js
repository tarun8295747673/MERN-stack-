const { ResponseHandler } = require('../../../utils/responseHandler.js');
const { Product } = require('../../../model/product.model.js');

const addToFavourites = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
      return res.status(400).json(ResponseHandler(false, null, "All fields are required"));
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json(ResponseHandler(false, null, "Product Not Found"));
    }

    const existingCartItem = product.cart.find(item => item.userId.toString() === userId);
    
    if (existingCartItem) {
      existingCartItem.quantity += quantity; 
    } else {
      product.cart.push({ userId, quantity });
    }

    await product.save();
    return res.status(200).json(ResponseHandler(true, product, "Product added to cart"));
  } catch (error) {
    console.error(error);
    return res.status(500).json(ResponseHandler(false, null, "Internal Server Error"));
  }
};

module.exports = { addToFavourites };
