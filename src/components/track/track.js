import Image from '../image/image';
import List from '../list/list';
import Export from '../export/export'
import Error from '../error/error';

import { useEffect, useState } from 'react';
import { getRequestParam } from '../request/getRequest';
import { GetRequest } from '../request/apiUrl';
import { postCreatePlaylist } from '../request/postRequest';
import { currentLocation } from '../location/currentLocation';

function Track() {
    const [active, setActive] = useState('short');

    const [tracks, setTracks] = useState([]);
    const [date, setDate] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();
    const [hasLocation, setHasLocation] = useState(false);

    const buttonStyle = {
        cursor: "pointer",
        color: "#b3b3b3",
        borderBottom: "7px solid #1db954"
    };

    useEffect(() => {
        if (!hasLocation) {
            currentLocation();
            setHasLocation(true);
        }
    }, [hasLocation])

    useEffect(() => {
        getRequestParam(GetRequest.Track, active).then((data) => {
            setTracks(data.items);
            setDate(data.lastVisit);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message)
            console.log(err.message);
        }).then(() => window.scrollTo(0, 0))}, [active]);

    if (hasError) return (<div><Error code={status}/></div>)

    return (
        <div className="panel animate-fade">
            <Image.ImageTrack list={tracks} date={date}/>
            <nav className="container section-nav">
                <ul className="nav">
                    <li className="profile-button" onClick={() => setActive('short')} style={active === 'short' ? buttonStyle : {}}>4 weeks</li>
                    <li className="profile-button" onClick={() => setActive('medium')} style={active === 'medium' ? buttonStyle : {}}>6 months</li>
                    <li className="profile-button" onClick={() => setActive('long')} style={active === 'long' ? buttonStyle : {}}>All time</li>
                </ul>
            </nav>
        
            {active === 'short' && <List.TrackList list={tracks}/>}
            {active === 'medium' && <List.TrackList list={tracks}/>}
            {active === 'long' && <List.TrackList list={tracks}/>}
            

            {active === 'short' && <Export postTrack={() => postCreatePlaylist(active)}/>}
            {active === 'medium' && <Export postTrack={() => postCreatePlaylist(active)}/>}
            {active === 'long' && <Export postTrack={() => postCreatePlaylist(active)}/>}
            
        </div>
    );
}

export default Track;