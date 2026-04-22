// wrote express script to get form data using get method and display data in json formte in next page /process.
// create html and js file saparatly.


const express = require("express");
const app = express();

app.use(express.static(__dirname));
app.get("/process",(req,res)=>{
    var fn = req.query.fname;
    var sn = req.query.sname;
    console.log(req.query)
    res.send("welcome:"+fn+" "+sn);
});
app.listen(8008,()=>{
    console.log("port running at 8008");
})