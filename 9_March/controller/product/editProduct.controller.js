const { Product } = require("../../model/product.model");
const { ResponseHandler } = require("../../utils/responseHandler");

const editProductController = async (req, res) => {
    try {
        const features = req.params.features;
        const { name, model } = req.body;
        const newfeatures = req.body.features;
        if (features) {
            const product = await Product.findOne({ features });
            if (product) {
                product.name = name || product.name;
                product.model = model || product.model;
                product.features = newfeatures || product.features;
                await product.save();
                return res.status(200).json(ResponseHandler(true, product, "Product Found"));
            } else {
                return res.status(200).json(ResponseHandler(false, null, "Product Not Found"));
            }
        } else {
            return res.status(200).json(ResponseHandler(false, null, "No model found"));
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(ResponseHandler(false, null, "Request Failed"));
    }
};

module.exports = {
    editProductController,
};
