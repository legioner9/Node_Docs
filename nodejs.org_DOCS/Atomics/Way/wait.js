'use strict';

const shared_buffer = new SharedArrayBuffer(256);
const arr = new Int32Array(shared_buffer);
const threads = require('worker_threads');


setTimeout(() => {
    Atomics.store(arr, 0, 5);
    const noti = Atomics.notify(arr, 0, 1);
    console.log(w_1);
    debugger;
}, 100);

const w_1 = Atomics.wait(arr, 0, 0);