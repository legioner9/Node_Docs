require ( 'st_ini' );



const e = 'ddd';
const help = process.elog_1.help;
process.elog_1.emit ( 'toConsole', e );
process.elog_1.emit ( 'logToFile+' , [__dirname,'eLogs.txt',e]);
process.elog_1.emit ( 'logToFile+' , [__dirname,'eLogs.txt',{e}]);
process.elog_1.emit ( 'logToFile+' , [__dirname,'eLogs.txt',{e}]);
process.elog_1.emit ( 'logToFile+' , [__dirname,'eLogs.txt',{e}]);
process.elog_1.emit ( 'logToFile=' , [__dirname,'eLogs.txt']);
process.elog_1.emit ( 'logToFile+' , [__dirname,'eLogs.txt',{e}]);
process.elog_1.emit ( 'logToFile=' , [__dirname,'eLogs.txt']);
debugger;
