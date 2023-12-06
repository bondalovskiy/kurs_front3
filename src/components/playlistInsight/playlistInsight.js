import '../analysis/analysis.css';
import { useState, useEffect } from 'react';
import Error from '../error/error';
import { getRequest } from '../request/getRequest';
import { GetRequest } from '../request/apiUrl';
import { postPlaylistAnalysis } from '../request/postRequest';

function PlaylistInsights() {

    const[indicators, setIndicators] = useState([]);
    const[playlists, setPlaylists] = useState([]);

    const[currentPlaylist, setCurrentPlaylist] = useState({
        name: 'none',
        image: 'url'
    });

    const[active, setActive] = useState("playlists");
    const[hasError, setHasError] = useState(false);
    const[status, setStatus] = useState();

    useEffect(() => {
        getRequest(GetRequest.UserPlaylists).then((data) => {
            setPlaylists(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        }).then(() => window.scrollTo(0, 0))}, []);

    const togglePlaylistAndFetch = (name, id, image) => {
        setCurrentPlaylist({
            name: name,
            image: image
        });
        postPlaylistAnalysis(name, id).then((data) => {
            setIndicators(data);
        }).then(() => setActive('playlist-analysis'))
        .catch((err) =>{
            setHasError(true);
            setStatus(err.message);
            console.log(err);
        }).then(() => window.scrollTo(0, 0));
    }   

    if (hasError) return (<div><Error code={status}/></div>);

    return (
        <div className="container playlist-container">
            <div className="playlist-title-description">
                <h1>Playlist insights</h1>
                <p style={{ color: "#7d7d7d" }}>
                    You can delve into and analyze the data
                    behind your playlists by selecting one from your collection.
                    We'll then offer you valuable insights and statistics to enhance your understanding.
                </p>
            </div>
            {active === "playlists" && <div className="row row-cols-xl-1 row-cols-xl-2 row-cols-xl-3 row-cols-xl-4 row-cols-xl-5">
                {playlists.items?.map((data, i) => {
                    return (
                        <div key={i} className="playlist-item">
                            <img src={data.images[0].url} className="playlist-img"
                                alt={"random"} onClick={() => togglePlaylistAndFetch(data.name, data.id, data.images[0].url)} />
                            <div className="playlist-description"><b>{data.name}</b></div>
                        </div>
                    )
                })}
            </div>}
            {active === "playlist-analysis" && <div>
                <div className="row row-cols-xl-1 row-cols-xl-2 row-cols-xl-3 row-cols-xl-4 row-cols-xl-5">
                    <div>
                        <img src={currentPlaylist.image} className="playlist-img-analysis" alt={"random"} />
                        <div className="playlist-description"><b>{currentPlaylist.name}</b></div>
                    </div>
                    <div className="col-4 analysis-column">
                        <div style={{ textAlign: "center" }}>
                            <span className="analysis-name">Energy</span>
                            <p className="analysis-percentage">{indicators.analysis?.['energy']}%</p>
                        </div>
                    </div>
                    <div className="col-4 analysis-column">
                        <div style={{ textAlign: "center" }}>
                            <span className="analysis-name">Mainstream</span>
                            <p className="analysis-percentage">{indicators.analysis?.['mainstream']}%</p>
                        </div>
                    </div>
                    <div className="col-4 analysis-column">
                        <div style={{ textAlign: "center" }}>
                            <span className="analysis-name">Boringness</span>
                            <p className="analysis-percentage">{indicators.analysis?.['boringness']} points</p>
                        </div>
                    </div>
                    <div className="col-4 analysis-column">
                        <div style={{ textAlign: "center" }}>
                            <span className="analysis-name">Tempo</span>
                            <p className="analysis-percentage">{indicators.analysis?.['tempo']} BPM</p>
                        </div>
                    </div>

                </div>
                <div style={{ justifyContent: "center", display: "flex", marginBottom: "5%" }}>
                    <div className="back-playlist-button" onClick={() => setActive('playlists')}>Back</div>
                </div>
            </div>}
        </div>
    );
}

export default PlaylistInsights;