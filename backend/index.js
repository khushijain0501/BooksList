import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import {PORT,mongoURL} from './config.js'
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"
//const express=require("express")
const app=express()

//middleware for parsing request body
app.use(express.json())
app.use(cors())
//middleware to handle cors policy
/*app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type']
}))*/

app.get('/',(req,res)=>{
    console.log(req);;
    return res.status(234).send("Welcome");
})
app.use('/books',booksRoute);

  
mongoose
    .connect(mongoURL)
    .then(()=>{
        console.log("Database connected")
        app.listen(PORT,()=>{
            console.log(`App is listening to port: ${PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error);
    });

    
