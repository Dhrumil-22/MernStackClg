// 1.data must be written as below in the file named 'exam.txt' .
// 2.file name must be fetched from the url given.
// 3.read content from the file and send respond to server and display data in '/'page in the below givrn output but in <h1> tage and red color. 
// 4. if any other pages requeted then show 'PAGE NOT FOUND' msg in plain text. 
const u = require('url'); 
const fs = require('fs'); 
const http = require('http');

var adder = 'https://www.google.com/exam.txt?c1=hello&c2=FSD2+T1+TEST&c3=Welcome+To+LJU#AllTheBest'
var ul = u.parse(adder,true);

var c1 = ul.query.c1;
var c2 = ul.query.c2;
var c3 = ul.query.c3;
var hash = ul.hash;
var pathname = "."+ul.pathname;
var cont = c1+"!<br>"+c3+" "+c2+"<br>"+hash
fs.writeFileSync(pathname,cont)

const server = http.createServer(function(req,res){
    if(req.url == '/'){
        data = fs.readFileSync(pathname,'utf-8')
        res.writeHead(200,{"content-type":'text/html'});
        res.end("<h1 style='color:red'>"+data+"</h1>");
    }
    else{
        res.writeHead(404,{"content-type":'text/plain'});
        res.end("PAGE NOT FOUND");
    }
})
server.listen(5001)