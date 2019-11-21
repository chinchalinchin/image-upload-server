module.exports = {
    log: log,
    warn: warn,
    getCurrentTime: getCurrentTime,
    getCurrentDate: getCurrentDate,
    getDebugMiddleware: getDebugMiddleware
}

const queryString = require('query-string')

function log(msg, route){
    const now = new Date().toLocaleTimeString();
    console.log(`app.js: ${now}: ${route}: ${msg}`);
};

function warn(msg, route){
    const now = new Date().toLocaleTimeString();
    console.log(`!!! app.js: ${now}: ${route}: ${msg} !!!`);
}

function getCurrentTime(){
    return Date().toLocaleTimeString()
}

function getDebugMiddleware(debug){
    return function(req, res, next){
        if(debug){ 
            log(`${req.url}`, 'DEBUGGER: Incoming Request');
            incomingQuery = queryString.parseUrl(req.url).query
            if(incomingQuery){
                Object.keys(incomingQuery).forEach((key)=>{
                    log(`Query Param {"${key}": "${incomingQuery[key]}"}`, 'DEBUGGER: Incoming Request');
                })
            }
        }
        return next();
    }
}

function getCurrentDate(){
    var date = new Date();
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    newdate = `${year}`.concat("-")
    if(month<10){ newdate = newdate.concat("0").concat(month).concat("-"); }
    else{ newdate = newdate.concat(month).concat("-"); }
    if(day<10){ newdate = newdate.concat("0").concat(day); }
    else{ newdate = newdate.concat(day)}
    return newdate;
}