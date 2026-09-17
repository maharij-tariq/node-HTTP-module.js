const http = require('node:http');
const port = process.env.PORT || 5000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('welocome to the server');
})
server.listen(port , ()=>{
    console.log(`listing to the number of ${port}`)
})