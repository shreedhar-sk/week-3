
    //console.log("hello everyone");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./router/route");

const app = express();
app.use(express.json());

app.use("/", routes);

mongoose
.connect(
    "mongodb+srv://shreedharcs22:shree+412@cluster0.mx7ypmw.mongodb.net/"
    )
.then(() => {
    console.log("Database is connected Succesefully");
})
.catch( (err)=>{
    console.log(err,"something went wrong");
} );


app.get("/test",(req,res)=>{
    res.send("Hello EveryOne, This is Test Api");
});

app.listen(4000,()=>{
    console.log("Server Is Running on port 4000");
});