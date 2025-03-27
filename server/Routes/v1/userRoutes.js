const { logout } = require('../../controllers/admincontroller')
const { register, login } = require('../../controllers/usercontroller')

const userRouter =require('express').Router()


userRouter.post('/register',register)
userRouter.post('/login',login)

userRouter.post('/logout',logout)



module.exports=userRouter