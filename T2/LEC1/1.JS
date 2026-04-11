var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("<i>hello</i>")
    // res.end()
}).listen(5000);

// var express = require('express');
// var app = express();

// app.get('/',function(req,res){
//     res.write("<i>hello</i>")
//     res.end()
// }).listen(5000);

// var express = require('express');
// var app = express();

// app.get('/',function(req,res){
//     res.set("content-type","text/plain");
//     res.write("hii")
//     res.send(); 
// }).listen(5000);

// var express = require('express');
// var app = express();

// app.get('/',function(req,res){
//     res.set("content-type","text/plain");
//     res.write("hii") //error :Cannot set headers after they are sent to the client
//     res.send("hello"); //automatic header set kare che and data ne send kare che
// }).listen(5000);
