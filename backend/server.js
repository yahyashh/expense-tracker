const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotev=require("dotenv").config()
const router = require("./routes/expenseRouter")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.get("/",(req, res)=>{
   res.send("Home page...")
})
app.use("/api", router)


const PORT=5000

mongoose
        .connect(process.env.MONGO_URI)
        .then(()=>{
            app.listen(PORT,()=>{
            console.log(`server running on port ${PORT}`);
           })
         })