const express = require('express');

const { getUserController } = require('../../controller/user/getUser.controller');
const { addUserController } = require('../../controller/user/addUser.controller');
const { editUserController } = require('../../controller/user/editUser.controller');
const { deleteUserController } = require('../../controller/user/deleteUser.controller');


const { addFavourites } = require('../../controller/user/favourites/addFavourites.controller');

// Cart
const { removeFromCart } = require('../../controller/user/cart/removeFromCart.controller');


const userRouter = express.Router();

userRouter.get('/get', getUserController)

userRouter.get('/get/:id', getUserController)

userRouter.post('/add', addUserController)

userRouter.put('/edit/:email', editUserController)

userRouter.delete('/delete/:id', deleteUserController)

userRouter.post('/favourites/add', addFavourites)

// userRouter.post('/favourites/add', addFavourites)

userRouter.post('/cart/remove', removeFromCart)


module.exports ={
    userRouter
}