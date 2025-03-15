const { ResponseHandler } = require('../../../utils/responseHandler.js');
const { Product } = require('../../../model/product.model.js');

const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json(ResponseHandler(false, null, "Product Not Found"));
    }

    product.cart = product.cart
      .map(item => {
        if (item.userId.toString() === userId) {
          item.quantity -= 1;
        }
        return item;
      })
      .filter(item => item.quantity > 0); 

    await product.save();
    return res.status(200).json(ResponseHandler(true, null, "Product quantity updated in cart"));
  } catch (error) {
    return res.status(500).json(ResponseHandler(false, null, "Internal Server Error"));
  }
};

module.exports = { removeFromCart };
