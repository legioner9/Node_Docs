const fs = require ( 'fs' );
const my_path = require ( 'path' );

fs.readdir ( __dirname, ( e, d ) => {
    if ( e ) throw e;

    const obj_exports = {};
    d.forEach ( item => {
        if ( item !== 'index.js' ) {
            obj_exports[item] = ( require ( my_path.join ( __dirname, item ) ) );
        }
    } );
    module.exports = obj_exports;

} );
debugger;
