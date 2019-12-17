console.log ( 'File A is loading...' );

exports.done = false;
debugger;
const b = require ( './testB.js' );
console.log ( 'in testA, testB.done = ', b.done );
debugger;
exports.done = true;

console.log ( 'File A is done!' );