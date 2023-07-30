
export const executeMockContractMethod = (method, args, gas, deposit) => {
    if(method === 'get_greeting')
        return "흠...";
    else
        throw Error("정의되지 않은 method입니다.");
}