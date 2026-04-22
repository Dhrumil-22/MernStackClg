const express = require('express');
const app = express();

const path = require("path");

var csspath = path.join(__dirname,"../css")
var htmlpath = path.join(__dirname,"../html")
// var csspath = path.join(__dirname,"../css")

app.use(express.static(csspath));
app.use(express.static(htmlpath,{index:"1.html"}));
app.listen(5005);