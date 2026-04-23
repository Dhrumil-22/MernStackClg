// crate a login form with fileds username password and submit button.
// on form submission on "/login" , if username is admin and password is 1234 display "login succesfull". else display "invalid cred." and provide link to go back .
// creat html and js file.

var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname))
app.post("/login",(req,res)=>{
    var a = req.body.uname;
    var b = req.body.pass;
    if ((a=="admin") && (b=="1234")){
        res.send("login sucessfull")
    }
    else {
        res.send("invalid cred.<a href='/'>Go back</a>")
    }
}).listen(8000)