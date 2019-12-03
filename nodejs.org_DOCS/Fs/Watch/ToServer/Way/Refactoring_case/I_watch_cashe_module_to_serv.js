'use strict';

const mod_path = require('path');

const dir_path = __dirname;
const serv = require(mod_path.join(dir_path, 'S_serv_cacheFs_1.js'));
const getCache = require(mod_path.join(dir_path, 'L_watchFs_cache.js'));

const cache = getCache(dir_path);

serv(cache);
