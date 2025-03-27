const cloudinary=require('../config/cloudinaryconfig')
 const uploadtoCloudinary=(filepath)=>{
    return new Promise((resolve,reject)=>{
        cloudinary.uploader.upload(
            filepath,
            {folder:'products'},
            (error,result)=>{
                if (error) return reject(error)
                    resolve(result.secure_url)
            }
        )
    })
 }
 module.exports=uploadtoCloudinary