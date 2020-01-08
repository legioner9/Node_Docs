function WriteAllOnce ( writable, name = 'w _0' ) {

    if ( !( writable instanceof require ( 'stream' ).Writable || writable.socket instanceof require ( 'stream' ).Writable ) ) throw new Error ( 'Arg is not Writable' );
    wOnceName ( writable, name );

}

function wOnceName ( writable, name = 'w' ) {
    writable.once ( 'close', () => {
        console.log ( 'WE close', name );
    } );

    writable.once ( 'drain', () => {
        console.log ( 'WE drain', name );
    } );

    writable.once ( 'finish', () => {
        console.log ( 'WE finish', name );
    } );

    writable.once ( 'pipe', ( src ) => {
        const pipe = { pipe: src };
        console.log ( 'WE pipe', name, pipe );
    } );

    writable.once ( 'unpipe', ( src ) => {
        const unpipe = { unpipe: src };
        console.log ( 'WE unpipe', name, unpipe );
    } );

    writable.once ( 'error', ( err ) => {
        const error = { err };
        console.log ( 'WE error', name, error );
    } );
}

WriteAllOnce.help = `function wOnceName ( writable, name = 'w' ) {
    writable.once ( 'close', () => {
        console.log ( 'WE close', name  );
    } );

    writable.once ( 'drain', () => {
        console.log ( 'WE drain', name );
    } );

    writable.once ( 'finish', () => {
        console.log ( 'WE finish', name );
    } );

    writable.once ( 'pipe', ( src ) => {
        const pipe = { pipe: src };
        console.log ( 'WE pipe', name, pipe );
    } );

    writable.once ( 'unpipe', ( src ) => {
        const unpipe = { unpipe: src };
        console.log ( 'WE unpipe', name, unpipe );
    } );

    writable.once ( 'error', ( err ) => {
        const error = { err };
        console.log ( 'WE error', name, error );
    } );
}
`;

WriteAllOnce.call = () => console.log ( WriteAllOnce );

module.exports = WriteAllOnce;