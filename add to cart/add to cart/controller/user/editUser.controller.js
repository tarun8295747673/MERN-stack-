const { User } = require("../../model/user.model");
const { ResponseHandler } = require("../../utils/responseHandler");

const editUserController = async (req, res) => {
//   try {
    const email = req.params.email;
    const {name , age} = req.body;
    const newEmail = req.body.email;
    if (email) {
      const user = await User.findOne({ email });
      if (user) {
        user.name = name || user.name;
        user.age = age || user.age;
        user.email = newEmail || user.email;
        await user.save()
        return res.status(200).json(ResponseHandler(true, user, "User Found"));
      } else {
        return res
          .status(200)
          .json(ResponseHandler(false, null, "User Not Found"));
      }
    } else {
      return res.status(200).json(ResponseHandler(false, null, "No id found"));
    }
//   } catch {
//     return res.status(500).json(ResponseHandler(false, null, "Request Failed"));
//   }
};

module.exports = {
  editUserController,
};
