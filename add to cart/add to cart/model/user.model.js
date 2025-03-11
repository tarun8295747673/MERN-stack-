const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String },
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
  cart: [
    {
        productId: {type: mongoose.Schema.Types.ObjectId, ref: "products"},
        quantity: { type: Number, default: 1}
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
