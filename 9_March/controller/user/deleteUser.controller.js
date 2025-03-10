const { ResponseHandler } = require("../../utils/responseHandler")

const {User} = require("../../model/user.model.js");


const deleteUserController = async (req, res) =>{
    try{
        const id = req.params.id;
        if(id){
            const user = await User.findOneAndDelete({_id: id});
            return res.status(200).json(ResponseHandler(true, null, "user deleted"))
        }else{
            return res.status(200).json(ResponseHandler(false, null, "No id in params"))
        }
    }catch{
        return res.status(500).json(ResponseHandler(true, null, "Request Failed"))
    }
}

module.exports = {
    deleteUserController
}