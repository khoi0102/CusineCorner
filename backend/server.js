import express from "express"
import cors from 'cors'
import {connectDB} from "./config/db.js";

//app config
const app = express();
const port = 3000;

//middleware
app.use(express.json())
app.use(cors())
//db connection
connectDB();
app.get("/",(req,res)=>{
    res.send("API Working")
})
app.listen(port,(req,res)=>{
    console.log(`Server is running on port http://localhost:${port}`)
})

