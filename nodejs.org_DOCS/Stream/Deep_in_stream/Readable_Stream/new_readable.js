const {Readable, Writable} = require('stream');

const rs = new Readable();


rs.on('data', (e, d) => {
    if (e) throw e;
    console.log({d});
});

debugger;



