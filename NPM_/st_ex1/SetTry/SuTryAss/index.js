const SuLogToFile = require ( '../../SetLoggers/SuLogToFile' );
const assert = require ( 'assert' );

const SuTryAss = ( fn ) => ( file, dir, ...args ) => {
    try {
        fn ( ...args );
    }
    catch (e) {
        const str = `${ JSON.stringify ( e ) }`;

        //--- it's enlarged format "str"---
        //     const str = `${ JSON.stringify ( e ) }
        // ${ e.stack }
        //
        // ${ new Date () }`;
        SuLogToFile ( str, file, dir );
    }
};

SuTryAss.help = `'#to_cons': SuTryAss ( assert.strictEqual ) ( '#to_cons', null, 3, 5 );
'any': SuTryAss ( assert.strictEqual ) ( 'test_log.txt', my_path.join ( __dirname, 'TestLog' ), 3, 5 );`;
SuTryAss.call = () => console.log ( SuTryAss );

module.exports = SuTryAss;