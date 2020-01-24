const Ex = require ( 'st_ex1' );
process.evBus = {};

// process prop
const elog_1 = Ex.SetLoggers.SetEventLoggers.EventLog_1;
process.elog_1 = elog_1;

const mWRS = Ex.SetStream.CombinStream.mWriteReadStream;
const mWRS_ = Ex.SetStream.CombinStream.mWriteReadStream;
const wrOn = Ex.SetStream.CombinStream.mWriteReadOn;
const wrOnce = Ex.SetStream.CombinStream.mWriteReadOnce;

const http0 = Ex.SetServers.SimpleHttp;

const singlAddEvent = Ex.SetAdd.PartOne.singlAddEvent;
const singlAddOnceEvent = Ex.SetAdd.PartOne.singlAddOnceEvent;
const SM = Ex.SetAdd.PartOne.SM;
const pipeLine = Ex.SetAdd.PartOne.pipeLine;
const reportProgress = Ex.SetAdd.PartOne.reportProgress;
const pathToName = Ex.SetAdd.PathToName;

const addEvBus = Ex.SetEvBus.AddEvBus;
const reesBus = Ex.SetEvBus.ReesBus;
const onBus = Ex.SetEvBus.OnBus;

const cashDecor = Ex.SetFunction.FuncDecor.CashDecor;

module.exports = {
    mWRS,
    mWRS_,
    wrOn,
    wrOnce,

    http0,

    singlAddEvent,
    singlAddOnceEvent,
    SM,
    pipeLine,
    reportProgress,
    pathToName,

    addEvBus,
    reesBus,
    onBus,

    cashDecor,
};