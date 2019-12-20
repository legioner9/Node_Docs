const http = require ( 'http' );
const fs = require ( 'fs' );

const hostName = '127.0.0.1';
const servPort = 3004;

const server = http.createServer ( ( req, res ) => {
    const r_str = fs.createReadStream ( __dirname + '\\data.txt' );
    r_str.pipe ( res );
} );
server.listen ( servPort, hostName,
                () => console.log ( `Server running at http://${ hostName }:${ servPort }/` ) );
