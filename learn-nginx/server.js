const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
   
    console.log(req.url,"req");

       // 设置响应头
       res.writeHead(200, { 'Content-Type': 'application/javascript' });
       res.end("jsonpResponse");
});

const PORT = 5555;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
