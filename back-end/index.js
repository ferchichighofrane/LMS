const http = require("http");
const port = 4001;
const host = "127.0.0.1";
const teacher = require("./teachers.json")

function handleRequest(req, res) {
  if (req.method === "GET" && req.url === "/test") {
    res.writeHead(200, { "Content-type": "text/plain" });
    return res.end("hello yasmi");
  }
  if (req.method === "POST" && req.url === "/teacher") {
    let body = '';
  }
  else if (req.method === "GET" && req.url === "/testhtml") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!DOCTYPE html>   
<html lang="en">
  <head>
    <title>hii</title>
  </head>
  <body>
  <h1>hello yasmine</h1>
  <h2></h2>  
  </body>
</html>
        `);
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    return res.end("404 not found");
  }
}
const server = http.createServer(handleRequest);
console.log(`listening on http://${host}:${port}`);
server.listen(port, host);
