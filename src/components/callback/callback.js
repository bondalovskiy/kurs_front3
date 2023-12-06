import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getRequest } from "../request/getRequest";
import { GetRequest } from "../request/apiUrl";
import { useState } from "react";
import Error from "../error/error";

function Callback() {
    const [hasError, setHasError] = useState(false);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const navigate = useNavigate();

    useEffect(() => {
        if (params.has('jwt')) {
            var token = params.get('jwt');
            sessionStorage.setItem('jwt', token);
            getRequest(GetRequest.CurrentUser).then((data) => {
                sessionStorage.setItem('userLogged', true);
                sessionStorage.setItem('userId', data.id);
                sessionStorage.setItem('username', data.display_name);
                sessionStorage.setItem('imageUrl', data.images[0].url)
            }).then(() => navigate('/track/top', { state: {item: 'track'}}));
        } else setHasError(true);

        //eslint-disable-next-line
    }, []);
    
    if (hasError) return (<Error code={'401'}/>)
    return (
        <div/>
    );
}

export default Callback;