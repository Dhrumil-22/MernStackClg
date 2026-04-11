// Write a node.js script using Event handling to perform following 
// tasks in sequence:
// a) Create file in it named abc.txt and enter data into it.
// b) Append data to that file abc.txt and print message “Data Appended 
// Successfully”.
// c) Read the content of the file abc.txt and print the content on http 
// web server.
// d) Do all the operations of File using asynchronous file system 
// module. And Lastly print the message “All operations performed 
// successfully” on console.

const fs = require('fs'); 
const http= require('http'); 
const eventemiter = require('events');
const ee = new eventemiter();

ee.on('create',(a)=>{
    fs.writeFile('abc.txt',a,(error)=>{
        if (error) throw error;
        console.log("file created")
        ee.emit('append',"this is data 2")
    });
});
ee.on('append',(b)=>{
    fs.appendFile('abc.txt',b,(error)=>{
        if (error) throw error;
        http.createServer(function(req,res){
            res.writeHead(200,{'content-type':'text/html'});
            res.end("Data Appended Successfully")
        }).listen(5001)
        ee.emit('read')

    });
});
ee.on('read',()=>{
    fs.readFile('abc.txt','utf-8',(error,data)=>{
        if (error) throw error;
        console.log("read the content : ")
        console.log(data)
        console.log("All operations performed successfully")
    });
});

ee.emit('create',"this is data 1")
