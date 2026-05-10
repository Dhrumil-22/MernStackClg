const express=require('express');
const multer=require('multer');
const app=express();
app.use(express.static(__dirname));
var store=multer.diskStorage({
    destination:"Lec8_Example",
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
var upload=multer({storage:store});
app.post('/upload',upload.single('mypic'),(req,res)=>{
    const file=req.file;
    if(file){
        res.send(file.originalname+"  uploaded successfully  "+file.destination);
    }
});
app.listen(3000);