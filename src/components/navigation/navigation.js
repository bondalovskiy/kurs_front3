import artist from '../../resources/artist.png';
import track from '../../resources/track.png';
import library from '../../resources/library.png';
import history from '../../resources/history.png';
import genre from '../../resources/genre.png';
import playlist from '../../resources/playlist.png';
import rank from '../../resources/user-rank.png';
import search from '../../resources/search.png';
import nearby from '../../resources/map.png';
import psychology from '../../resources/psychology.png';

import './navigation.css';

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navigation({ hidden, callback }) {
    const location = useLocation();
    const { item } = location.state === null ? "none" : location.state;
    const [active, setActive] = useState();
    const itemStyle = {
        cursor: "pointer",
        backgroundColor: "#f0f9f4",
        color: "#000000",
        borderLeft: "3px solid #1db954"
    };

    useEffect(() => {
        setActive(item);
        //eslint-disable-next-line
    }, [location]);

    return (
        <div className={hidden}>
            {/*<div className="nav-item nav-search-item" style={active === 'search' ? itemStyle : {}}>
                <img className="image-position" src={search} alt="search icon" width={'25px'} height={'25px'}/>
                <Link to="/user/search" state={{ item: "search" }} className="link-item" onClick={callback}>Search</Link>
            </div>*/}
            <div className="nav-item" style={active === 'track' ? itemStyle : {}}>
                <img className="image-position" src={track} alt="track icon" width={'25px'} height={'25px'}/>
                <Link to="/track/top" state={{ item: "track" }} className="link-item" onClick={callback}>Top tracks</Link>
            </div>
            <div className="nav-item" style={active === 'artist' ? itemStyle : {}}>
                <img className="image-position" src={artist} alt="artist icon" width={'25px'} height={'25px'} />
                <Link to="/artist/top" state={{ item: "artist" }} className="link-item" onClick={callback}>Top artists</Link>
            </div>
            <div className="nav-item" style={active === 'genre' ? itemStyle : {}}>
                <img className="image-position" src={genre} alt="genre icon" width={'25px'} height={'25px'} />
                <Link to="/genre/top" state={{ item: "genre" }} className="link-item" onClick={callback}>Top genres</Link>
            </div>
            <div className="nav-item" style={active === 'history' ? itemStyle : {}}>
                <img className="image-position" src={history} alt="history icon" width={'25px'} height={'25px'} />
                <Link to="/user/history" state={{ item: "history" }} className="link-item" onClick={callback}>Recently played</Link>
            </div>
            {/*<div className="nav-item" style={active === 'library' ? itemStyle : {}}>
                <img className="image-position" src={library} alt="library icon" width={'25px'} height={'25px'} />
                <Link to="/user/analysis" state={{ item: "library" }} className="link-item" onClick={callback}>Library mood</Link>
            </div>*/}
            {/*<div className="nav-item" style={active === 'playlist' ? itemStyle : {}}>
                <img className="image-position" src={playlist} alt="playlist icon" width={'25px'} height={'25px'} />
                <Link to="/user/playlist" state={{ item: "playlist" }} className="link-item" onClick={callback}>Playlists mood</Link>
            </div>
            <div className="nav-item" style={active === 'nearby' ? itemStyle : {}}>
                <img className="image-position" src={nearby} alt="nearby icon" width={'25px'} height={'25px'} />
                <Link to="/location" state={{ item: "nearby" }} className="link-item" onClick={callback}>Nearby</Link>
            </div>*/}
            <div className="nav-item" style={active === 'psychology' ? itemStyle : {}}>
                <img className="image-position" src={psychology} alt="psychology icon" width={'25px'} height={'25px'} />
                <Link to="/psychological-analysis" state={{ item: "psychology" }} className="link-item" onClick={callback}>Psychological Analysis</Link>
            </div>
            {/*<div className="nav-item" style={active === 'rank' ? itemStyle : {}}>
                <img className="image-position" src={rank} alt="rank icon" width={'25px'} height={'25px'} />
                <Link to="/rank" state={{ item: "rank" }} className="link-item" onClick={callback}>User ranking</Link>
            </div>*/}
        </div>
    );
}

export default Navigation;