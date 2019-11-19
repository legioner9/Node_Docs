'use strict';

const net = require('net');

const server = net.createServer(socket => {
  console.log('socket :: ' , {socket})
    console.dir(socket.address());
    socket.setNoDelay(true);
    socket.write('💗');
    socket.on('error', err => console.log('err socket ::' + err));
    socket.on('data', data => {
        console.log('📨:', data.toString());
    });
}).listen(2000, () => console.log('start on 2000'));

server.on('error', err => console.log('err server ::' + err));