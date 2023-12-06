export const deleteRequest = (url) => fetch(url, {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
    }
}).then(response => {
    if (response.status !== 204) throw new Error(response.status);
});