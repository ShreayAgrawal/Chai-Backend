//reuire('dotenv').config({path: './env'})

import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()

/*

//initializing app in same index file 
import express from "express"
const app = express()



( async() => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("Error", (error) => {
        console.log("ERROR", error);
        throw error
       })
       app.listen(process.env.PORT, () => {
        console.log(`App is Listening on PORT ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
}) ()

*/