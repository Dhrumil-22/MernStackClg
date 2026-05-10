const express=require('express');
const multer=require('multer');
const app=express();
app.use(express.static(__dirname,{index:'index2.html'}));
var store=multer.diskStorage({
    destination:"Lec8_Example",
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+".docx");
    }
});
var upload=multer({storage:store});
app.post('/upload',upload.array('mypic',5),(req,res)=>{
    const files=req.files;
    if(files){
        for(i of files){
            res.write("file"+i.originalname+"   has been uploaded successfully  ");
        }
        res.send()
    }
});
app.listen(3000);


// var upload=multer({storage:store,limits:{fileSize:10*1024*1024}}); 10bytes