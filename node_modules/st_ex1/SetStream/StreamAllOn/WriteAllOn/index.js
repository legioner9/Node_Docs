function WriteAllOn ( writable ,name = 'w _0') {

    if ( !( writable instanceof require ( 'stream' ).Writable || writable.socket instanceof require ( 'stream' ).Writable ) ) throw new Error ( 'Arg is not Writable' );
    wOnName ( writable, name );


}

function wOnName ( writable, name = 'w' ) {
    writable.on ( 'close', () => {
        console.log ( 'WE close', name  );
    } );

    writable.on ( 'drain', () => {
        console.log ( 'WE drain', name );
    } );

    writable.on ( 'finish', () => {
        console.log ( 'WE finish', name );
    } );

    writable.on ( 'pipe', ( src ) => {
        const pipe = { pipe: src };
        console.log ( 'WE pipe', name, pipe );
    } );

    writable.on ( 'unpipe', ( src ) => {
        const unpipe = { unpipe: src };
        console.log ( 'WE unpipe', name, unpipe );
    } );

    writable.on ( 'error', ( err ) => {
        const error = { err };
        console.log ( 'WE error', name, error );
    } );
}



WriteAllOn.help = `
WriteAllOn ( writable )
    writable.on ( 'close', () => {
        console.log ( 'WE close' );
    } );

    writable.on ( 'drain', () => {
        console.log ( 'WE drain' );
    } );

    writable.on ( 'finish', () => {
        console.log ( 'WE finish' );
    } );

    writable.on ( 'pipe', ( src ) => {
        const pipe = { pipe: src };
        console.log ( 'WE pipe', pipe );
    } );

    writable.on ( 'unpipe', ( src ) => {
        const unpipe = { unpipe: src };
        console.log ( 'WE unpipe', unpipe );
    } );

    writable.on ( 'error', ( err ) => {
        const error = { err };
        console.log ( 'WE error', error );
    } );`;

WriteAllOn.call = () => console.log ( WriteAllOn );

module.exports = WriteAllOn;