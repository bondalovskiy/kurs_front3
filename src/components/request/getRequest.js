import { GetRequest } from "./apiUrl";

export const getRequest = (url) =>  fetch(url, {
    method: 'GET',
    headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
    }
}).then(async (response) => {
    let body = await response.json();
    if (!response.ok) throw new Error(response.status + '&' + body.message);
    return body;
});

export const getRequestParam = (url, param) =>  fetch(url + param, {
    method: 'GET',
    headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
    }
}).then(async (response) => {
    let body = await response.json();
    if (!response.ok) throw new Error(response.status + '&' + body.message);
    return body;
});


export const getBetaUser = (username, email) =>  fetch(GetRequest.BetaJoin + username + '&email=' + email, {
    method: 'GET'
}).then(async (response) => {
    let body = await response.json();
    if (response.status !== 204) throw new Error(response.status + '&' + body.message);
    return body;
});