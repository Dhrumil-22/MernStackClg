var express = require("express");
var app = express()

app.get("/user/:id",(req,res)=>{
    const userId = req.params.id;
    res.send("showing profile of "+userId)
}).listen(5000)