const LogTo = require ( '../../SetLoggers/LogTo' );
const assert = require ( 'assert' );

const TryCatch = ( fn ) => ( file, dir, ...args ) => {
    try {
        fn ( ...args );
    }
    catch (e) {
        LogTo ( e, file, dir );
    }
};

TryCatch.help = `'#to_ret': TryCatch ( assert.strictEqual ) ( '#to_ret', null, 3, 5 );
'#to_consAll': TryCatch ( assert.strictEqual ) ( '#to_cons', null, 3, 5 );
'#to_cons': TryCatch ( assert.strictEqual ) ( '#to_cons', null, 3, 5 );
'any': TryCatch ( assert.strictEqual ) ( 'test_log.txt', my_path.join ( __dirname, 'TestLog' ), 3, 5 );`;

TryCatch.call = () => console.log ( TryCatch );

module.exports = TryCatch;