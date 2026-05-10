const express=require('express');
var app = express();
const api = require("C:\\Users\\91940\\Downloads\\@ COLLAGE\\LJIET\\SEM4\\FSD2\\T2\\apps.js")
app.use("/api",api)
app.listen(8002)