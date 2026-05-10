
// var express = require("express");
// var app = express()

// var cp = require("cookie-parser");
// app.use(cp())
// app.get("/cookie",(req,res)=>{
    //     res.cookie('name','Express');
//     res.cookie('fname','Js');
//     res.cookie('lname','expressJs');
//     res.cookie('ID','2',{expires:new Date(Date.now()+10000)});
//     res.cookie('email','sneh_sexy007@gandu.com',{maxAge:2000});

//     res.send(req.cookies);
// }) 
// app.listen(8000)

var express = require("express");
var app = express()

var cp = require("cookie-parser");
app.use(cp())
app.get("/cookie",(req,res)=>{
    res.cookie('name','Express');
    res.cookie('fname','Js');
    res.cookie('lname','expressJs');
    res.cookie('ID','2',{expires:new Date(Date.now()+10000)});
    res.cookie('email','sneh_sexy007@gandu.com',{maxAge:2000});
    res.clearCookie("fname")
    res.send(req.cookies);
}) 
app.listen(8000)
