import {callMethod, executeContractMethod, viewMethod} from "../util/WalletUtil";
import axios from "axios";
import logger from "../util/Logger";
import {executeMockContractMethod} from "./mock/mock";
import {Environment} from "../util/Environment";
import uuid from "uuid-random";
import { utils } from 'near-api-js';
import * as WalletUtil from '../util/WalletUtil';


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
export const countPosts = async () => {
    return await send("nft_total_supply");
}
export const getPosts = async (index, limit) => {
    if(index === undefined) index = 0;
    if(limit === undefined) limit = 10;
    return await send("nft_tokens",{index,limit});
}

export const getPostsByUser = async (accountId ,index, limit) => {
    if(index === undefined) index = 0;
    if(limit === undefined) limit = 10;

    const args = {
        account_id : accountId,
        index: index,
        limit: limit
    }
    return await send("nft_tokens_for_owner",args);
}
export const countMyPosts = async () => {
    return await send("nft_supply_for_owner");
}


export const getMyPosts = async (index, limit) => {
    if(index === undefined) index = 0;
    if(limit === undefined) limit = 10;

    const args = {
        account_id : WalletUtil.getAccountId(),
        index: index,
        limit: limit
    }
    return await send("nft_tokens_for_owner",args);
}

export const createPost = async (description, img) => {
    const tokenId = uuid();
    const args = {
        token_id: tokenId,
        metadata:    {
            description: description,
            img: img
        }
    };

    const deposit = utils.format.parseNearAmount(0.1).toString(); // 0.1NEAR를 deposit으로 설정

    return await send("nft_mint",args,deposit)
}
const send = async (method, args, deposit) => {
    if(connection === 'mock') {
        try{
            return executeMockContractMethod(method,args,deposit);
        } catch (error) {
            logger.warn("Mock 요청 과정에서 에러가 발생했습니다.");
            logger.warn(error);
        }
    } else if (connection === 'wallet') {
        try {
            return await executeContractMethod(method,args,deposit);
        } catch (error) {
            logger.error("Contract 호출 과정에서 에러가 발생했습니다.");
            logger.error(error);
        }
    } else {
        logger.error("REACT_APP_CONNECTION 설정을 확인해주세요");
    }
}