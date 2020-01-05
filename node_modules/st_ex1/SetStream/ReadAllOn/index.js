function ReadAllOn ( readable ) {
    if ( !( readable instanceof require ( 'stream' ).Readable ) ) throw new Error ( 'Arg is not Readable' );
    readable.on ( 'data', ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'Is res data', data );
        debugger;
    } );

    readable.on ( 'readable', () => {
        console.log ( 'Is res readable' );
        debugger;
    } );

    readable.on ( 'end', () => {
        console.log ( 'Is res end' );
        debugger;
    } );

    readable.on ( 'error', ( args ) => {
        const error = { error: args };// args = close: IncomingMessage
        console.log ( 'Is res error', error );
        debugger;
    } );

    readable.on ( 'close', () => {
        console.log ( 'Is res close' );
        debugger;
    } );

}

ReadAllOn.help = `ReadAllOn ( readable )`;

ReadAllOn.call = () => console.log ( ReadAllOn );

module.exports = ReadAllOn;