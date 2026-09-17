const http = require('node:http');

const port = 7000;

const server = http.createServer((req, res) => {

    if (req.url === '/users' && req.method === 'GET') {

        const user = {
            id: 1,
            name: 'Maharij',
            age: 21
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify(user));
    }

});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});