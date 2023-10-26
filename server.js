//console.log("hello everyone");
const express = require("express");
const mongoose = require("mongoose");
const app= express();

mongoose.connect("mongodb+srv://mukundcs22:123412344@cluster0.7az4zce.mongodb.net/Batch3")
.then(()=>{
    console.log("Database is connected Succesefully");
});
.catch( (err)=>{
    console.log(err,"something went wrong");
} );


app.get("/test",(req,res)=>{
    res.send("Hello EveryOne, This is Test Api");
});

app.listen(5000,()=>{
    console.log("Server Is Running on port 5000");
});