import { PutRequest } from "./apiUrl";

export const putFollowUnfollow = (url, id) => fetch(url + id, {
    method: 'PUT',
    headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
    }
}).then(response => {
    if (!response.ok) throw new Error(response.status);
});

export const putSocialLink = (ig, fb, twitter) => fetch(PutRequest.SocialLink, {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
    },
    body: JSON.stringify({
        ig: ig === '' ? null : ig,
        fb: fb === '' ? null : fb,
        twitter: twitter === '' ? null : twitter
    })
}).then((response) => {
    if (response.status !== 204) throw new Error(response.status);
});