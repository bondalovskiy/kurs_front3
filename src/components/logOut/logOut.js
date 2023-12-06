import { postLogout } from "../request/postRequest";

export const logOut = () => {
    postLogout();
    localStorage.clear();
    sessionStorage.clear();
}