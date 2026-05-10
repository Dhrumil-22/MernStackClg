//  write expresss js script using session to display ,
// how many times a user visited a website  ,
// if user is visiting for the 1st time then display welcome user ,
// else display no of count user have visited the website.

var express = require("express");
var app = express()

var sess = require("express-session");
app.use(sess({
    resave : true , 
    saveUnintialzie : true , 
    secret : "007",
}))

app.get('/',(req,res)=>{
    if(req.session.page){
        req.session.page++
        res.send("you have visited "+ req.session.page+" times")
    }
    else{
        req.session.page = 1
        res.send("welcome useer")
    }
}).listen(8000)