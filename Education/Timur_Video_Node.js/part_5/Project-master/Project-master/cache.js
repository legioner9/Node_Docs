'use strict';

const lib1 = require('./lib/lib.js');
const libPath = require.resolve('./lib.js');
console.dir({ libPath });
delete require.cache[libPath];
const lib2 = require('./lib/lib.js');

if (lib1 === lib2) {
  console.log('Cache not reloaded');
} else {
  console.log('Cache reloaded');
}
