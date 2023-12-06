import artist from '../../resources/artist.png';
import track from '../../resources/track.png';
import library from '../../resources/library.png';
import history from '../../resources/history.png';
import genre from '../../resources/genre.png';
import playlist from '../../resources/playlist.png';
import rank from '../../resources/user-rank.png';
import search from '../../resources/search.png';
import nearby from '../../resources/map.png'

import './navigation.css';

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navigation({ hidden, callback }) {
    const location = useLocation();
    const { item } = location.state === null ? "none" : location.state;
    const [active, setActive] = useState();
    const itemStyle = {
        cursor: "pointer",
        backgroundColor: "#212121",
        boxShadow: "#212121 0 0 30px",
        color: "#b3b3b3"
    };

    useEffect(() => {
        setActive(item);
    //eslint-disable-next-line
    }, [location]);

    return (
        <div className={hidden}>
            <div onClick={callback} className="nav-item nav-search-item" style={active === 'search' ? itemStyle : {}}>
                <img className="image-position" src={search} alt="test" width={'25px'} height={'25px'}/>
                <Link to="/user/search" state={{ item: "search" }} className="link-item">Search</Link>
            </div>
            <div onClick={callback} className="nav-item" style={active === 'track' ? itemStyle : {}}>
                <img className="image-position" src={track} alt="test" width={'25px'} height={'25px'}/>
                <Link to="/track/top" state={{ item: "track" }} className="link-item">Top tracks</Link>
            </div>
            <div onClick={callback} className="nav-item" style={active === 'artist' ? itemStyle : {}}>
                <img className="image-position" src={artist} alt="test" width={'25px'} height={'25px'} />
                <Link to="/artist/top" state={{ item: "artist" }} className="link-item">Top artists</Link>
            </div>
            <div onClick={callback} className="nav-item" style={active === 'genre' ? itemStyle : {}}>
                <img className="image-position" src={genre} alt="test" width={'25px'} height={'25px'} />
                <Link to="/genre/top" state={{ item: "genre" }} className="link-item">Top genres</Link>
            </div>
            <div onClick={callback} className="nav-item" style={active === 'history' ? itemStyle : {}}>
                <img className="image-position" src={history} alt="test" width={'25px'} height={'25px'} />
                <Link to="/user/history" state={{ item: "history" }} className="link-item">Recently played</Link>
            </div>
            <div onClick={callback} className="nav-item" style={active === 'library' ? itemStyle : {}}>
                <img className="image-position" src={library} alt="test" width={'25px'} height={'25px'} />
                <Link to="/user/analysis" state={{ item: "library" }} className="link-item">Library analysis</Link>
            </div>
            <div onClick={callback} className="nav-item" style={active === 'playlist' ? itemStyle : {}}>
                <img className="image-position" src={playlist} alt="test" width={'25px'} height={'25px'} />
                <Link to="/user/playlist" state={{ item: "playlist" }} className="link-item">Playlist insights</Link>
            </div>
            <div onClick={callback} className="nav-item" style={active === 'nearby' ? itemStyle : {}}>
                <img className="image-position" src={nearby} alt="test" width={'25px'} height={'25px'} />
                <Link to="/location" state={{ item: "nearby" }} className="link-item">Find users</Link>
            </div>
            <div onClick={callback} className="nav-item" style={active === 'rank' ? itemStyle : {}}>
                <img className="image-position" src={rank} alt="test" width={'25px'} height={'25px'} />
                <Link to="/rank" state={{ item: "rank" }} className="link-item">User ranking</Link>
            </div>
        </div>
    );
}

export default Navigation;