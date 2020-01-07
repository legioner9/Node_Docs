const { Readable, Transform ,Duplex} = require ( 'stream' )

const mrr = new Readable ( {
                               read ( chunk, encoding, callback ) { // _read(chunk, encoding, callback)
                                   // ...
                               },
                               my_read ( chunk, encoding, callback ) { // not implement
                                   // ...
                               }

                           } );
const trr = new Transform ( {
                                destroy ( error, callback ) {},
                                final ( callback ) {},
                                read ( callback ) {},
                            } );
const drr = new Duplex( {
                                destroy ( error, callback ) {},
                                final ( callback ) {},
                                read ( callback ) {},

                            } );

debugger;