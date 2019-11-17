const cancelable = fn => {
    const wrapper = (...args) => {
        if (fn) return fn(...args);
    };
    wrapper.cancel = () => {
        fn = null;
    };
    return wrapper;
};

const fn = d => console.log(' d = ' + d);

const cancel_fn = cancelable(fn);

cancel_fn('first');
cancel_fn.cancel();
cancel_fn('second');// fn is kill into cancel_fn after cancel_fn.cancel()
