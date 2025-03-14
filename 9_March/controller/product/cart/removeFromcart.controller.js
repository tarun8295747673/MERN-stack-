const { ResponseHandler } = require("../../../utils/responseHandler.js");
const { Product } = require("../../../model/product.model.js");

const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(200).json(ResponseHandler(false, null, "Product Not Found"));
    }

    product.cart = product.cart.filter(item => item.productId.toString() !== productId);
    await product.save();

    return res.status(200).json(ResponseHandler(true, null, "Product Removed from Cart"));
  } catch (error) {
    return res.status(500).json(ResponseHandler(false, null, "Internal Server Error"));
  }
};

module.exports = {
  removeFromCart,
};
