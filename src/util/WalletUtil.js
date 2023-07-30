/**
 * WalletUtil.js
 * Wallet에 관련된 기능들 모아놓음
 */

import {Wallet} from "../near-wallet";
import logger from "./Logger";
const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
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
 * 연결 테스트
 * 로그인 여부와 상관없이 동작함
 * @returns {Promise<any>} contract에서 설정한 메시지를 Promise로 반환
 */
export const greeting = async () => {
    const currentGreeting = await wallet.viewMethod({ method: 'get_greeting', contractId: CONTRACT_ADDRESS });
    return currentGreeting;
}

/**
 * 컨트랙트 메서드를 호출합니다.
 * @param method 함수명
 * @param args 함수에 전달할 파라미터
 * @returns {Promise<any>}
 */
export const viewMethod = async (method,args) => {
    logger.debug("[컨트랙트 호출] Method:",method,"args: ",args);
    try {
        let response = await wallet.viewMethod({method: method, contractId: CONTRACT_ADDRESS, args: args});
        logger.debug("[컨트랙트 호출 결과] (",method,args,")  Response : ",response);
        return response;
    } catch (error) {
        logger.error("[컨트랙트 호출 오류]",error);
    }
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






