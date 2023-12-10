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
                <div>Here you can check how similar your music taste</div>
            </div>
            <div className="row main-name text-center matching-container">
                <div className="col-2 col-matching">
                    <span>Artists match</span>
                    <div className="scale-text">{match?.['artist']}%</div>
                </div>
                <div className="col-2 col-matching">
                    <span>Tracks match</span>
                    <div className="scale-text">{match?.['track']}%</div>
                </div>
                <div className="col-2 col-matching">
                    <span>Genres match</span>
                    <div className="scale-text">{match?.['genre']}%</div>
                </div>
                <div className="col">
                    <span style={{fontSize:"28px"}}>Overall</span>
                    <div className="scale-text" style={{fontSize:"48px"}}>{match?.['overall']}%</div>
                </div>
            </div>
            <div className="row" style={{color:"#7d7d7d", fontStyle:"italic"}}>
                <div className="col">
                    <span>* Based on your top tracks, artists, genres. All time range</span>
                </div>
            </div>
        </div>
    );
}

export default Matching;