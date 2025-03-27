const eventDb = require("../models/eventmodel")
const uploadtoCloudinary = require("../utilities/imageupoload")

const createEvent = async (req, res) => {
    try {
        const { title, description, organisedby, eventtype, eventdate, eventtime, location, ticketprice } = req.body

        if (!title || !description || !organisedby || !eventtype || !eventdate || !eventtime || !location || !ticketprice) {

            return res.status(400).json({ error: "all fields are required" })
        }
        if (!req.file) {
            return res.status(400).json({ error: "image not found" })

        }
        const cloudinaryRes = await uploadtoCloudinary(req.file.path)
        console.log(cloudinaryRes, "image uploaded by cloudinary")
        const newEvent = new eventDb({
            title, description, organisedby, eventtype, eventdate, eventtime, location, ticketprice, image: cloudinaryRes

        })
        let savedEvent = await newEvent.save()
        if (savedEvent) {
            return res.status(200).json({ message: "event added", savedEvent })

        }


    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({ error: error.message || "internal server error" })

    }

}
const listEvents = async (req, res) => {
    try {
        const eventList = await eventDb.find()
        res.status(200).json(eventList)
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message || "internal server error" })

    }
}

const eventDetails = async (req, res) => {
    try {
        const { eventId } = req.params;

        const eventDetails = await eventDb.findById({ _id: eventId })
        if (!eventDetails) {
            return res.status(400).json({ error: "event not found" })
        }
        return res.status(200).json(eventDetails)
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message || "internal server error" })

    }
}
const updateEvents = async (req, res) => {
    try {
        const { eventId } = req.params;
        const { title, description, organisedby, eventtype, eventdate, eventtime, location, ticketprice } = req.body
        let imageUrl;

        let isevnetExist = await eventDb.findById(eventId)
        if (!isevnetExist) {
            return res.status(400).json({ error: "event not found" })
        }
        if (req.file) {
            const cloudinaryRes = await uploadtoCloudinary(req.file.path)
            imageUrl = cloudinaryRes
        }
        const updatedEvent = await eventDb.findByIdAndUpdate(eventId, { title, description, organisedby, eventtype, eventdate, eventtime, location, ticketprice, image: imageUrl }, { new: true })
res.status(200).json({message:"event updated",updatedEvent})

    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({ error: error.message || "internal server error" })

    }
}
const deleteEvents=async(req,res)=>{
    try {
        const {eventId}=req.params
        const deleteEvents=await eventDb.findByIdAndDelete(eventId)
        if(!deleteEvents){
            return res.status(400).json({error:"event not found"})
        }
        return res.status(400).json({message:"event deleted"})
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({ error: error.message || "internal server error" })

    }
}
const partialupdate=async(req,res)=>{
    const { eventId } = req.params;
  const updates = req.body;
  try {
    const event = await eventDb.findByIdAndUpdate(eventId, updates, { new: true });

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);

  } catch (error) {
    
  }

}

module.exports = { createEvent, listEvents, eventDetails,updateEvents ,deleteEvents,partialupdate}