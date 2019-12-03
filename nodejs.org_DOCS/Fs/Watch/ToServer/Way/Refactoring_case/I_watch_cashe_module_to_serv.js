'use strict';

const fs = require('fs');
const mod_path = require('path');
const serv = require(mod_path.join(__dirname, 'S_serv_cacheFs_1.js'));

const cashe = new Map();
const lib = mod_path.join(__dirname, '/modules');
console.log(lib);

serv(cashe);
debugger;