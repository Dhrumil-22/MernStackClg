const express=require('express');
const multer=require('multer');
const name = require('ejs');
var app = express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('1',{name:'sexy_sneh'});
});
app.listen(5200);