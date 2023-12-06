import Image from '../image/image';
import List from '../list/list';
import Error from '../error/error';

import { useEffect, useState } from 'react';
import { getRequestParam } from '../request/getRequest';
import { GetRequest } from '../request/apiUrl';

function Genre() {
    const [active, setActive] = useState('short');
    const [genres, setGenres] = useState([]);
    const [date, setDate] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    const buttonStyle = {
        cursor: "pointer",
        color: "#b3b3b3",
        borderBottom: "7px solid #1db954"
    };

    useEffect(() => {
        getRequestParam(GetRequest.Genre, active).then((data) => {
            setGenres(data.genres);
            setDate(data.lastVisit);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        }).then(() => window.scrollTo(0, 0))}, [active]);

    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div className="panel animate-fade">
            <Image.ImageGenre date={date}/>
            <nav className="container section-nav mb-5">
                <ul className="nav">
                    <li className="profile-button" onClick={() => setActive('short')} style={active === 'short' ? buttonStyle : {}}>4 weeks</li>
                    <li className="profile-button" onClick={() => setActive('medium')} style={active === 'medium' ? buttonStyle : {}}>6 months</li>
                    <li className="profile-button" onClick={() => setActive('long')} style={active === 'long' ? buttonStyle : {}}>All time</li>
                </ul>
            </nav>
            {active === 'short' && <List.GenreList list={genres}/>}
            {active === 'medium' && <List.GenreList list={genres}/>}
            {active === 'long' && <List.GenreList list={genres}/>}
        </div>
    );
}

export default Genre;