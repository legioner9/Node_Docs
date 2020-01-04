function WriteAllOn ( writable ) {
    if ( !( writable instanceof require ( 'stream' ).Writable ) ) throw new Error ( 'Arg is not Writable' );
    writable.on ( 'close', ( args ) => {
        const close = { close: args };// args undefined
        console.log ( 'Is res close', close);
    } );

    writable.on ( 'drain', ( args ) => {
        const drain = { drain: args };// ??
        console.log ( 'Is res drain', drain );
    } );

    writable.on ( 'finish', ( args ) => {
        const finish = { finish: args };// args undefined
        console.log ( 'Is res finish' ,finish);
    } );

    writable.on ( 'pipe', ( args ) => {
        const pipe = { pipe: args };// args = close: IncomingMessage
        console.log ( 'Is res pipe', pipe );
    } );

    writable.on ( 'unpipe', ( args ) => {
        const unpipe = { pipe: args };// args = close: IncomingMessage
        console.log ( 'Is res unpipe', unpipe );
    } );
}

WriteAllOn.help = `WriteAllOn ( writable )`;

WriteAllOn.call = () => console.log ( WriteAllOn );

module.exports = WriteAllOn;