const vm = require('vm');
const fs = require('fs');
const path = require('path');

const x = 1;

const context = {
    module: {}, console,
    require: name => {
        if (name === 'https') {
            console.log('Module https is restricted');
            return null;
        }
        return require(name);
    },
    x: 2
};

// context.global = context;
vm.createContext(context);

fs.readFile(path.join(__dirname, 'code_3.js'), (e, code) => {
    if (e) throw e;

    console.log({vmx: context.x, vmy: context.y});//{vmx: 2, vmy: undefined}
    vm.runInContext(code, context);// sync calculation
    console.log({vmx: context.x, vmy: context.y});//{vmx: 42, vmy: undefined}

});

// y = undefined
console.log({x}); // x = 1
