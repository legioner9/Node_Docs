const Event_list = require ( './index' );
const my_path = require ( 'path' );
const help = Event_list.help;
const event_list = new Event_list ();

event_list.onToConsole ();
event_list.emit ( 'toConsole', { data: 'd' } );

event_list.onToFile ( my_path.join ( __dirname, 'EventData' ), 'data_1' );
debugger;
event_list.emit ( 'toFile', { data: 'dd' } );
