process.on ( 'warning', warning => {
    console.log ( { warning } );
} );

process.on ( 'unhandledRejection', ( reason, promise ) => {
    console.log ( {
                      unhandledRejection: {
                          reason,
                          promise
                      }
                  } );
} );

process.on ( 'rejectionHandled', promise => {
    console.log ( { rejectionHandled: { promise } } );
} );

process.on ( 'multipleResolves', ( type, promise, reason ) => {
    console.log ( {
                      multipleResolves: {
                          type,
                          promise,
                          reason
                      }
                  } );
} );
