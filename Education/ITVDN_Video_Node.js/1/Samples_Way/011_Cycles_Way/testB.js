console.log('File B is loading...');

exports.done = false;
debugger;
const a = require('./testA.js');
console.log('in testB, testA.done = ', a.done);
debugger;
exports.done = true;

console.log('File B is done!');