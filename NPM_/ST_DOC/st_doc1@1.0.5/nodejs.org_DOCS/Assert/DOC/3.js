const assert = require ( 'assert' );
const Ex = require ( 'st_ex1' );
// Ex.call ();
const su_try = Ex.SetTry.TryCatch;
console.log ( su_try.help );

const {
    // AssertionError,
    // deepEqual,
    // deepStrictEqual,
    // doesNotReject,
    // doesNotThrow,
    // equal,  // DEPR
    // fail,
    // ifError,
    // notDeepEqual,
    // notDeepStrictEqual,
    // notEqual,
    // notStrictEqual,
    // ok,
    // rejects,
    // strict,
    // strictEqual,
    // throws,
} = assert;


const err = new TypeError ( 'Wrong value' );
err.code = 404;
err.foo = 'bar';
err.info = {
    nested: true,
    baz: 'text'
};
err.reg = /abc/i;

assert.throws (
    () => {
        throw err;
    },
    {
        name: 'TypeError',
        message: 'Wrong value',
        info: {
            nested: true,
            baz: 'text'
        }
        // Only properties on the validation object will be tested for.
        // Using nested objects requires all properties to be present. Otherwise
        // the validation is going to fail.
    }
);

const err_1 = new TypeError ( 'Wrong value' );
err_1.code = 404;

assert.throws ( () => {
    throw err_1;
}, {
                    code: 404
                } ); // true
debugger
assert.throws ( () => {
    throw err_1;
}, {
                    code: 555
                } ); //
//assert.js:561 Uncaught AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:
// + actual - expected
//
//   Comparison {
// +   code: 404
// -   code: 555
//   }