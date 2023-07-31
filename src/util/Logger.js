import log from 'loglevel'
import {Environment} from "./Environment";

//debug, info, warn, error
const level = Environment.LOGGING_LEVEL;
//console.log("logging-level: "+level);
log.setLevel(level);
const logger = log.getLogger('App');
export default logger;