console.log('Main module is starting.');

const a = require('./testA.js');
const b = require('./testB.js');

console.log('in main, testA.done=', a.done, ' testB.done=' , b.done);