const fs = require('fs');
const path = require('path');

const load = (path_dir ,file_name)=> {
    fs.readFile(path_, 'utf-8', (e, d) => {
        if (e) throw e;
        const path_to = path.join(__dirname, '../', 'Copy', 'copy.txt');
        console.log(`Read from ${path_}`);
        console.log(`Write to ${path_to}`);
        debugger;
        write(path_to, d);
    })
};
const write = (path, buf) => {
    fs.writeFile(path, buf, e => {
        if (e) throw e;
        console.log(`Write to ${path}`);
    })
};

const watch = path => {
    fs.watch(path, (event, filename) => {
        console.log({event, filename});
        load(path);
    })
};

const path_dir = 'nodejs.org_DOCS/Fs/Watch';
const file_name = 'From';
