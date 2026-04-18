// create one html forms which contain text field for names, email feild, and check box for subscribtion. html file will be loaded on home page.
// on login page welcome user and email id a=data should be priented. if user cecked the subscribtion then "Thank you for sunscribtion" meassage will be priented and log out link will be displayed.
// if user clicks the log out link then he/she will be redirected to home page.
// if user has not obtain a subscri tion then "you can subscribe to get update" message will be priented and subscribe link will be display
// if user clicks sun=bscribe link then he/she will be redirected to subscribtuion page. in this page "thank you for subscribtion" message should be priented and log out link should be printed

var express = require("express")
var app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send(`<form action="/login" method="post">
    Name:<input type="text" name="name" required><br>
    Email:<input type="email" name="email" required><br>
    <input type="checkbox" name="newsletter">Subscribe?
    <input type="submit" value="submit">
    </form>`);
});

app.post("/login", (req, res,next) => {
    res.set("content-type","text/html")
    res.write("<h1> Welcome:"+req.body.name+"</h1>")
    res.write("<h1> Your Email:"+req.body.email+"</h1>")
    next();
});

app.post("/login", (req, res) => {
    if(req.body.newsletter == "on") {
        // res.set("content-type","text/html")
        res.write("Thank you for Subscribe:"+"<a href='/'>Logout</a>");
    } 
    else {
        res.write("you can Subscribe to get daily updates:"+ "<a href='/subscribe'>Subscribe</a>");
    }
    res.send();
});

app.get("/subscribe",(req,res)=>{
    res.set("content-type","text/html")
    res.write("Thank you for Subscribe:<a href='/'>Logout</a>");
    res.send()
});
app.listen(5001)