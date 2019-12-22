const my_url = require ( 'url' );
const { URL, URLSearchParams, Url, domainToASCII, domainToUnicode, fileURLToPath, format, parse, pathToFileURL, resolve } = require ( 'url' );

const path = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash';

const myURL = new URL ( 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash' );
const {
    hash,
    host,
    hostnamehref,
    origin,
    password,
    pathname,
    port,
    protocol,
    search,
    searchParams,
    username,
} = myURL;

const u0 = new URL ( '/foo', 'https://example.org/' ); //u0s: "https://example.org/foo"
const u0s = u0.toString ();
debugger;
const u0_1 = new URL ( 'https://測試' );
const u0_1s = u0_1.toString ();

const u0_2 = new URL ( 'foo:Example.com/', 'https://example.org/' );
const u0_2s = u0_2.toString ();

const u1 = new URLSearchParams ( [
                                     [ 'user', 'abc' ],
                                     [ 'query', 'first' ],
                                     [ 'query', 'second' ]
                                 ] );
console.log ( params.toString () );
// Prints 'user=abc&query=first&query=second'
const u1_1 = new URLSearchParams ( 'foo=bar&foo=baz' );
for ( const name of params.keys () ) {
    console.log ( name );
}
// Prints:
//   foo
//   foo
const u1_2 = new URLSearchParams ( path );

const u2 = Url ( path );

const u3 = fileURLToPath ( 'file:///C:/path/' );       // Correct:   C:\path\ (Windows)
const u3_1 = fileURLToPath ( 'file://nas/foo.txt' );     // Correct:   \\nas\foo.txt (Windows)
const u7 = pathToFileURL ( __filename );          // Correct:   file:///C:/... (Windows)

const u4 = format ( myURL, {
    fragment: false,
    unicode: true,
    auth: false
} );
const u5 = format ( {
                        protocol: 'https',
                        hostname: 'example.com',
                        pathname: '/some/path',
                        query: {
                            page: 1,
                            format: 'json'
                        }
                    } );

// => 'https://example.com/some/path?page=1&format=json';
const u6 = parse ( myURL );

const u8 = resolve ( '/one/two/three', 'four' );         // '/one/two/four'
const u9 = resolve ( 'http://example.com/', '/one' );// 'http://example.com/one';

const u10 = domainToASCII ( 'español.com' );
const u11 = domainToUnicode ( 'xn--espaol-zwa.com' );
const u12 = domainToUnicode ( u10 );
debugger;