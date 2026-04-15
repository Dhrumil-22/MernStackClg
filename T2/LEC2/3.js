// Query Parameter 
// req.and : in url small data GET 
// req.body  : not in url larger data POST

var express = require("express");
var app = express()

app.get("/data",(req,res)=>{
    const name = req.query.name;
    const age = req.query.age;
    const data = req.query;
    console.log(typeof(name));
    console.log(typeof(age));
    console.log(typeof(data));
    res.write(JSON.stringify(data)+"\n");
    res.write("Name:"+name+" Age:"+age);
    res.end()
}).listen(5001);

