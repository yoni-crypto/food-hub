import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
// import 'dotenv/config'
import dotenv from 'dotenv';
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./models/orderRoute.js"
dotenv.config();


// app config
const app =express()
const port=4000

// middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB();

// api endpoints
app.use('/api/food',foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("working")
})

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})

// mongodb+srv://yonidisu111:yoniyoye1.@foodsite.jnhtm3i.mongodb.net/?