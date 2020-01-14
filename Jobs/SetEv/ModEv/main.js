const Ini = require ( 'st_ini' );
require ( './Layout/SetRequired/requiring' );

// function ReesBus () {
//     const evB = process.evBus;
//
//     const InBus = {};
//     for ( const key in evB ) {
//         InBus[key] = evB[key]._events;
//     }
//     const BusMod = [];
//     for ( const key in evB ) {
//         BusMod.push ( key );
//     }
//
//     const EvNames = [];
//     for ( const key in evB ) {
//         const eke = evB[key]._events;
//         const arr_e = [];
//         for ( const jey in eke ) {
//             arr_e.push ( jey );
//         }
//         EvNames.push ( arr_e );
//     }
//     return { BusMod, EvNames, InBus };
// }
//
// const rb = ReesBus ();

// const rb = Ini.reesBus ();
// debugger;
// const a = process.evBus[rb.BusMod[0]];
// const b = rb.EvNames[0][0];
// a.emit ( b, 'Mess from mane.js ' );

// const OnBuss = function ( codeBus, d ) {
//
//     const Ini = require ( 'st_ini' );
//     const rb = Ini.reesBus ();
//
//     try {
//         if ( !( codeBus instanceof Array ) && ( codeBus.length !== 2 ) ) throw Error ( `OnBuss args is not Array(2) :: ${ codeBus }` );
//         if ( ( typeof codeBus[0] !== 'number' ) && ( typeof codeBus[1] !== 'number' ) ) new Error ( `${ codeBus[0] } or ${ codeBus[1] } is not number` );
//         const mod = codeBus[0];
//         const nomEv = codeBus[1];
//         debugger;
//         if ( !( rb.BusMod[mod] ) ) throw Error ( `Mod arg ${ mod } not valid` );
//         if ( !( process.evBus[rb.BusMod[mod]] ) ) throw Error ( `First arg ${ codeBus[0] } not valid` );
//         if ( !( rb.EvNames[mod][nomEv] ) ) throw Error ( `Second arg ${ codeBus[1] } not valid` );
//
//         const a = process.evBus[rb.BusMod[mod]];
//         const b = rb.EvNames[mod][nomEv];
//
//         a.emit ( b, d );
//     }
//     catch (e) {
//         console.log ('OnBuss',{e});
//     }
// };
//
// OnBuss ( [ 0, 1 ], 'Mess from mane.js ' );
const re = Ini.reesBus ();
debugger;
Ini.onBus ( [ 0, 0 ], 'Mess from mane.js !' );
