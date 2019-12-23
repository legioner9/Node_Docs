const { Readable, Writable, Transform, pipeline } = require ( 'stream' );
const fs = require ( 'fs' );
const my_path = require ( 'path' );

function Su_log_to_file ( str, file_name, dir_name = 'SuLog' ) {

    fs.mkdir ( my_path.join ( __dirname, dir_name ), { recursive: true }, ( err ) => {
        if ( err ) throw err;
        s_log_to_file ( str, file_name );
    } );
}

function s_log_to_file ( str, file_name ) {
    const rstr = new Readable ();
    rstr.push ( str );
    rstr.push ( null );
    // inStream.pipe ( process.stdout );
    const write_fs = fs.createWriteStream ( my_path.join ( __dirname, 'Log', file_name ), 'utf-8' );
    write_fs.on ( 'error', ( e ) => console.log ( 'WTF?(((', e ) );
    pipeline (
        rstr,
        process.stdout,
        ( err ) => {
            if ( err ) {
                console.error ( 'Pipeline failed.', err );
            }
            else {
                console.log ( 'Pipeline succeeded.' );
            }
        }
    );
    pipeline (
        rstr,
        write_fs,
        ( err ) => {
            if ( err ) {
                console.error ( 'Pipeline failed.', err );
            }
            else {
                console.log ( 'Pipeline succeeded.' );
            }
        }
    );
}

module.exports = Su_log_to_file;