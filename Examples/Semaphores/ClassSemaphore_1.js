const LOCK = 0;
const UNLOCK = 1;

class BinariSMPH {
    constructor(shared, offset = 0, init = false) {
        this.lock = new Int8Array(shared, offset, 1);
        if (init) this.lock[0] = UNLOCK;
    }

    enter() {
        while (this.lock[0] === LOCK) ;
        this.lock[0] = LOCK;
    }

    leave() {
        if (this.lock[0] === UNLOCK) {
            throw new Error('Cannot leave unlocked' +
                ' BinariSMPH');
        }
        this.lock[0] = UNLOCK;
    }
}

module.exports = {
    BinariSMPH,
};