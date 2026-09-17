const http = require('node:http');

const port = 7000;

const server = http.createServer((req, res) => {

    if (req.method === 'POST' && req.url === '/users') {

        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {

            const data = JSON.parse(body);

            console.log(data.name);
            console.log(data.age);
            res.end('Data received');
        });
    }

});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


