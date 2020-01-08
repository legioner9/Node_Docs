function ReadAllOn ( readable, name = 'r_0' ) {

    if ( !( readable instanceof require ( 'stream' ).Readable || readable.socket instanceof require ( 'stream' ).Readable ) ) throw new Error ( 'Arg is not Readable' );
    rOnName ( readable, name );

}

function rOnName ( readable, name = 'r' ) {
    readable.on ( 'data', ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'RE data', name, data );
    } );

    readable.on ( 'readable', () => {
        console.log ( 'RE readable', name );
    } );

    readable.on ( 'end', () => {
        console.log ( 'RE end', name );
    } );

    readable.on ( 'error', ( args ) => {
        const error = { error: args };// args = close: IncomingMessage
        console.log ( 'RE error', name, error );
    } );

    readable.on ( 'close', () => {
        console.log ( 'RE close', name );
    } );

}

ReadAllOn.help = `    
ReadAllOn ( readable )
    readable.on ( 'data', ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'RE data', data );
    } );

    readable.on ( 'readable', () => {
        console.log ( 'RE readable' );
    } );

    readable.on ( 'end', () => {
        console.log ( 'RE end' );
    } );

    readable.on ( 'error', ( args ) => {
        const error = { error: args };// args = close: IncomingMessage
        console.log ( 'RE error', error );
    } );

    readable.on ( 'close', () => {
        console.log ( 'RE close' );
    } );`;

ReadAllOn.call = () => console.log ( ReadAllOn );

module.exports = ReadAllOn;