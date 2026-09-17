const http = require('node:http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/home') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
          const data = {
            name : 'mahairj',
            age: 21,    
          }
        res.end(JSON.stringify((data)))
    }

});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});