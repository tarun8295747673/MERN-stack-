const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String},
    model: {type: String},
    features: {type: String},
    cart: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, quantity: { type: Number, default: 1 } }],
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const Product = mongoose.model('Product', ProductSchema);

module.exports={
    Product
}