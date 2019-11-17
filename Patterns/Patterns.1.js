/* TODO: PTR add lifetime to any func  */
function t_f(ms, cb) {
    let tm = setTimeout(() => {
        if (tm) console.log('Time over (((' + tm);
        tm = null;
    }, ms);
    return (...args) => {//return t_f(ms, cb)(...args) before ms time
        if (tm) {
            tm = null;
            cb(...args);
        }
    }
}

const fn = d => console.log(' d = ' + d);

const fn100 = t_f(100, fn);
const fn200 = t_f(200, fn);

setTimeout(() => {
    fn100('first');
    fn200('second');
}, 150);

