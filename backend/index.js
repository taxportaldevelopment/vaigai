const express = require("express");
const cookieParser = require('cookie-parser')
const app = express();
const dotenv = require('dotenv');
const cors = require("cors");
const path = require("path")
dotenv.config({path:path.join(__dirname,"config/config.env")})


app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PATCH","DELETE"]
}))


app.use(express.json())
app.use(cookieParser());
// import routers
const user = require("./Routers/user.router");
const auth = require("./Routers/auth.router");
const connectDatabase = require("./db/database");

connectDatabase()
app.use("/api/v1",user)
app.use("/api/v1/auth",auth)

app.listen(process.env.PORT,()=>{
     console.log("server is start 8000");
     
})