const adminRouter = require('./adminRoutes')
const eventRouter = require('./eventRoutes')
const userRouter = require('./userRoutes')
const bookingRouter=require('./bookingRoutes')
const v1Router=require('express').Router()

v1Router.use("/user",userRouter)
v1Router.use('/admin',adminRouter)
v1Router.use('/event',eventRouter)
v1Router.use('/bookings',bookingRouter)





module.exports=v1Router
