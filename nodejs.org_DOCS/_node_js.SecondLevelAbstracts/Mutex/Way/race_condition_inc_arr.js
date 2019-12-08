'use strict';

const threads = require('worker_threads');
const mod_path = require('path');
const {isMainThread, Worker, workerData, threadId} = threads;

const shared_buffer = new SharedArrayBuffer(32);
const arr = new Int32Array(shared_buffer);
