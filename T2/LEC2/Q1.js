//Crete a basic web application thet ,
// 1. displays a form on the home page to enter the users name 
// 2. sends the form data to the server using a Post req. 
// 3. the server should read the submited data form the req.body 
// 4. finally display a confirm msg. 

var express = require("express")
var app = express()
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.send(`<form action="/login" method="post">
              <input type="text" name="uname"/>
              <button type="submit">Click</button>
              </form>`)
});

app.post("/login",(req,res)=>{
    const name = req.body.uname
    res.send("user created:"+name);
});
app.listen(8088);