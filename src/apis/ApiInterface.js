import {viewMethod} from "../util/WalletUtil";
import axios from "axios";
import logger from "../util/Logger";

let connection = process.env.REACT_APP_CONNECTION || 'wallet';
let mockServerHost = process.env.REACT_APP_MOCK_SERVER_HOST || 'localhost';
let mockServerPort = process.env.REACT_APP_MOCK_SERVER_PORT || '4000';
logger.debug("Connection Level:",connection);
logger.debug("Mocking Server Info:",mockServerHost,mockServerPort);
export const greeting = async () => {
    return await send("get_greeting");
}

const send = async (method, args) => {
    if(connection === 'mock') {
        try{
            let axiosResponse = await axios.get("http://"+mockServerHost+":"+mockServerPort+"/"+method);
            return axiosResponse.data;
        } catch (error) {
            logger.warn("Mock 요청 과정에서 에러가 발생했습니다.");
        }

    } else if (connection === 'wallet') {
        return await viewMethod(method,args);
    } else {
        logger.error("REACT_APP_CONNECTION 설정을 확인해주세요");
    }
}