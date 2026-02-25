// const { log } = require('console');
// const express = require('express')
// const app = express();
// const multer  = require('multer')
// const port = 3000;

// app.get('/',(req,res)=>{
//     res.send("Hi i am arsh..");
// })

// app.get('/', ()=>{

// })

// app.listen(port,()=>{
//     console.log("Running");
// })


const express = require('express');
const { log, error } = require('node:console');
const app = express();
const port = 8000;

//create database
const student = [
    {
    id:1,
    name:"Arsh",
    class: "B.tech"
    },
    {
    id:2,
    name:"John",
    class: "M.tech"
    },
]

//First Route (show Data)
app.get('/', (req,res)=>{
    try{
        res.status(200).json({message:" show all student data ",data:student})
    }
    catch (err){
        res.status(500).json({message:"data not found",error:err.message})
    }
})


//Search Data from id
app.get('/:id',(req,res)=>{
    try {
       const id = parseInt(req.params.id) ;
       const std = student.find(s=>s.id == id)
       if(!std){
            return res.status(404).json({message:"Student data is not found", data:student})
       } 
       res.status(200).json({message:"Student data is found",data:std})
    } 
    catch (error){
        res.status(500).json({message:"Student data not found",error:err.message})
    }
})


app.listen (port,()=>{
    console.log(`Server is runing at http://localhost:${port}`);
})