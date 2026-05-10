const expr = require("express")
const router = expr.Router();
const data = [
    {id:101,name:'abc',branch:'Cse'},
    {id:102,name:'abcds',branch:'Cse'},
    {id:103,name:'abcfer',branch:'Cse'}
]
router.get("/",(req,res)=>{
    for(i of data){
        res.write("ID:"+i.id+"Name:"+i.name+"Branch"+i.branch);
    }
    res.send();
})
router.get("/:id",(req,res)=>{
    var current = data.filter((i1)=>i1.id == req.params.id);
    if(current>0){
        res.send(current);
    }
    else{
        res.send("not found");
    }
})

module.exports = router;