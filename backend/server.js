const express=require('express')
const app=express()
const mongoose=require('mongoose')
const Data = require('./models/Data')
const TCSData=require('./models/TCSData')
const cors = require('cors');
const SamsungData = require('./models/SamsungData')
const AutoDeskData = require('./models/AutoDeskData')
const CognizantData=require('./models/CognizantData')

require('dotenv').config()
const mongoURI=process.env.mongoURI
app.use(cors());


mongoose.connect(mongoURI,()=>{
    console.log("Database Connection Established")
})

app.get('/data',async(req,res)=>{
    const data=await Data.find()
    try{
    if(data){

        res.send(data)
    }
    }catch(error){
     res.status(500).send('The data not found')
    }
})

app.get('/samsungdata',async(req,res)=>{
    let data=await SamsungData.find()
    try{
         res.send(data)
    }catch(error){
        res.status(500).send("The Stock data of Samsung is not found")
    }
})

app.get('/autodeskdata',async(req,res)=>{
    let data=await AutoDeskData.find()
    try{
        res.send(data)
    }catch(error){
        res.status(500).send("The problem is to fetch the data of AutoDesk")
    }
})
app.get('/tcsdata',async(req,res)=>{
 const data=await TCSData.find();
 try{
    if(data){
        res.send(data)
    }
 }catch(error){
    res.status(500).send('TCS data not found')
 }
})
app.get('/cognizatdata',async(req,res)=>{
    let data=await CognizantData.find()
    try{
        res.send(data)
    }catch(error){
        res.status(500).send("Can't Fetch the Cognizant Data")
    }
})

app.get('/',(req,res)=>{
  res.send("hello")
})


app.listen(8000,(err)=>{
    console.log('running port at 8000')
})