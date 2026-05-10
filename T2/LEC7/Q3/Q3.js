// create index.html file which contains user name password and login button. 
// after cliackcing submit button it should jump on '/savesession' page. 
// store username password in session.
// after saving session redirect to '/fetch' page and read value, also put logout link.
// jump on "/deletesession"page after logout link. destory the session back to index.html


var express = require("express");
var app = express()
var sess = require("express-session");

app.use(sess({
    resave : true , 
    saveUnintialzie : true , 
    secret : "007",
}))

app.use(express.static(__dirname));

app.get('/savesession',(req,res)=>{
    req.session.uname = req.query.Fname
    req.session.pass = req.query.pass
    res.redirect("/fetch")
})
app.get('/fetch',(req,res)=>{
    res.set("content-type","text/html");
    res.write("welcome: "+ req.session.uname+"\n");
    res.write("<a href='/deletesession'>logout</a>")
    res.send()
})
app.get('/deletesession',(req,res)=>{
    req.session.destroy();
    res.redirect("/")
}).listen(8000);