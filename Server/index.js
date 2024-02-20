 const http= require ('http');
const { type } = require('os')
 const port=4001;
const host ='127.0.0.1';
const server =http.createServer()
console.log(`listning on http://${host}:${port}`)
server.listen (port,host)

function handleRequest(req,res){
    if(req.method==="GET" && req.url==="/test"){
        res.writeHead(200,{'Content-type': 'text/plain'});
        return res.end("saluut ghofy");

    }
    else {
        res.writeHead(404,{'Content-type': 'text/plain'})
        return res.end("404 not found")
    }
  
}