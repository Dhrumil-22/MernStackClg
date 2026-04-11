// request and response ne handle kare che client(browser) and server(node1.js) vache 
// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{"content-type":'text/html'}); 
//     res.write("<h1>Hello<h1>"); 
//     res.end()
// }).listen(3021);
 // MIME TYPE : text/plain,text/html,application/json,image/jpeg,image/png


 var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":'text/html'}); 
    res.end("<h1>Hello<h1>") //AEK J RESPOND MATE AEK KARTA VADHRE NAI CHALE END AEK J HOY NICHE NAVU END KE BAJU MA NAI CHLE
}).listen(3021);