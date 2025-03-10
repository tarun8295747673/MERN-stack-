const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String},
    model: {type: String},
    features: {type: String}
})

const Product = mongoose.model('Product', ProductSchema);

module.exports={
    Product
}