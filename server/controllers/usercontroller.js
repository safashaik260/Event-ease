const Userdb = require("../models/usermodel")
const { createToken } = require("../utilities/generateToken")
const {hashPassword,comparePassword }= require("../utilities/passwordutilities")


const  register= async(req,res)=>{
    try {
        const{name,email,phone,password,confirmpassword}=req.body
        if(!name||!email||!phone||!password||!confirmpassword){
            return res.status(400).json({error:"all fields are required"})
        }
        if (password!==confirmpassword){
            return res.status(400).json({error:"password doesnot match"})
        }
        const userExist=await Userdb.findOne({email})
        if(userExist){
            return res.status(400).json({error:"user already exist"})
        }
        const hashedpassword=await hashPassword(password)
        const newUser=new Userdb({name,email,phone,password:hashedpassword})
        const saved=await newUser.save()
        if(saved){
            const token= createToken(saved._id)
            res.cookie("token",token)
            return res.status(200).json({message:"user created"})
        }
        
    } catch (error) {
        console.log(error)
        res.status(error.status||500).json({error:error.message||"internal error"})
    }

}
const login =async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email||!password){
            return res.status(400).json({error:"all fields are required"})

        }
        const userExist=await Userdb.findOne({email})
        if(!userExist){
            return res.status(400).json({error:"user not found"})

        }
        const passwordMatch= await comparePassword(password,userExist.password)
        console.log(passwordMatch)
        if(!passwordMatch){
            return res.status(400).json({error:"password doesnot match"}) 
        }
        const token= createToken(userExist._id)
            res.cookie("token",token)
           
        res.status(200).json({message:"user login succeful",userExist})
        
    } catch (error) {
        console.log(error)
        res.status(error.status||500).json({error:error.message||"internal error"})
     
    }
}
const logout =async(req,res)=>{
    try {
        res.clearCookie("token")
        res.status(200).json({messge:"logged out"})
        
    } catch (error) {
        console.log(error)
        res.status(error.status||500).json({error:error.message||"internal error"})
      
    }
}
const userlist=async(req,res)=>{
    try {
        //const page = parseInt(req.query.page) || 1;
    //const limit = parseInt(req.query.limit) || 10;
    //const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      Userdb.find().select('-password'),
      Userdb.countDocuments()
    ]);

    res.status(200).json({
      success: true,
      //count: users.length,
      //total,
      //page,
     // pages: Math.ceil(total / limit),
      data: users
    });
 
    } catch (error) {
        console.log(error)
        res.status(error.status||500).json({error:error.message||"internal error"})
      
   
    }
}



module.exports={
    register,login,logout,userlist
}