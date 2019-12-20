const fs = require ( 'fs' );
const zlib = require ( 'zlib' );
const file = process.argv[2];

fs.createReadStream ( __dirname + '\\src\\+' + file + '.txt')
    .pipe ( zlib.createGzip () )
    .pipe ( fs.createWriteStream ( __dirname + '\\src\\+' + file + '.gz' ) );