const http = require('node:http');

const port = 1000;

const server = http.createServer((req, res) => {

    if (req.method === 'PATCH' && req.url === '/users/1') {

        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {

            const data = JSON.parse(body);

            console.log(data.age);

            res.end('User updated successfully');
        });
    }

});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});