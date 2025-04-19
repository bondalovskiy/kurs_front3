import { useState } from 'react';

import Error from '../error/error';
import './export.css';

function Export({postTrack}) {

    const [showButton, setShowButton] = useState(true);
    const [playlist, setPlaylist] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    const toggleButton = () => {
        setShowButton(!showButton);
        postTrack().then((data) => {
            setPlaylist(data);
        }).catch((err) =>{
            setHasError(true);
            setStatus(err.message)
            console.log(err);
        });
    }

    if (hasError) return (<div><Error code={status}/></div>)
    return (
        <div className="container export-section">
            {!showButton && <div style={{color:"#000000"}}>Playlist created. Check it out on ur <span style={{color:"#1db954"}}>Spotify account!</span></div>}
            <div className="export-button">
                {showButton && <div className="nav-range-item create-button" onClick={toggleButton}>Create playlist</div>}
                {!showButton && <div className="check-playlist-button" style={{height:"90%", fontWeight:"400"}}
                onClick={() => {window.open(playlist.external_urls.spotify, "_blank", "noreferrer")}}>Check playlist</div>}
            </div>
            <div>
                <p>Create a playlist with ur top songs!</p>
                <p style={{fontSize:"18px"}}>Create a playlist based on your Top tracks for this period of time and export them to your Spotify account.</p>
            </div>
        </div>
    );
}

export default Export;