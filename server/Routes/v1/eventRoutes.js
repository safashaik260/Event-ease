const { createEvent, listEvents, eventDetails, updateEvents, deleteEvents, partialupdate } = require('../../controllers/eventcontroller')
const authAdmin = require('../../middlewares/authAdmin')
const authUser = require('../../middlewares/authuser')
const upload = require('../../middlewares/multer')

const eventRouter=require('express').Router()



eventRouter.post('/create',upload.single("image"),createEvent)

eventRouter.get('/listevents',listEvents)

eventRouter.get('/eventdetails/:eventId',eventDetails)
eventRouter.put('/update/:eventId',upload.single("image"),updateEvents)
eventRouter.delete('/delete/:eventId',deleteEvents)
eventRouter.patch('/partialupdate/:eventId',upload.single("image"),partialupdate)





module.exports=eventRouter