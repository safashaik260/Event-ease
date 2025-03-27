const express=require('express')
const mongoose=require('mongoose')
const apiRouter = require('./Routes')
const cookieparser=require('cookie-parser')
require('dotenv').config()
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cookieparser())
app.use(cors({
    orirgin:"http://localhost:5173",
    credentials:true,
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-type','Authorization']


}))
mongoose.connect(process.env.MONGO_URL).then((res)=>{
    console.log('connected to database')

}
).catch((err)=>{
    console.log(err)
})

app.get('/',(req,res)=>{
    res.send("hello from backend")
})
app.use("/api",apiRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server starts on port ${process.env.PORT}`)
})
