const { Readable, Writable, pipeline } = require ( 'stream' );

const read_str = new Readable ();
const write_str = new Writable ();


write_str._write = ( chunk, encoding, next ) => {
    console.log ( chunk.toString () );
    next ();
};


debugger;
pipeline (
    read_str,
    write_str,
    ( err ) => {
        if ( err ) {
            console.error ( 'Pipeline failed.', err );
        }
        else {
            console.log ( 'Pipeline succeeded.' );
        }
    }
);

read_str.push ( 'chunk_1 \n' );
read_str.push ( 'chunk_2 \n' );

