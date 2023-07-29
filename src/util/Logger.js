import log from 'loglevel'

//debug, info, warn, error
let level = process.env.REACT_APP_LOGGING_LEVEL;
level = level === undefined ? "info" : level;
//console.log("logging-level: "+level);
log.setLevel(level);
const logger = log.getLogger('App');
export default logger;