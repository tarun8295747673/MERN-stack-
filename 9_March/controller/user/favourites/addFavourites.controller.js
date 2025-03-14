const {ResponseHandler} = require("../../../utils/responseHandler.js");

const {User} = require("../../../model/user.model.js");
const { Product } = require("../../../model/product.model.js");

const addFavourites = async(req, res) =>{
    try{
        const {userId, productId} = req.body;
        const user = await User.findById(userId)
        if(!user){
            return res.status(200).json(ResponseHandler(false, null, "User Not Found"))
        }
        const product = await Product.findById(productId)
        if(!product){
            return res.status(200).json(ResponseHandler(false, null, "Product Not Found"))
        }
        if(user.favourites.includes(productId)){
            return res.status(200).json(ResponseHandler(false, null, "Product Already Bookmarked"))
        }
        user.favourites.push(productId);
        await user.save();
        return res.status(200).json(ResponseHandler(true, null, "Product Added"))
    }catch{
        return res.status(500).json(ResponseHandler(false, null, "Internal Server Error"))
    }
}

module.exports = {
    addFavourites
}