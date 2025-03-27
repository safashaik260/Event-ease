//const e = require('express')
const mongoose=require('mongoose')





const bookingSchema =new mongoose.Schema({
     user: { type: mongoose.Schema.Types.ObjectId, ref: 'Userdb', required: true },
    event:{ type: mongoose.Schema.Types.ObjectId, ref: 'events', required: true },
    eventname:{type:String},
    ticketprice:{type:String, required:true},
    IsPaid:{
        type:Boolean,
        default:true,
    },
    sessionid:{
        type: String
    },
    username:{
        type:String,
    }
    


    

    
},{timestamps:true})
module.exports=new mongoose.model("Booking",bookingSchema)