const { User } = require("../../model/user.model")
const { ResponseHandler } = require("../../utils/responseHandler")


const getUserController = async (req, res) =>{
    try{
        const id = req.params.id;
        if(!id){
            const profiles = await User.find();
            return res.status(200).json(ResponseHandler(true, profiles, "Request Successful"))
        }
        const user = await User.findOne({_id: id});
        if(user){
            return res.status(200).json(ResponseHandler(true, user, "User Fetched Successfully"))
        }else{
            return res.status(200).json(ResponseHandler(false, null, "No User Found"))
        }
    }catch{
        return res.status(500).json(ResponseHandler(false, null, "Request Failed"))
    }
}

module.exports = {
    getUserController
}