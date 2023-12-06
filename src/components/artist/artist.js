import Image from '../image/image';
import List from '../list/list';
import Error from '../error/error';

import { useEffect, useState } from 'react';

import { getRequestParam } from '../request/getRequest';
import { GetRequest } from '../request/apiUrl';

function Artist() {
    const [active, setActive] = useState('short');
    const [artists, setArtists] = useState([]);
    const [date, setDate] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    const buttonStyle = {
        cursor: "pointer",
        color: "#b3b3b3",
        borderBottom: "7px solid #1db954"
    };

    useEffect(() => {
        getRequestParam(GetRequest.Artist, active).then((data) => {
            setArtists(data.items);
            setDate(data.lastVisit);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        }).then(() => window.scrollTo(0, 0))}, [active]);

    if (hasError) return (<div><Error code={status}/></div>)
    return (
        <div className="panel animate-fade">
            <Image.ImageArtist list={artists} date={date}/>
            <nav className="container section-nav">
                <ul className="nav">
                    <li className="profile-button" onClick={() => setActive('short')} style={active === 'short' ? buttonStyle : {}}>4 weeks</li>
                    <li className="profile-button" onClick={() => setActive('medium')} style={active === 'medium' ? buttonStyle : {}}>6 months</li>
                    <li className="profile-button" onClick={() => setActive('long')} style={active === 'long' ? buttonStyle : {}}>All time</li>
                </ul>
            </nav>
            {active === 'short' && <List.ArtistList list={artists}/>}
            {active === 'medium' && <List.ArtistList list={artists}/>}
            {active === 'long' && <List.ArtistList list={artists}/>}
        </div>
    );
}

export default Artist;