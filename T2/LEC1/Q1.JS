// write express.js script to req. server to display json object 
var express = require('express');
var app = express();

student = {
    name:'fsd',
    lec:'2'
};

app.get('/',function(req,res){
     res.set("content-type","application/json");
    //  res.write(JSON.stringify(student));
    //  res.send(student);
    //   res.end();
     res.json(student);
    }).listen(8000)
