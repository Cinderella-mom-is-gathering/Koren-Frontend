import {
    callMethod,
    executeContractMethod,
    viewMethod,
} from "../util/WalletUtil";
import axios from "axios";
import logger from "../util/Logger";
import {executeMockContractMethod} from "./mock/mock";
import {Environment} from "../util/Environment";
import uuid from "uuid-random";
import {utils} from "near-api-js";
import * as WalletUtil from "../util/WalletUtil";

const connection = Environment.CONNECTION;

//log
logger.debug("Connection Level:", connection);

/**
 * Greeting
 * 테스트 메서드
 * @returns {Promise<any|undefined>}
 */

export const Method = {
    VIEW: "view",
    CALL: "call",
};
export const greeting = async () => {
    return await send(Method.VIEW, "get_greeting");
};

export const getMyAccountId = () => {
    return WalletUtil.getAccountId();
}

export const getPostByToken = async (tokenId) => {
    const args = {
        token_id: tokenId
    };
    return await send(Method.VIEW, "nft_tokena", args);
}

export const getLatestPostByUser = async (accountId) => {
  let count = await countPostsByUser(accountId);

  return await getPostsByUser(accountId,count-1,1);
}
export const countPosts = async () => {
    return await send(Method.VIEW, "nft_total_supply");
};
export const getPosts = async (index, limit) => {
    if (index === undefined) index = 0;
    if (limit === undefined) limit = 10;
    return await send(Method.VIEW, "nft_tokens", {index, limit});
};

export const getPostsByUser = async (accountId, index, limit) => {
    if (index === undefined) index = 0;
    if (limit === undefined) limit = 10;

    const args = {
        account_id: accountId,
        index: index,
        limit: limit,
    };
    return await send(Method.VIEW, "nft_tokens_for_owner", args);
};

export const countPostsByUser = async (accountId) => {
    const args = {
        account_id: accountId,
    };
    return await send(Method.VIEW, "nft_supply_for_owner", args);
};
export const countMyPosts = async () => {
    const args = {
        account_id: WalletUtil.getAccountId(),
    };
    return await send(Method.VIEW, "nft_supply_for_owner", args);
};

export const getMyAdRequest = async () => {
    return await send(Method.CALL, "view_requested_ads");
};

/**
 * Post의 tokenId와 imgArr을 전달하면 해당 Post에 imgArr을 광고로 붙여달라는 요청을 전송합니다.
 * @param postTokenId
 * @param imgArr
 * @returns {Promise<string|undefined|*>}
 */
export const createAdRequest = async (postTokenId, imgArr) => {
    const deposit = utils.format.parseNearAmount(0.1).toString();
    const args = {
        token_id: postTokenId,
        img: imgArr,
    };

    return await send(Method.CALL, "request_ads", args, deposit);
};

export const getMyPosts = async (index, limit) => {
    if (index === undefined) index = 0;
    if (limit === undefined) limit = 10;

    const args = {
        account_id: WalletUtil.getAccountId(),
        index: index,
        limit: limit,
    };
    return await send(Method.VIEW, "nft_tokens_for_owner", args);
};

export const createPost = async (description, img) => {
    const tokenId = uuid();
    const args = {
        token_id: tokenId,
        metadata: {
            description: description,
            img: img,
        },
    };

    const deposit = utils.format.parseNearAmount("0.1"); // 0.1NEAR를 deposit으로 설정

    return await send(Method.CALL, "nft_mint", args, deposit);
};

const send = async (method, methodName, args, deposit) => {
    if (connection === "mock") {
        try {
            return executeMockContractMethod(method, methodName, args, deposit);
        } catch (error) {
            logger.warn("Mock 요청 과정에서 에러가 발생했습니다.");
            logger.warn(error);
        }
    } else if (connection === "wallet") {
        try {
            return await executeContractMethod(method, methodName, args, deposit);
        } catch (error) {
            logger.error("Contract 호출 과정에서 에러가 발생했습니다.");
            logger.error(error);
        }
    } else {
        logger.error("REACT_APP_CONNECTION 설정을 확인해주세요");
    }
};
