function CreateConnection () {
    this.port = '127.0.0.1';
    this.connect = () => {
        console.log ( 'Connection established!' );
    };
}

const connector = new CreateConnection ();

debugger;

function testConnection () {
    console.log ( 'Test connection...' );
    new CreateConnection ().connect ();
}

// проверяем является ли модуль подключаемым или запускаемым
// если модуль подключается, мы возвращаем функцию, если модуль запускается, устанавливаем тестовое соединение
if ( module.parent ) {
    module.exports = CreateConnection;
}
else {
    testConnection ();
}