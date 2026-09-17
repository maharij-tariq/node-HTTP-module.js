const http = require('node:http');

const port = 7000;

const server = http.createServer((req, res) => {

    if (req.url === '/users' && req.method === 'GET') {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify({
            message: 'Users found'
        }));

    } else if (req.url === '/users' && req.method === 'POST') {

        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify({
            message: 'User created'
        }));

    } else {

        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify({
            message: 'Page not found'
        }));
    }

});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});