const { ResponseHandler } = require("../../utils/responseHandler.js")

const { Product } = require("../../model/product.model.js");


const addProductController = async (req, res) =>{
    try{
        const {name, model, features} = req.body;
        if(!name || !model || !features){
            return res.status(200).json(ResponseHandler(false, null, "All fields are required"))
        }
        const profile = await Product.findOne({features})
        if(profile){
            return res.status(200).json(ResponseHandler(false, null, `${features} already exists.`))
        }
        const newProduct = new Product({
            name, 
            model,
            features
        })
        await newProduct.save();
        return res.status(200).json(ResponseHandler(true, {name, model, features}, "Product added successfully"))
    }catch{
        return res.status(500).json(ResponseHandler(true, null, "Request Failed"))
    }
}

module.exports = {
    addProductController
}