// 1.CREATE ONE PAGE  WITH TWO LINKS  HOME(/) & ABOUT(/ABOUT) 
// 2.BOTH PAGES MUST CONTAINS HTML TYPE CONTAIN AND ADD REQUIRE CONTENT AND PAGES. 
// 3.IF USER ADD ANY OTHER URL PATH HE/SHE WILL BE REDIRECTED TO PAGE AND PLAIN MSG WILL BE DISPLAYED 'PAGE NOT FOUND' 

var http = require("http");
http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{"content-type":'text/html'});
        res.end("<h1>Home Page</h1>");
    }
    else if(req.url == '/about'){
        res.writeHead(200,{"content-type":'text/html'});
        res.end("<h1>About Page</h1>");
    }
    else{
        res.writeHead(404,{"content-type":'text/plain'});
        res.end("PAGE NOT FOUND");
    }
}).listen(5001)