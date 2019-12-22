const my_path = require ( 'path' );
const ServCacheModulesOfMethods = require ( './Ingx/ServCacheModulesOfMethods/I_getCache_startServ.js' );

const { SuServer, SuHandServ } = require ( my_path.join ( __dirname, 'Ingx', 'Servers' ) );

module.exports = {
    SuServer,
    SuHandServ,
    ServCacheModulesOfMethods,
};