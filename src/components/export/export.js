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
            {!showButton && <div style={{color:"#535353"}}>Playlist created and exported to your <span style={{color:"#1db954"}}>Spotify account!</span></div>}
            <div className="export-button">
                {showButton && <div className="nav-range-item create-button" onClick={toggleButton}>Create playlist</div>}
                {!showButton && <div className="check-playlist-button" style={{height:"90%", fontWeight:"400"}}
                onClick={() => {window.open(playlist.external_urls.spotify, "_blank", "noreferrer")}}>Check playlist</div>}
            </div>
            <div>
                <p>Take your music with you wherever you go.</p> 
                <p style={{fontSize:"18px"}}>Create playlist based on your Top tracks and export them to your Spotify account, so you can listen on the go.</p>
            </div>
        </div>
    );
}

export default Export;