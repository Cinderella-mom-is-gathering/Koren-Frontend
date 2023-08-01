/**
 * WalletUtil.js
 * Wallet에 관련된 기능들 모아놓음
 */

import {Wallet} from "../near-wallet";
import logger from "./Logger";
import {Environment} from "./Environment";
import {Method} from "../apis/ApiInterface";
const CONTRACT_ADDRESS = Environment.CONTRACT_ADDRESS;
const wallet = new Wallet({createAccessKeyFor: CONTRACT_ADDRESS});
/**
 * Wallet 초기화
 * @returns {Promise<boolean>} 로그인 여부
 */
export const init = async () => {
    let isSignedIn = await wallet.startUp();
    logger.info("Wallet StartUp, isSignedIn : ",isSignedIn);
    return isSignedIn;
}

/**
 * 로그인 페이지로 이동
 */
export const signIn = () => {
    wallet.signIn();
}

/**
 * 로그아웃
 */
export const signOut = () => {
    wallet.signOut();
}

/**
 * contract 메서드를 호출합니다.
 * method와 args 만 전달된 경우 viewMethod가,
 * gas와 deposit 까지 전달된 경우 callMethod가 호출됩니다.
 * @param method
 * @param args
 * @param gas
 * @param deposit
 * @returns {Promise<*>}
 */
export const executeContractMethod = async (method,methodName,args,deposit) => {
    if (method === Method.CALL) {
        return await callMethod(method, args, deposit);
    } else {
        return await viewMethod(method, args);
    }
}
export const viewMethod = async (method,args) => {
    logger.debug("[컨트랙트 호출] Method:",method,"args: ",args);
    let response = await wallet.viewMethod({method: method, contractId: CONTRACT_ADDRESS, args: args});
    logger.debug("[컨트랙트 호출 결과] (",method,args,")  Response : ",response);
    return response;
}

export const callMethod = async (method,args,deposit) => {
    logger.debug("[컨트랙트 호출] Method: ",method,"args:",args,"deposit:",deposit);
    let response = await wallet.callMethod({CONTRACT_ADDRESS, method, args, gas, deposit});
    logger.debug("[컨트랙트 호출 결과] (",method,args,") Response :",response);
    return response;
}

/**
 * 사용자 ID 반환 메서드
 * @returns {null|string|*}
 */
export const getAccountId = () => {
    if(wallet.accountId === undefined) {
        throw Error('로그인이 되어있지 않은 상태입니다.');
    } else {
        return wallet.accountId;
    }
}






