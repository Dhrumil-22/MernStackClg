// create a web server that 
// 1. accepts a get req with the dynmic user id in url.
// 2. also accepts additional data (name,age) using query parameter.
// 3. extrect id from route parameter and name,age from query string. 
// 4. retun a json respone containg all recieved data.


// var express = require("express")
// var app = express()


// app.get("/user/:id",(req,res)=>{
//     const userId = req.params.id;
//     const name = req.query.name;
//     const age = req.query.age;
//     res.json({
//         messgae :"data rec.",
//         params :{id:userId},
//         query : {name,age}
//     });



// });
// app.listen(5005)


var express = require("express")
var app = express()

app.get("/user/:id",(req,res)=>{
    const userId=req.params.id;
    const name=req.query.name;
    const age=req.query.age;
    res.json({
        message:"Data Received",
        params:{Id:userId},
        query:{name,age}
    });
});
app.listen(5005);