//const e = require('express')
const mongoose=require('mongoose')
const eventSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
   description: {

    type:String,
    required:true
    },
    organisedby:{
        type:String,
        required:true
    },
    eventtype:{
        type:String,
        required:true
    },
    eventdate:{
        type:String,
        required:true
    },
    eventtime:{
        type:String,
        required:true

    },
    location:{
        type:String,
        required:true
    },
    ticketprice:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    
},{timestamps:true})
module.exports=new mongoose.model("events",eventSchema)