
import express from "express";

import dotenv from "dotenv"; 

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000; 

app.get("/",(req,res)=>{
    res.send("Hello1 Word!");
});


app.get("/api/auth/signup",(res,req)=>{
    console.log("sign route");
});

app.get("/api/auth/login",(res,req)=>{
    console.log("login route");
});

app.get("/api/auth/logout",(res,req)=>{
    console.log("logout route");
});



app.listen (5000, () => console.log(`Serevr is running on ${PORT}`));