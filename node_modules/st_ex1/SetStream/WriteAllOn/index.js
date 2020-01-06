function WriteAllOn ( writable ) {
    if ( !( writable instanceof require ( 'stream' ).Writable ) ) throw new Error ( 'Arg is not Writable' );
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
    } );
}

WriteAllOn.help = `WriteAllOn ( writable )`;

WriteAllOn.call = () => console.log ( WriteAllOn );

module.exports ={
    WriteAllOn
};