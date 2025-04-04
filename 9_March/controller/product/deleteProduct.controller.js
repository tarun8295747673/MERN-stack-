const { ResponseHandler } = require("../../utils/responseHandler")

const {Product} = require("../../model/product.model.js");


const deleteProductController = async (req, res) =>{
    try{
        const id = req.params.id;
        if(id){
            const user = await Product.findOneAndDelete({_id: id});
            return res.status(200).json(ResponseHandler(true, null, "Product deleted"))
        }else{
            return res.status(200).json(ResponseHandler(false, null, "No id in params"))
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(ResponseHandler(true, null, "Request Failed"))
    }
}

module.exports = {
    deleteProductController
}