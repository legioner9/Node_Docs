const Ex = require ( 'st_ex1' );
process.evBus = {};

// process prop
const elog_1 = Ex.SetLoggers.SetEventLoggers.EventLog_1;
process.elog_1 = elog_1;

// add Global
// add Object.prototype
const addToProtoObjIterator = Ex.SetGlobal.AddPrototipe.ToObject.Iterator;

const mWRS = Ex.SetStream.CombinStream.mWriteReadStream;
const mWRS_ = Ex.SetStream.CombinStream.mWriteReadStream;
const wrOn = Ex.SetStream.CombinStream.mWriteReadOn;
const wrOnce = Ex.SetStream.CombinStream.mWriteReadOnce;

const http0 = Ex.SetServers.SimpleHttp;

const singlAddEvent = Ex.SetAdd.PartOne.SinglAddEvent;
const singlAddOnceEvent = Ex.SetAdd.PartOne.SinglAddOnceEvent;
const SM = Ex.SetAdd.PartOne.SM;
const pipeLine = Ex.SetAdd.PartOne.PipeLine;
const reportProgress = Ex.SetAdd.PartOne.ReportProgress;
const pathToName = Ex.SetAdd.PartOne.PathToName;

const addEvBus = Ex.SetEvBus.AddEvBus;
const reesBus = Ex.SetEvBus.ReesBus;
const onBus = Ex.SetEvBus.OnBus;

const cashDecor = Ex.SetFunction.FuncDecor.CashDecor;
const curry = Ex.SetFunction.FuncDecor.Curry;
const cbTimeout = Ex.SetFunction.Cb.CbTimeout;

const analyseTemplate = Ex.SetString.TemplateString.AnalyseTemplate;
const sinteseTemplate = Ex.SetString.TemplateString.SinteseTemplate;
const sortUniqueContent = Ex.SetString.AnalysisToWord.SortUniqueContent;

module.exports = {

    addToProtoObjIterator,

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
    cbTimeout,

    addEvBus,
    reesBus,
    onBus,

    cashDecor,
    curry,

    analyseTemplate,
    sinteseTemplate,
    sortUniqueContent,
};