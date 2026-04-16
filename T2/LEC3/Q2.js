// write express js script to perfrom  the task as ask below.
// 1. add one form whihc contains username,password and submit button.
// 2. data should be submitted by http post method.
// 3. on home page form and while submiting the form , on next oage "/login" , if user name is admin then it will dispaly "welcome admin" else display "pls login with admin name" 



var express = require("express")
var app = express()
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send(`<form action="/login" method="post">
              <input type="text" name="uname"/>
              <input type="password" name="password"/>
              <button type="submit">Click</button>
              </form>`)
});

app.post("/login",(req,res)=>{
    if(req.body.uname=="Admin"){
        res.write("welcom "+req.body.uname)
    }
    else{
        res.write("pls "+req.body.uname+" login with admin name")
    }
    res.send();
});
app.listen(8000);
rwgwtrg
