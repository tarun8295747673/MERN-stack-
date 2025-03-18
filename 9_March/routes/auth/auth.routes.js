const express = require('express');

const { loginController } = require('../../controller/auth/login.controller');

const authRouter = express.Router();

authRouter.post('/login', loginController)

module.exports = {
    authRouter
}