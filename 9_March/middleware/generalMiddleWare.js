const generalMiddleWare = (req, res, next) => {
  const start = new Date();
  const method = req.method;
  console.log({
    Date: `${start.toLocaleDateString("hi-IN")}`,
    Method: `${method}`,
  });

  if( !["GET", "POST", "PUT", "Delete"].includes(method)){
    return res.status(405).json({message: "Method not allowed"})
  }

//   console.log("Body:", req.body)
//   console.log("Method Allowed")


  next();
};

module.exports = {
  generalMiddleWare,
};
