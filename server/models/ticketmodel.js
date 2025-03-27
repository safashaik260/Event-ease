//const e = require('express')
const mongoose=require('mongoose')





const ticketSchema=new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Userdb', required: true },
    event:{ type: mongoose.Schema.Types.ObjectId, ref: 'events', required: true },
    eventname:{type:String},
    ticketprice:{type:Number,required:true},

    username:{type:String},
    tickettype:{
        type:String,enum:['VIP','GENERAL'],
        required:true
    },
    email:{
        type:String
    }

    
},{timestamps:true})
module.exports=new mongoose.model("Ticket",ticketSchema)