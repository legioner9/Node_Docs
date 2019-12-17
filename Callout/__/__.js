( function () {

    const p = {
        writable: true,
    };

    Object.defineProperties ( Object.prototype,
                              {
                                  'diip': p,
                              } );

    Object.prototype.dipDir = function () {
        const result = [];
        module.paths.map ( item => {
            const arr = item.split ( '\\' );
            arr.pop ();
            result.push ( arr.join ( '\\' ) );
        } );
        return result;
    };
} ) ();