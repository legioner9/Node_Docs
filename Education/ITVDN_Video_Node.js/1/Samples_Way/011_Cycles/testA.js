console.log('File A is loading...');

exports.done = false;

const b = require('./testB.js');
console.log('in testA, testB.done = ', b.done);

exports.done = true;

console.log('File A is done!');