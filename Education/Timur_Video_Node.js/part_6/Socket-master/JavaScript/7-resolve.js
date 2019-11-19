'use strict';

const dns = require('dns');
const util = require('util');

dns.resolve('how.programming.works', (err, data) => {
    if (err) {
        if (err.code === 'ECONNREFUSED') {
            console.log('No internet connection');
        } else {
            console.log('Web is dead');
        }
    }
    console.log({data});
    debugger;
});

dns.resolve('github.com', (err, data) => {
    if (err) throw err;
    console.log({data});
    debugger;
});
