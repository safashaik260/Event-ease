const { getCheckoutSession, listBookings, deletebooking, userBookings } = require('../../controllers/bookingcontroller')

const bookingRouter= require('express').Router()


bookingRouter.post('/checkout_session',getCheckoutSession)
bookingRouter.get('/bookinglist',listBookings)
bookingRouter.delete('/delete/:bookingid',deletebooking)
bookingRouter.get('/Mybookings/:userId',userBookings)



module.exports=bookingRouter
