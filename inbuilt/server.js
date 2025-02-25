//creating server
let http = require('http');


//req -- what we send to sever param(/),queryparam(?),body 
//res-- what server sends in return
let server = http.createServer((req,res)=>{
    res.write('<h1> This is nodeJs code server </h1>');
    res.end();
});

server.listen(7600);

//http://localhost:7600/

//