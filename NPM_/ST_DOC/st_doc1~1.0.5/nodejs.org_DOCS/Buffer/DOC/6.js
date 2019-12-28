const buf1 = Buffer.from ( 'ABC' );
const buf2 = Buffer.from ( 'BCD' );
const buf3 = Buffer.from ( 'ABCD' );

console.log ( buf1.compare ( buf1 ) );
// Prints: 0
console.log ( buf1.compare ( buf2 ) );
// Prints: -1
console.log ( buf1.compare ( buf3 ) );
// Prints: -1
console.log ( buf2.compare ( buf1 ) );
// Prints: 1
console.log ( buf2.compare ( buf3 ) );
// Prints: 1
console.log ( [ buf1, buf2, buf3 ].sort ( Buffer.compare ) );
// Prints: [ <Buffer 41 42 43>, <Buffer 41 42 43 44>, <Buffer 42 43 44> ]
// (This result is equal to: [buf1, buf3, buf2].)

//(3) [Buffer(3), Buffer(4), Buffer(3)]
// 0: Buffer(3) [65, 66, 67]
// 1: Buffer(4) [65, 66, 67, 68]
// 2: Buffer(3) [66, 67, 68]
debugger;