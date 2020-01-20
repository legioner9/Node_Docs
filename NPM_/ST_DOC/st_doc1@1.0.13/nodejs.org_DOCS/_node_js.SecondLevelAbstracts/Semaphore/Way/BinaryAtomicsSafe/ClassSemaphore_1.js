const LOCK = 0;
const UNLOCK = 1;

class BinarySMPH {
    constructor ( shared, offset = 0, init = false ) {
        this.lock = new Int8Array ( shared, offset, 1 );
        if ( init ) this.lock[0] = UNLOCK;
    }

    enter () {
        while ( this.lock[0] === LOCK ) ;
        this.lock[0] = LOCK;
    }

    leave () {
        if ( this.lock[0] === UNLOCK ) {
            throw new Error ( 'Cannot leave unlocked' +
                                  ' BinarySMPH' );
        }
        this.lock[0] = UNLOCK;
    }
}

class CountSMPH {
    constructor ( shared, offset = 0, initial ) {
        this.count = new Int32Array ( shared, offset, 1 );
        if ( typeof initial === 'number' ) {
            this.count[0] = initial;
        }
    }

    enter () {
        while ( this.count[0] === 0 ) ;
        this.count[0]--;
    }

    leave () {
        this.count[0]++;
    }
}

class CallbackQueueSMPH {
    constructor ( shared, offset = 0, initial ) {
        this.count = new Int32Array ( shared, offset, 1 );
        if ( typeof initial === 'number' ) {
            this.count[0] = initial;
        }
        this.queue = [];
    }

    enter ( callback ) {
        if ( this.count[0] > 0 ) {
            this.count[0]--;
            setTimeout ( callback, 0 );
        }
        else {
            this.queue.push ( callback );
        }
    }

    leave () {
        this.count[0]++;
        if ( this.queue.length > 0 ) {
            const cb = this.queue.shift ();
            this.count[0]--;
            setTimeout ( cb, 0 );
        }

    }
}

class CountAtomicsSMPH {
    constructor ( shared, offset = 0, initial ) {
        this.count = new Int32Array ( shared, offset, 1 );
        if ( typeof initial === 'number' ) {
            Atomics.store ( this.count, 0, initial );
        }
    }

    enter ( callback ) {
        Atomics.wait ( this.count, 0, 0 );
        Atomics.sub ( this.count, 0, 1 );
        setTimeout ( callback, 0 );
    }

    leave () {
        Atomics.add ( this.count, 0, 1 );
        Atomics.notify ( this.count, 0, 1 );
    }
}

class CountAtomics_safeSMPH {
    constructor ( shared, offset = 0, initial ) {
        this.count = new Int32Array ( shared, offset, 1 );
        if ( typeof initial === 'number' ) {
            Atomics.store ( this.count, 0, initial );
        }
    }

    enter () {
        while ( true ) {
            Atomics.wait ( this.count, 0, 0 );
            const n = Atomics.load ( this.count, 0 );
            if ( n > 0 ) {
                const prev = Atomics.compareExchange ( this.count, 0, n, n - 1 );
                if ( prev === n ) return;
            }
        }
    }

    leave () {
        Atomics.add ( this.count, 0, 1 );
        Atomics.notify ( this.count, 0, 1 );
    }
}

class BinaryAtomicsSafeSMPH {
    constructor ( shared, offset = 0, init = false ) {
        this.lock = new Int32Array ( shared, offset, 1 );
        if ( init ) Atomics.store ( this.lock, 0, UNLOCK );
    }

    enter () {
        let prev = Atomics.exchange ( this.lock, 0, LOCK );
        while ( prev === LOCK ) {
            Atomics.wait ( this.lock, 0, LOCK );
            prev = Atomics.exchange ( this.lock, 0, LOCK );
        }
    }

    leave () {
        if ( Atomics.load ( this.lock, 0 ) === UNLOCK ) {
            throw new Error ( 'Cannot leave unlocked' +
                                  ' BinaryAtomicsSMPH' );
        }
        Atomics.store ( this.lock, 0, UNLOCK );
        Atomics.notify ( this.lock, 0, 1 );
    }
}

module.exports = {
    BinarySMPH,
    CountSMPH,
    CallbackQueueSMPH,
    CountAtomicsSMPH,
    CountAtomics_safeSMPH,
    BinaryAtomicsSafeSMPH,
};