// write an express js script to set cookies of submited values of form. perform following task
// 1) create a html file which contains a form with field firstname,lastname,password and submit button. 
// 2) once form submited, store all this values to the respective cookies on "/next" page
// 3) then redirect user to "/login" page and clear the cookie set for the last name.
// 4) display remaining cookie value. Use post method   

var express = require("express");
var app = express();
var cp = require("cookie-parser");

app.use(cp());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname))

app.post("/next",(req,res)=>{
    res.cookie("fname",req.body.Fname);
    res.cookie("lname",req.body.Lname);
    res.cookie("password",req.body.pass);
    res.redirect("/login")
});
app.get("/login",(req,res)=>{
        res.clearCookie("lname");
        res.write("Welcome:"+req.cookies.fname)
        res.write("Your password is:"+req.cookies.password)
        res.send()
});
app.listen(5000)