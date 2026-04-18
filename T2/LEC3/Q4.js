//  create a middleware that log a message indicating that a student has enterd the campus whenever a req. is made
//  2. cretae the another middlewre that check where the student has valid id. if it is valid , store the students nama in the req. object
//  and allow the net stpe. if the id is not valid stop further processing and send the appropriate response .



var express = require("express")
var app = express();
app.use(express.urlencoded({ extended: true }));

const entrylog = (req,res,next)=>{
    res.write("student entered in campus. ");
    next();
}

const checkId =  (req,res,next)=>{
    const hostId = true;
    if(hostId){
        req.name = 'sexy_sneh007';
        console.log("ID veirfied ") 
        next();
    }
    else{
        res.send("access denied");
    }
};

app.use("/class",entrylog,checkId);
app.get("/class",(req,res)=>{
    res.write("welcome, "+req.name);
    res.end()
});
app.listen(5005);