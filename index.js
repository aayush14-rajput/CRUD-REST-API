const express=require('express')
const mongoose=require('mongoose')
const empRoutes=require('../Backend/routes/empRoutes')
require('dotenv').config()
const app=express()

const url=process.env.MONGODB_URL
const PORT=process.env.PORT

mongoose.connect(url)
.then(()=>{
    console.log("connected to mongodb")
}).catch(error=>console.log('err',error))
    


app.use(express.json())
app.use('/api',empRoutes)
app.listen(PORT,()=>{
    console.log("Server Started")
})



