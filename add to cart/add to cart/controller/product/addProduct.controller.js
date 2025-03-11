const { Product } = require("../../model/product.model.js");
const {ResponseHandler} = require("../../utils/responseHandler.js");

const addProductController = async (req, res) =>{
    try{
        const product = new Product(req.body)
        await product.save()
        return res.status(200).json(ResponseHandler(true, product, "Request Successfull"))
    }catch{
        return res.status(500).json(ResponseHandler(false, null, "Internal Server Error"))
    }
}

module.exports = {
    addProductController
}