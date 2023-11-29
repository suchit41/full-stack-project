//require('dotenv').config({path:'./env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})


connectDB()












// import { Express } from "express";
// const app = Express()
// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error) =>{
//             console.log("ERROR",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`APP is on port ${process.env.PORT}`);
//         })

//     }catch(error){
//         console.error("ERROR: ",error)
//         throw err
//     }
// })()