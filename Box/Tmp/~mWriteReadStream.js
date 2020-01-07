const Ex = require ( 'st_ex1' );
debugger;
const mWRS = Ex.SetStream.CombinStream.mWriteReadStream;
console.log ( mWRS.help );
debugger;
const mStreams = Ex.SetStream.CombinStream.mWriteReadStream ( [ [ 1, 777 ] ], [ [ 2, '000' ] ] );
