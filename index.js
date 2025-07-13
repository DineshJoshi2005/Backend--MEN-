const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("This is the home page");
    }
    if(req.url == "/about"){
        res.end("This is an about page ");
    }
    if(req.url == "/profile"){
        res.end("This is an profile page");
    }
});

server.listen(3000);