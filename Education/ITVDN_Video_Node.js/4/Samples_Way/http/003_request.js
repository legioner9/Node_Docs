var http = require ( 'http' );
var utils = require ( 'util' );

const server = http.createServer();

server.on ( 'request', ( req, res ) => {

    var requestInfo = utils.format ( 'HTTPVersion: %s \nMethod: %s \nStatus code: %s \nMessage: %s \nURL: %s',
                                     // верисия http протокола
                                     req.httpVersion,
                                     // http глагол
                                     req.method,
                                     // статус код
                                     req.statusCode,
                                     // текстовое описание статус кода
                                     req.statusMessage,
                                     // запрашиваемый ресурс
                                     req.url );

    console.log ( requestInfo );

    console.log ();
    // headers - свойство содержит объект с заголовками
    for ( var key in req.headers ) {
        console.log ( key, ":", req.headers[key] );
    }
    // отправляем ответ клиенту
    res.end ();
} );



const hostName = '127.0.0.1';
const servPort = 3004;
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
