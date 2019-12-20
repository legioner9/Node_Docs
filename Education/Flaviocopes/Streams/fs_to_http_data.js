const http = require ( 'http' );
const fs = require ( 'fs' );

const server = http.createServer ( ( req, res ) => {
    fs.readFile( __dirname + '\\data.txt','utf-8', ( err, data ) => {
        if ( err ) throw err;
        res.end ( data );
    } );
} );

server.listen ( 3003 );