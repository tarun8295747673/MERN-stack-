const router = require('express');

const { userRouter } = require('./user/user.routes');

const mainRouter = router();

mainRouter.use('/user',userRouter)

module.exports ={
    mainRouter
}

// http://localhost:9091/api/v1/user