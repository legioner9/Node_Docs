// const Ex = require ( 'st_ex1' );
const Ex = require ( '../NPM_/st_ex1' );
// const TryCatch = require ( './st_ex1/SetTry/TryCatch' );
const assert = require ( 'assert' );
debugger;
// Ex.call ();
// Ex.SetTry.TryCatch.help;
const tryCatch = Ex.SetTry.TryCatch;

tryCatch ( assert.strictEqual ) ( '#to_consMes', null, 3, 5 );
tryCatch ( assert.strictEqual ) ( '#to_consMes', null, 3, 5, '::your message::' );

debugger;