var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.set("content-type","text/plain");
    res.send("<i>hello</i>")
        res.write("hellio")
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

//app.listen(port,[host],[backlog],[callback])
//host aetle koi ip address by defualt 0.0.0.0 
//backlog is number like 100 didho toh at a time 100 req ne queue ma rakhe ane data batave if 101 user dekhade toh aene server error aape aene thoda time padi jayre quese ma jagya thay tayre aene req karvi padi
//callback 