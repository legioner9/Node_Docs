'use strict';
const http = require('http');

const user = {name: 'Pavel', age: 24};
const port = 3005;
const host = '127.0.0.1';

const routing = {
        '/': `<h1>Welcome to homepage</h1><hr>`,
        '/user': user,
        '/api/meth1': (req, res) => {
            console.log(`"${req.url}" => status :: ${res.statusCode} `);
            return {status: res.statusCode};
        },
        '/api/meth2': (req, res) => ({
            user,
           url :req.url,
           cookie: req.headers.cookie,
        }),

    }
;

const types = {
    object:JSON.stringify,
    string: s => s,
    undefined: () => 'not found',
    function: (fn, req, res) => JSON.stringify(fn(req, res)),
}

http.createServer((req, res) => {
    const body_res = router({req, res});
    res.end(body_res);
}).listen(port, host, () => {
    console.log(`Server start at http://${host}:${port}`)
});

function router(client) {
    const data = routing[client.req.url];
    const type = typeof data;
    const serializer = types[type];
    return serializer(data, client.req, client.res);
}

setInterval(() => user.age++, 2000);