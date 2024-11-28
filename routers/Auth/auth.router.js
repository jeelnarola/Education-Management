const {Router} = require('express')
const { Register } = require('../../controllers/Auth/auth.controller')

const AuthRouter = Router()

AuthRouter.post('/register',Register)
module.exports = AuthRouter