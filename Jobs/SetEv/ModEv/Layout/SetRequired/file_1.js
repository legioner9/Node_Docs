const Ini = require ( 'st_ini' );
Ini.addEvBus ( __filename );
const nf = Ini.pathToName ( __filename );
const self_ev = process.evBus[nf];
self_ev.on ( 'ConsLog', d => {
    console.log(` event 'ConsLog' from ${nf} d:: ${d}`)
});
