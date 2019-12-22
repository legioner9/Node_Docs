const http = require ( 'http' );

// const hostName = '127.0.0.1';
// const servPort = 3004;
//

function SuServer ( handle, servPort = 3004, hostName = '127.0.0.1' ) {
    const server = http.createServer ( handle );

    server.on ( 'error', ( e ) => {
        if ( e.code === 'EACCES' ) {
            console.log ( `No access to port: ${ servPort }` );
        }
        else {
            console.log ( { e } );
        }
    } );
    server.on ( 'clientError', ( err, socket ) => {
        socket.end ( 'HTTP/1.1 400 Bad Request\r\n\r\n' );
    } );

    server.listen ( servPort, hostName,
                    () => console.log ( `Server running at http://${ hostName }:${ servPort }/` ) );
}

module.exports = {
    SuServer,
};