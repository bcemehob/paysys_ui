import useSWR from "swr";
const headers =  {'Content-Type': 'application/json'};
const params = {headers: headers};
const fetcher = async url => {
    const res = await fetch(url, params);
    return res.json();
}

const apiCommand = async params  => {

    const res = await fetch(params.url, {
        method: params.method,
        headers: headers,
        body: JSON.stringify(params.reqBody) // body data type must match "Content-Type" header
    });
    let respObj = await res.json();
    params.callback && params.callback(respObj);
    return respObj; // parses JSON
}

const createWallet = async (accountId, callback) => {
    return apiCommand( {
        reqBody: {accountId:accountId, balance: 0},
        callback: callback,
        url: api.urls.create,
        method: 'PUT'
    })
}
const send = async (remitterId, receiverId, amount, callback) => {
    return apiCommand( {
        reqBody: {receiver:receiverId, remitter: remitterId, amount: amount},
        callback: callback,
        url: api.urls.send,
        method: 'POST'
    })
}

const transact = (walletId, amount, callback, url) => {
    return apiCommand( {
        reqBody: {id:walletId, balance: amount},
        callback: callback,
        url: url,
        method: 'POST'
    })
}

const topUp = async (walletId, amount, callback ) => {
    return transact(walletId, amount, callback, api.urls.topUp)
}

const withdraw = (walletId, amount, callback ) => {
    return transact(walletId, amount, callback, api.urls.withdraw)
}

const api = {
    fetcher: fetcher,
    params: params,
    createWallet: createWallet,
    topUp: topUp,
    withdraw: withdraw,
    send: send,
    getData: (url) => {
        const {data, mutate, isValidating} = useSWR(url, fetcher)
        return {data, mutate, isValidating}
    },
    urls: {
        walletsList: '/api/v1/wallet/list',
        getAccount: '/api/v1/account/get',
        create: '/api/v1/wallet/new',
        withdraw: '/api/v1/wallet/withdraw',
        topUp: '/api/v1/wallet/topup',
        send: '/api/v1/wallet/send',
        balance: '/api/v1/wallet/balance/'
    }
};

export default api;
