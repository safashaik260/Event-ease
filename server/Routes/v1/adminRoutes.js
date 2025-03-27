const { register,login, logout } = require('../../controllers/admincontroller')


const adminRouter =require('express').Router()

adminRouter.post('/register',register)
adminRouter.post('/login',login)
adminRouter.post('/logout',logout)





module.exports=adminRouter