const assert = require ( 'assert' );

const buf1 = Buffer.from ( 'this is a tést' );
const buf2 = Buffer.from ( '7468697320697320612074c3a97374', 'hex' );
assert.strictEqual();

const convert_str_utf8_to_hex = Buffer.from ( 'this is a tést' ).toString ( 'hex' );
//

const convert_str_hex_to_utf8 = Buffer.from ( '7468697320697320612074c3a97374', 'hex' ).toString ( 'utf8' );
//

debugger;

