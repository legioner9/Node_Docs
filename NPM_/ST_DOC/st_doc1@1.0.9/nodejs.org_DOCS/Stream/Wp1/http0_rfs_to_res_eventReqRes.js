const wrOnce = require ( 'st_ini' ).wrOnce;
const http0 = require ( 'st_ini' ).http0;
const { wOnce, rOnce } = wrOnce ();

const my_path = require ( 'path' );
const fs = require ( "fs" );

// console.log ( wOn.help );

const file = fs.createWriteStream ( my_path.join ( __dirname, 'file1.txt' ), 'utf8' );
wOnce ( file, 'createWriteStream' );
for ( let i = 0 ; i <= 10 ; i++ ) {
    file.write (
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"
    );
}
file.end ();

const handler = ( req, res ) => {
    if ( res ) wOnce ( res, 'res' );
    if ( req ) rOnce ( req, 'req' );
    // if ( req.socket || res.socket ) {
    //     wOnce ( req.socket, 'socket' );
    //     rOnce ( req.socket, 'socket' );
    // }
    const fsrf = fs.readFile ( my_path.join ( __dirname, 'file1.txt' ), 'utf8', ( err, d ) => {
        if ( err ) throw err;
        res.end ( d );
    } );
};

// Server running at http://127.0.0.1:3004/
// WE finish createWriteStream
// WE close createWriteStream
// RE readable req
// RE end req
// RE close req
// WE finish res
// WE close res

http0 ( handler );

debugger