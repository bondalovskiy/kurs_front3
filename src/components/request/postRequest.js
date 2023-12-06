import { PostRequest } from "./apiUrl";

export const postCreatePlaylist = (range) => fetch(PostRequest.PlaylistCreate + range, {
    method: 'POST',
    headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
    },
}).then(async (response) => {
    let body = await response.json();
    if (response.status !== 201) throw new Error(response.status + '&' + body.message);
    return body;
});

export const postNotification = (name, mail, joinDate) => fetch(PostRequest.Notification, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
    },
    body: JSON.stringify({
        fullName: name,
        email: mail,
        date: joinDate
    })
}).then((response) => {
    if (response.status !== 204) throw new Error(response.status);
});

export const postPlaylistBattle = (id, playlist, playlistBattle) => fetch(PostRequest.PlaylistBattle + id, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
    },
    body: JSON.stringify({
        playlist: playlist,
        playlistBattle: playlistBattle
    })
}).then(async (response) => {
    let body = await response.json();
    if (!response.ok) throw new Error(response.status + '&' + body.message);
    return body;
});

export const postPlaylistAnalysis = (name, id) => fetch(PostRequest.PlaylistAnalysis, {
    method: 'POST',
    headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: name,
        id: id
    })
}).then(async (response) => {
    let body = await response.json();
    if (!response.ok) throw new Error(response.status + '&' + body.message);
    return body;
});

export const postLogout = () => fetch(PostRequest.Logout, {
    method: 'POST',
    headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
    }
}).then(response => {
    if (!response.ok) throw new Error(response.status);
});

export const postLocation = (longitude, latitude) => fetch(PostRequest.Location, {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('jwt'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        longitude: longitude,
        latitude: latitude
    })
}).then(response => {
    if (response.status !== 204) throw new Error(response.status);
});





