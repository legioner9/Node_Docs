function ReadAllOnce ( readable, name = 'r_0' ) {

    if ( !( readable instanceof require ( 'stream' ).Readable || readable.socket instanceof require ( 'stream' ).Readable ) ) throw new Error ( 'Arg is not Readable' );
    rOnceName ( readable, name );

}

function rOnceName ( readable, name = 'r' ) {
    readable.once ( 'data', ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'RE data', name, data );
    } );

    readable.once ( 'readable', () => {
        console.log ( 'RE readable', name );
    } );

    readable.once ( 'end', () => {
        console.log ( 'RE end', name );
    } );

    readable.once ( 'error', ( args ) => {
        const error = { error: args };// args = close: IncomingMessage
        console.log ( 'RE error', name, error );
    } );

    readable.once ( 'close', () => {
        console.log ( 'RE close', name );
    } );

}

ReadAllOnce.help = `function rOnceName ( readable, name = 'r' ) {
    readable.once ( 'data', ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'RE data', name, data );
    } );

    readable.once ( 'readable', () => {
        console.log ( 'RE readable', name );
    } );

    readable.once ( 'end', () => {
        console.log ( 'RE end', name );
    } );

    readable.once ( 'error', ( args ) => {
        const error = { error: args };// args = close: IncomingMessage
        console.log ( 'RE error', name, error );
    } );

    readable.once ( 'close', () => {
        console.log ( 'RE close', name );
    } );

}`;

ReadAllOnce.call = () => console.log ( ReadAllOnce );

module.exports = ReadAllOnce;