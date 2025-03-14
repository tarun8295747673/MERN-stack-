const { ResponseHandler } = require("../../../utils/responseHandler.js");
const { Product } = require("../../../model/product.model.js");

const addToFavourites = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(200).json(ResponseHandler(false, null, "Product Not Found"));
    }

    if (!product.favourites.includes(userId)) {
      product.favourites.push(userId);
    }

    await product.save();

    return res.status(200).json(ResponseHandler(true, product.favourites, "Favourites Updated"));
  } catch (error) {
    return res.status(500).json(ResponseHandler(false, null, "Internal Server Error"));
  }
};

module.exports = {
  addToFavourites,
};
