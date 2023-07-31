import {callMethod, executeContractMethod, viewMethod} from "../util/WalletUtil";
import axios from "axios";
import logger from "../util/Logger";
import {executeMockContractMethod} from "./mock/mock";
import {Environment} from "../util/Environment";

const connection = Environment.CONNECTION;

//log
logger.debug("Connection Level:",connection);

/**
 * Greeting
 * 테스트 메서드
 * @returns {Promise<any|undefined>}
 */
export const greeting = async () => {
    return await send("get_greeting");
}

const send = async (method, args, gas, deposit) => {
    if(connection === 'mock') {
        try{
            return executeMockContractMethod(method,args,gas,deposit);
        } catch (error) {
            logger.warn("Mock 요청 과정에서 에러가 발생했습니다.");
            logger.warn(error);
        }
    } else if (connection === 'wallet') {
        try {
            return await executeContractMethod(method,args,gas,deposit);
        } catch (error) {
            logger.error("Contract 호출 과정에서 에러가 발생했습니다.");
            logger.error(error);
        }
    } else {
        logger.error("REACT_APP_CONNECTION 설정을 확인해주세요");
    }
}