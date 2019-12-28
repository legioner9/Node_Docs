const emt = new ( require ( 'events' ) ).EventEmitter;

emt.on ( 'newListener', ( event, listener ) => {

    console.log ( { event } );
} );

emt.on ( 'removeListener', ( event, listener ) => {

    console.log ( { event } );
} );

emt.on ( 'even', () => console.log ( 'A' ) );
emt.on ( 'even', () => console.log ( 'B' ) );
const ev = emt._events.even; // single events_arr -- even without even[0];

//remove index 0
function removeIndexNull ( emitter, even) {
    let rem_event;
    if ( typeof emitter._events[even][0] === 'function' ) rem_event = emitter._events[even][0];
    else rem_event = emitter._events[even];
    emitter.removeListener ( even, rem_event );
}

debugger;
removeIndexNull ( emt, 'even');
