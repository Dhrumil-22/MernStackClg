//  creat an html form that takes an number on submisson , if input is empty then display "pls enter a number" for input is not a number then display"invalid input."
//  if it is a number then display even number or odd no. if the number is even or odd respectively.
// also provide the link to go back . use two file html and js also use http post method


var express = require("express");
var app = express()
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname))
app.post("/number",(req,res)=>{
    var a = req.body.num;
    if (a=="")
    {
        res.send("pls entera number.<br> <a href='/'>Go Back</a>")
    }
    else if(isNaN(a)){
        res.send("invalid input. <br><a href='/'>Go Wabck</a>")
    }
    else{
        var b = parseInt(a);
        if(b%2==0){
            res.send("Even Number : "+a+"<br><a href='/'>Try again</a>")
            
        }
        else{
            res.send("odd Number : "+a+"<br><a href='/'>Try again</a>")
        }
    }
}).listen(8000)

