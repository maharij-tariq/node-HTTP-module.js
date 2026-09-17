const http = require('node:http');

const port = 3000;

const server = http.createServer((req, res) => {

    if (req.method === 'DELETE' && req.url === '/users/1') {

        console.log('User deleted');

        res.end('User deleted successfully');
    }

});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});