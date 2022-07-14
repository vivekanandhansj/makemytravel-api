import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"

const app = express()

dotenv.config()
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb")
      } catch (error) {
      throw(error);
      }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected!")
})

app.get ("/users",(req,res)=>{
    res.send("hello first request!")
})

// middlewares
app.use(cookieParser())
app.use(express.json());



app.use("/api/auth",authRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/users",usersRoute);
app.use("/api/rooms",roomsRoute);

// error handle middleware
app.use((error,req,res,next)=>{
    // return res.status(500).json("hello error from handler!")
const errorStatus = error.status || 500
const errorMessage = error.message || "Something went wrong!"
return res.status(errorStatus).json({
    success:false,
    status: errorStatus,
    message:errorMessage,
    stack:error.stack
})

})


app.listen(8800,()=>{
    connect()
    console.log("connected to backend")
})

