import log from 'loglevel'

//debug, info, warn, error
const level = process.env.REACT_APP_LOGGING_LEVEL || "info";
//console.log("logging-level: "+level);
log.setLevel(level);
const logger = log.getLogger('App');
export default logger;