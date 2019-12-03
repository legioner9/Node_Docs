'use strict';

const http = require('http');

function serv_casheFs_1(req, res, cache) {
    const port = 3005;
    const host = '127.0.0.1';

    const server = http.createServer((req, res) => {
        const url = req.url.substring(1);// req.url = /1.txt
        // substring(1) return from index = 1 to end
        console.log({url, cache});

        const data = cache.get(url);
        if (data) res.end(data);
        else res.end('File ' + url + 'not found');
    }).listen(port, host, () => {
        console.log(`Server start at http://${host}:${port}`)
    });

    server.on('clientError', (err, socket) => {
        socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    });

    server.on('error', err => {
        if (err.code === 'EACCES') {
            console.log(`No access to port: ${port}`);
        }
        if (err) throw err;
    });

}

module.exports = serv_casheFs_1();