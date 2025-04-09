const { logout } = require('../../controllers/admincontroller')
const { register, login, userlist } = require('../../controllers/usercontroller')

const userRouter =require('express').Router()


userRouter.post('/register',register)
userRouter.post('/login',login)

userRouter.post('/logout',logout)
userRouter.get('/userlist',userlist)





module.exports=userRouter