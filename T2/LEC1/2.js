var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.set("content-type","text/plain");
    res.write("hiee");
    res.end();
})

app.get('/about',(req,res)=>{
    res.send("<h1>hiee</h1>");
    res.end();
})

app.listen(5000,()=>{console.log("server started")})


//res.send()
//res.json()
//res.end()
//res.sendFile()
//res.redirect()
//res.render()