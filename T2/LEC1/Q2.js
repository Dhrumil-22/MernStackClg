// write an express.js script to define one json array of 3 objctes havin properties name and age.
// sort this object according to age.
//  if user req "sort" in url then all name along with age should be printed according to desendin order to GE.
//  ALSO DISPLAY THIS SORTED VLUE ON SORT PAGE AND DISPLAY JSON OBJET ON HOME PAGE

var express = require("express");
var app = express()
var obj = [
    {name  : "sexy sneh", age : 22},
    {name  :  "6.2 sneh",age : 6,},
    {name  :  "suthar sneh",age : 20,},
    {name  :"mewada sneh",age : 40}
]
app.get('/',(req,res)=>{
    res.send(obj)
});
app.get('/sort',(req,res)=>{
    res.set('content-type',"text/html");
    var des = obj.sort((a,b)=>b.age-a.age);
    for (k of des){
        res.write("<br>"+k.name +"="+k.age+"</br>")
    }
    res.end()
});

app.listen(5000);



