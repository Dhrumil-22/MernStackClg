// develope a webapplication using expreess and ejs that allows user to enter a student name and marks thorugh a form. after submission ,the appliation should display the enterd detials form restult.ejs 
// if the marks are 40 or above disply pass in green color else display fail in red color..


// develope a webapplication using
// expreess and ejs that allows 
// user to enter a student name and marks
// thorugh a form. after submission ,
// the appliation should display 
// the enterd detials form restult.ejs 
// if the marks are 40 or above disply pass
// in green color else display fail in red color..

const express=require('express');
const multer=require('multer');
const app=express();

app.set("view engine","ejs");
const path = require("path")
app.set("views",path.join(__dirname));
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>
    {
        res.render("form");
    });
app.post("/submit",(req,res)=>
    {
        const uname = req.body.user;
        const result = req.body.marks;
        res.render("result",{uname,result}); 
    });
    app.listen(3005);    