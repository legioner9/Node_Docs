const fs = require ( 'fs' );
const my_path = require ( 'path' );

const obj_exports = {};
const arr_path = fs.readdirSync ( __dirname );
arr_path.forEach ( item => {
    if ( item !== 'index.js'&& item !== 'main.js') {
        const path = my_path.join ( __dirname, item );

        // console.log ( 'path', path );
        obj_exports[item] = ( require ( my_path.join ( __dirname, item, 'index.js' ) ) );
    }
} );
// console.log ( 'second', obj_exports );
module.exports = obj_exports;
