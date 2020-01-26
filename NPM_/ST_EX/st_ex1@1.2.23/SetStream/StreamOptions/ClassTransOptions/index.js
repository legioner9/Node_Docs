const readDef = function ( size, callback ) {
    console.log ( 'TC write', { size } );
    callback ();
};

const writeDef = function ( chunk, encoding, callback ) {
    console.log ( 'TC write', { chunk, encoding } );
    callback ();
};

const transformDef = function ( chunk, encoding, callback ) {
    console.log ( 'TC write', { chunk, encoding } );
    callback ();
};

const writevDef = function ( chunks, callback ) {
    console.log ( 'TC writev', { chunks } );
    callback ();
};

const destroyDef = function ( error, callback ) {
    console.log ( 'TC destroy', { error } );
    callback ();
};

const finalDef = function ( callback ) {
    console.log ( 'TC final' );
    callback ();
};

const flushDef = function ( callback ) {
    console.log ( 'TC final' );
    callback ();
};

class ClassTransOptions {
    constructor ( ...args
                  // 1 allowHalfOpen = true,
                  // 2 readableObjectMode = false,
                  // 3 writableObjectMode = false,
                  // 4 readableHighWaterMark = 999,
                  // 5 writableHighWaterMark = 999,
                  // 6 writableCorked = 999,
                  // 7 read = readDef,
                  // 8 write = writeDef,
                  // 9 writev = writevDef,
                  // 10 final = finalDef,
                  // 11 destroy = destroyDef,
                  // 12 transform = transformDef,
                  // 13 flush = flushDef,
    ) {
        const arr_args = Array ( 13 );
        for ( let i = 0 ; i < 12 ; i++ ) {
            for ( const item of args ) {
                if ( item[0] === i ) arr_args[i] = item[1];
            }
        }
        // 1 allowHalfOpen = true,
        this.allowHalfOpen = arr_args[0] || true;
        // 2 readableObjectMode = false,
        this.readableObjectMode = arr_args[1] || false;
        // 3 writableObjectMode = false,
        this.writableObjectMode = arr_args[2] || false;
        // 4 readableHighWaterMark = 999,
        this.readableHighWaterMark = arr_args[3] || 999;
        // 5 writableHighWaterMark = 999,
        this.writableHighWaterMark = arr_args[4] || 999;
        // 6 writableCorked = 999,
        this.writableCorked = arr_args[5] || 999;
        // 7 read = readDef,
        this.read = arr_args[6] || readDef;
        // 8 write = writeDef,
        this.write = arr_args[7] || writeDef;
        // 9 writev = writevDef,
        this.writev = arr_args[8] || writevDef;
        // 10 final = finalDef,
        this.final = arr_args[9] || finalDef;
        // 11 destroy = destroyDef,
        this.destroy = arr_args[10] || destroyDef;
        // 12 transform = transformDef,
        this.transform = arr_args[11] || transformDef;
        // 13 flush = flushDef,
        this.flush = arr_args[12] || flushDef;

        const arr_res = Array ( 10 );

        // 1 allowHalfOpen = true,
        arr_res[0] = 'allowHalfOpen : ' + this.allowHalfOpen;
        // 2 readableObjectMode = false,
        arr_res[1] = 'readableObjectMode : ' + this.readableObjectMode;
        // 3 writableObjectMode = false,
        arr_res[2] = 'writableObjectMode : ' + this.writableObjectMode;
        // 4 readableHighWaterMark = 999,
        arr_res[3] = 'readableHighWaterMark : ' + this.readableHighWaterMark;
        // 5 writableHighWaterMark = 999,
        arr_res[4] = 'writableHighWaterMark : ' + this.writableHighWaterMark;
        // 6 writableCorked = 999,
        arr_res[5] = 'writableCorked : ' + this.writableCorked;
        // 7 read = readDef,
        arr_res[6] = 'read.name : ' + this.read.name;
        // 8 write = writeDef,
        arr_res[7] = 'write.name : ' + this.write.name;
        // 9 writev = writevDef,
        arr_res[8] = 'writev.name : ' + this.writev.name;
        // 10 writev = finalDef,
        arr_res[9] = 'writev.name : ' + this.writev.name;
        // 11 destroy = destroyDef,
        arr_res[10] = 'destroy.name : ' + this.destroy.name;
        // 12 transform = transformDef,
        arr_res[11] = 'transform.name : ' + this.transform.name;
        // 13 flush = flushDef,
        arr_res[12] = 'flush.name : ' + this.flush.name;


        console.log ( 'TDOpt : ', arr_res );
    }
}

ClassTransOptions.help = `// 1 allowHalfOpen = true,
                  // 2 readableObjectMode = false,
                  // 3 writableObjectMode = false,
                  // 4 readableHighWaterMark = 999,
                  // 5 writableHighWaterMark = 999,
                  // 6 writableCorked = 999,
                  // 7 read = readDef,
                  // 8 write = writeDef,
                  // 9 writev = writevDef,
                  // 10 final = finalDef,
                  // 11 destroy = destroyDef,
                  // 12 transform = transformDef,
                  // 13 flush = flushDef,`;

ClassTransOptions.call = () => console.log ( ClassTransOptions );

module.exports = ClassTransOptions;