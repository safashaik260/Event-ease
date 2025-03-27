const jwt=require('jsonwebtoken')

const authUser=(req,res,next)=>{
    try {
        const {token}=req.cookies
        console.log(token)
        if(!token){
            return res.status(401).json({error:'jwt not found'})
        }
        const verifiedToken=jwt.verify(token,process.env.JWT_SECRET)
        if(!verifiedToken){
            return res.status(401).json({error:'user not authorized'})  
        }
        if(verifiedToken.role!=="user"){
            return res.status(401).json({error:'access denied'})  
        }
        req.user=verifiedToken.id
        next()
    } catch (error) {
       res.status(error.status||401) .json({error:error.message||"admin authentication failed"})
    }
}
module.exports=authUser
