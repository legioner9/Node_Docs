const Ex = require ( 'st_ex1' );
const mWRS = Ex.SetStream.CombinStream.mWriteReadStream;
// console.log ( mWRS.help );
// const mStreams = Ex.SetStream.CombinStream.mWriteReadStream ( [ [ 1, 777 ] ], [ [ 2, '000' ] ] );
const mWRS_ = Ex.SetStream.CombinStream.mWriteReadStream;
const wrOn = Ex.SetStream.CombinStream.mWriteReadOn;
const wrOnce = Ex.SetStream.CombinStream.mWriteReadOnce;
const http0 = Ex.SetServers.SimpleHttp;

module.exports = {
    mWRS,
    mWRS_,
    wrOn,
    wrOnce,
    http0
};