const assert = require ( 'assert' );
const Ex = require ( 'st_ex1' );
// Ex.call ();
const su_try = Ex.SetTry.SuTryAss;
// console.log ( su_try.help );

const {
    // AssertionError,
    // deepEqual,
    // deepStrictEqual,
    doesNotReject,
    doesNotThrow,
    // equal,  // DEPR
    fail,
    // ifError,
    // notDeepEqual,
    // notDeepStrictEqual,
    // notEqual,
    // notStrictEqual,
    // ok,
    rejects,
    strict,
    // strictEqual,
    throws,
} = assert;

// --- AssertionError ---

console.log ( '--- deepEqual ---' );
console.log ( '--- deepStrictEqual ---' );
su_try ( assert.deepEqual ) ( '#to_cons', null, [ [ 1, 2 ], 3 ], [ [ 1, 2 ], '3' ] ); // true
su_try ( assert.strict.deepEqual ) ( '#to_cons', null, [ [ 1, 2 ], 3 ], [ [ 1, 2 ], '3' ] ); // err:: "operator":"deepStrictEqual"
su_try ( assert.deepStrictEqual ) ( '#to_cons', null, [ [ 1, 2 ], 3 ], [ [ 1, 2 ], '3' ] ); // err:: "operator":"deepStrictEqual"
su_try ( assert.deepStrictEqual ) ( '#to_cons', null, [ [ 1, 2 ], 3 ], [ [ 1, 2 ], 3 ] ); //true
su_try ( assert.deepStrictEqual ) ( '#to_cons', null, { a: 1 }, { a: 1 } ); // true
console.log ( '--- End ---' );

console.log ( '--- strictEqual ---' );
su_try ( assert.strictEqual ) ( '#to_cons', null, 3, 5 ); // "actual":3,"expected":5,"operator":"strictEqual"
su_try ( assert.strictEqual ) ( '#to_cons', null, '5', 5 ); // "actual":"5","expected":5,"operator":"strictEqual"
su_try ( assert.strictEqual ) ( '#to_cons', null, [ [ 1, 2 ], 3 ], [ [ 1, 2 ], 3 ] ); //"actual":[[1,2],3],"expected":[[1,2],3],"operator":"strictEqual"
su_try ( assert.strictEqual ) ( '#to_cons', null, 'a', 'a' ); // true
su_try ( assert.strictEqual ) ( '#to_cons', null, { a: 1 }, { a: 1 } ); // true
console.log ( '--- End ---' );

console.log ( '--- ok ---' );
su_try ( assert.ok.strict ) ( '#to_cons', null, true ); //
su_try ( assert.ok.strict ) ( '#to_cons', null, 1 ); //
su_try ( assert.ok.strict ) ( '#to_cons', null, ); // "expected":true,"operator":"=="
su_try ( assert.ok.strict ) ( '#to_cons', null, false, 'it\'s false' ); // "actual":false,"expected":true,"operator":"=="
su_try ( assert.ok.strict ) ( '#to_cons', null, typeof 123 === 'string' ); // "actual":false,"expected":true,"operator":"=="
su_try ( assert.ok.strict ) ( '#to_cons', null, 0 ); // "actual":0,"expected":true,"operator":"=="
console.log ( '--- end ---' );

console.log ( '--- ifError ---' );
// --- only null ---
su_try ( assert.strict.ifError ) ( '#to_cons', null, null ); // true
su_try ( assert.strict.ifError ) ( '#to_cons', null, 0 ); // "actual":0,"expected":null,"operator":"ifError"
su_try ( assert.strict.ifError ) ( '#to_cons', null, new Error () ); //"actual":{},"expected":null,"operator":"ifError"
console.log ( '--- end ---' );

console.log ( '--- fail ---' );
// generator AssertionError [ERR_ASSERTION]
su_try ( assert.fail.strict ) ( '#to_cons', null,  ); // {} AssertionError [ERR_ASSERTION]: Failed
su_try ( assert.fail.strict ) ( '#to_cons', null, 'boom' ); // {} AssertionError [ERR_ASSERTION]: boom
su_try ( assert.fail.strict ) ( '#to_cons', null, new TypeError('need array') ); // {} TypeError: need array
console.log ( '--- end ---' );
// console.log ( '--- deepStrictEqual ---' );
debugger;

su_try ( assert.strictEqual ) ( '#to_cons', null, 3, 5 );

