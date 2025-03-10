const router = require('express');

const { getUserController } = require('../../controller/user/getUser.controller');
const { addUserController } = require('../../controller/user/addUser.controller');
const { editUserController } = require('../../controller/user/editUser.controller');
const { deleteUserController } = require('../../controller/user/deleteUser.controller');

const userRouter = router();

userRouter.get('/get', getUserController)

userRouter.get('/get/:id', getUserController)

userRouter.post('/add', addUserController)

userRouter.put('/edit/:email', editUserController)

userRouter.delete('/delete/:id', deleteUserController)

module.exports ={
    userRouter
}