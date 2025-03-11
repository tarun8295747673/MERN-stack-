const { Product } = require("../../model/product.model")
const { ResponseHandler } = require("../../utils/responseHandler")


const getProductController = async (req, res) =>{
    try{
        const id = req.params.id;
        if(!id){
            const profiles = await Product.find();
            return res.status(200).json(ResponseHandler(true, profiles, "Request Successful"))
        }
        const product = await Product.findOne({_id: id});
        if(product){
            return res.status(200).json(ResponseHandler(true, product, "Product Fetched Successfully"))
        }else{
            return res.status(200).json(ResponseHandler(false, null, "No Product Found"))
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(ResponseHandler(false, null, "Request Failed"))
    }
}

module.exports = {
    getProductController
}