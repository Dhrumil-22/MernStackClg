// write node js scrit to handle a event to wirte data infile append data in  file and then read the file and display data in console 
var ps = require("fs");

const eventemmiter = require('events');
const ee = new eventemmiter();

ee.on('write',function(){
    ps.writeFile('abc.txt','hello',(err)=>{
        if(err) throw err;
        console.log("File created");
        ee.emit("append")
    });
});
ee.on('append',function(){
    ps.appendFile('abc.txt',' Byee',(err)=>{
        if(err) throw err;
        console.log("File Append");
        ee.emit("read")
    });
});
ee.on('read',function(){
    ps.readFile('abc.txt',"utf-8",(error,data1) =>{ 
        if (error) throw error;
            console.log("data from file : ",data1);
    });
});

ee.emit('write');