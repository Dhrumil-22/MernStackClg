// write express script to print msg in next line spliting by "." and 
// use get method to submit the data html file contains form of text area for the msg and submit button.
//  create 2.html adn 2.js in the same folder


var express = require("express");
var app = express();

app.use(express.static(__dirname,{index:"2.html"}));
app.get("/go",(req,res)=>{
    t1 = (req.query.textarea).split(".");
    console.log(t1);
    for (i in t1){
        res.write(t1[i]+"\n");
    }
    res.send();
}).listen(8008)