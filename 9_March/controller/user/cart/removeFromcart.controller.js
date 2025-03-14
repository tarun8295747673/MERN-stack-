const { User } = require("../../../model/user.model.js");
const { ResponseHandler } = require("../../../utils/responseHandler.js");

const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(200)
        .json(ResponseHandler(false, null, "User not found"));
    }
    user.cart = user.cart.filter(
      (item) => item.productId.toString() !== productId
    );
    await user.save();
    return res
      .status(200)
      .json(ResponseHandler(true, user, "Request Successfull"));
  } catch {
    return res
      .status(500)
      .json(ResponseHandler(false, null, "Internal server error"));
  }
};

module.exports = {
  removeFromCart,
};