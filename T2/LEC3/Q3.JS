// design a node js application using express js which satisfy the following requirements
// 1) the first midlware should display a message indicating that the first function has exceuted.
// 2) the second midleware should display a message idicating that the second function has exceucted.
// 3) the third midleare should perform a simple arithmatic opertaion and stores the result in the request objrct,
// then display it in consloe apply all three midleware in sequence to a single route "/student"
// 4) after excecuting all midleare, display a thank you message.

var express = require("express")
var app = express();
app.use(express.urlencoded({ extended: true }));

const addone=(req,res,next)=>{
    res.write("First function executed");
    next();
}

const addtwo=(req,res,next)=>{
    res.write("second function executed");
    next();
}

const addthree=(req,res,next)=>{
    req.total=50+40;
    console.log(req.total);
    next();
}

app.get("/student",addone,addtwo,addthree,(req,res)=>{
    res.write("Thank you");
    res.end();
});
app.listen(8000);