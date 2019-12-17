const CreateConnect = function () {
    const a = 5;
    this.b = 'b';
    this.port = '127.0.0.1';
    this.connect = () => {
        console.log ( 'Connect :: ', { a }, this.b );
    };
    return a;
};

const p = new CreateConnect ().connect ();
const pp = CreateConnect ();

const madeConnect = function () {
    debugger;
    const ppp = new CreateConnect ();
    console.log ( 'Made is', ppp.connect () );
};

if ( module.parent ) {
    module.exports = CreateConnect;
}
else {
    madeConnect ();
}