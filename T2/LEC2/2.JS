var express = require("express");
var app = express()

app.get("/calaneder/:day/event/:birthday",(req,res)=>{
   res.send(req.params)
}).listen(5000)