const def = {};

def.e_log_exit = function (e) {
    if (e) {
        console.log(e.message);
        process.exit(0);
    }
};

module.exports = def;