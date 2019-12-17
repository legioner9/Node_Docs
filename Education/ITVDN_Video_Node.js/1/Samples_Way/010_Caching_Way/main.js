// В node.js при первом подключении модуля происходит выполнение кода в подключаемом модуле, и модуль помещается в кеш
// при повторном подключени того же модуля, среда проверяет путь к подключаемому файлу, если в кеше уже есть такой путь, то возвразается уже существующий объект

let user = require ( './cache' );//user: {fname: "Ivan", lname: "Ivanov", age: 25, sayHello: ƒ}
debugger;
user.sayHello ();

require ( './sample' );//user: {fname: "Sergey", lname: "Ivanov", age: 30, sayHello: ƒ}
debugger;
console.log ( 'Clear cash ./cache' );
const caches = require.cache;
delete caches['D:\\Node_Projects v.2\\Node_Docs\\Education\\ITVDN_Video_Node.js\\1\\Samples_Way\\010_Caching\\cache.js'];
user = require ( './cache' );//user: {fname: "Ivan", lname: "Ivanov", age: 25, sayHello: ƒ}
user.sayHello ();
debugger;

