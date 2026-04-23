// create one html file which contains 2 number input fildes , 1 dropdown which contains options like (select,add,sub,mul,div) and ne submit button.
//  the input fileds must containt the values >0 else it will give a message "pls enter valid number ".
//  also user must select any one formula else give a msg "you have not selcted any formula".
//  if 1 formula is selcted and no are entered then respective calculation will be perform on the page "calc"
// use get method

var express = require("express");
var app = express();
app.use(express.static(__dirname));

app.get("/calc",(req,res)=>{
    var n1 = req.query.n1;
    var n2 = req.query.n2;
    formula = req.query.formula;

    if((n1>0) && (n2>0))
        {
        if(formula=="Add")
        {
            res.send("add is : "+(n1+n2));
        } else if (formula=="Sub")
        {
            res.send("sub is : "+(n1-n2));
        }
        else if (formula=="Mul")
        {
            res.send("mul is : "+(n1*n2));
        }
        else if (formula == "Div")
        {
            res.send("div is : "+(n1/n2));
        }
        else{
            res.send("you have not selcted any formula");
        }
        }
    else
        {
        res.send("pls enter valid number");
    }
}).listen(8008)
