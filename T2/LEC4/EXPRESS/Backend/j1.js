const express = require('express');
const app = express();
const path = require("path");
// app.use(express.static(__dirname))
// app.use(express.static("Frontend"))
const staticpath= path.join(__dirname,"../Frontend");
// app.use(express.static(staticpath))
// app.use(express.static(staticpath,{index:'1.html'}))

app.get('/',(req,res)=>{
    res.sendFile(staticpath+ '/1.html');
}) // limitaton css nai aave..aama
app.listen(3001)