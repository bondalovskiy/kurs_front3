import Error from "../error/error";

import { useEffect, useState } from "react";
import { getRequestParam } from "../request/getRequest";
import { GetRequest } from "../request/apiUrl";

function Matching({ profile }) {
    const [match, setMatch] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    useEffect(() => {
        getRequestParam(GetRequest.Match, profile.id).then((data) => {
            setMatch(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })
    }, [profile.id]);

    if (hasError) return (<div><Error code={status}/></div>);

    return (
        <div className="container statistics-container">
            <div className="matching-description">
                <h3>Library matching</h3>
                <div>Here you can check how similar your music taste is to that of this user</div>
            </div>
            <div className="row main-name text-center matching-container">
                <div className="col-2 col-matching">
                    <span>Artist matching</span>
                    <div className="scale-text">{match?.['artist']}%</div>
                </div>
                <div className="col-2 col-matching">
                    <span>Track matching</span>
                    <div className="scale-text">{match?.['track']}%</div>
                </div>
                <div className="col-2 col-matching">
                    <span>Genre matching</span>
                    <div className="scale-text">{match?.['genre']}%</div>
                </div>
                <div className="col">
                    <span style={{fontSize:"28px"}}>Overall matching</span>
                    <div className="scale-text" style={{fontSize:"48px"}}>{match?.['overall']}%</div>
                </div>
            </div>
            <div className="row" style={{color:"#7d7d7d", fontStyle:"italic"}}>
                <div className="col">
                    <span>* Based on your top tracks, top artists and top genres in all time ranges</span>
                </div>
            </div>
        </div>
    );
}

export default Matching;