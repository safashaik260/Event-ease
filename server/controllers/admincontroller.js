//const  = require("mongoose")
const adminDb= require("../models/adminmodel")
const { createToken } = require("../utilities/generateToken")
const { hashPassword, comparePassword } = require("../utilities/passwordutilities")

const register=async (req,res)=>{
try {
   const {email,password} =req.body
   if(!email||!password){
    return res.status(400).json({error:"all fields are required"})

   }
   const alreadyExist=await adminDb.findOne({email})
   if(alreadyExist){
    return res.status(400).json({error:"email already exist"})
   }
   const hashedpassword=await hashPassword(password)
   const newAdmin=new adminDb({
    email,password:hashedpassword
   })
   const saved=await newAdmin.save()
   if (saved){
    return res.status(200).json({message:"admin created",saved})
   }
} catch (error) {
    console.log(error)
    res.status(error.status||500).json({error:error.message||"internal error"})

}
}
const login= async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email||!password){
            return res.status(400).json({error:"all fields are required"})

        }
        const adminExist=await adminDb.findOne({email})
        if(!adminExist){
            return res.status(400).json({error:"user not found"})

        }
        const passwordMatch= await comparePassword(password,adminExist.password)
        console.log(passwordMatch)
        if(!passwordMatch){
            return res.status(400).json({error:"password doesnot match"}) 
        }
        const token= createToken(adminExist._id,"admin")
            res.cookie("Admin_token",token)
           
        res.status(200).json({message:"admin login succeful",adminExist})
        
    } catch (error) {
        console.log(error)
        res.status(error.status||500).json({error:error.message||"internal error"})
     
    }
}
const logout=async(req,res)=>{
    try {
        res.clearCookie("Admin_token")
        res.status(200).json({message:"logout succesfull"})
    } catch (error) {
        console.log(error)
        res.status(error.status||500).json({error:error.message||"internal error"})
  
        
    }
}
module.exports={register,login,logout}
