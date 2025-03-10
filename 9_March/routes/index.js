const router = require('express');

const { userRouter } = require('./user/user.routes');
const { productRouter } = require('./product/product.routes');

const mainRouter = router();

mainRouter.use('/user',userRouter)
mainRouter.use('/product',productRouter)


module.exports ={
    mainRouter
}
