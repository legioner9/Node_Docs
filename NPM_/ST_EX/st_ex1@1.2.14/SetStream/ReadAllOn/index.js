function ReadAllOn ( readable ) {
    if ( !( readable instanceof require ( 'stream' ).Readable ) ) throw new Error ( 'Arg is not Readable' );
    readable.on ( 'data', ( args ) => {
        const data = { data: args };// args = close: IncomingMessage
        console.log ( 'Is res data', data );
        debugger;
    } );

    readable.on ( 'readable', ( args ) => {
        const readable = { readable: args };// args = close: IncomingMessage
        console.log ( 'Is res readable', readable );
        debugger;
    } );

    readable.on ( 'end', ( args ) => {
        const end = { end: args };// args = close: IncomingMessage
        console.log ( 'Is res end', end );
        debugger;
    } );

    readable.on ( 'error', ( args ) => {
        const error = { error: args };// args = close: IncomingMessage
        console.log ( 'Is res error', error );
        debugger;
    } );

    readable.on ( 'close', ( args ) => {
        const close = { close: args };// args = close: IncomingMessage
        console.log ( 'Is res close', close );
        debugger;
    } );

}

ReadAllOn.help = `ReadAllOn ( readable )`;

ReadAllOn.call = () => console.log ( ReadAllOn );

module.exports = ReadAllOn;