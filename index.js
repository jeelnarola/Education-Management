const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
    res.json({message:"Welcome To Eduction Management Application."})
})

app.listen(process.env.PORT,()=>{
    console.log("server Start :- ",process.env.PORT)
})