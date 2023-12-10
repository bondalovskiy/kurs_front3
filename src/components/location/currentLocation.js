import { postLocation } from "../request/postRequest";

export const currentLocation = () => {
    navigator.geolocation 
    ? navigator.geolocation.getCurrentPosition(success, error) 
    : console.log('not supported');
}

export const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    postLocation(longitude, latitude);
}

export const error = () => {
    console.log('Unable to retrieve location')
}