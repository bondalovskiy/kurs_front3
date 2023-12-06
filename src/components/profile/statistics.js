function statistics({ profile }) {
    return (
        <div className="container statistics-container">
            <div className="row">
                <div className="col-md-3 profile-data-box">
                <h3 className="mb-4">Top tracks</h3>
                {profile.topTracks === null ? <div>No data</div> : 
                profile.topTracks?.slice(0, 5).map((data, index) => {
                        return(
                            <div key={data + index} className="row mb-2">
                                <div className="col-2 index-col">
                                    <span>{index + 1}</span>
                                </div>
                                <div className="col-10 track-col">
                                    <div className="main-name">{data.name}</div>
                                    <div className="second-name">{data.artists.map((artist, i, arr) => {
                                    return (i + 1 === arr.length ? artist.name : artist.name + ", ")
                                })}</div>
                                </div>
                            </div>)})}
                </div>
                <div className="col-md-3 profile-data-box">
                    <h3 className="mb-4">Top artists</h3>
                    {profile.topArtists === null ? <div>No data</div> :
                    profile.topArtists?.slice(0, 5).map((data, index) => {
                        return (
                            <div key={data + index} className="row mb-3">
                                <div className="col-2 index-col">
                                    <span>{index + 1}</span>
                                </div>
                                <div className="col-10 track-col gx-2">
                                    <div className="main-name">{data.name}</div>
                                </div>
                            </div>)})}
                </div>
                <div className="col-md-6">
                    <h3 className="mb-4">Audio analysis</h3>
                    <div className="row main-name" style={{fontSize:"18px"}}>
                        <div className="col col-statistics">
                            <span>Mainstream</span>
                            <div className="scale-text">{profile.statsMap?.['mainstream']}%</div>
                        </div>
                        <div className="col col-statistics">
                            <span>Boringness</span>
                            <div className="scale-text">{profile.statsMap?.['boringness']} pts</div>
                        </div>
                        <div className="col col-statistics">
                            <span>Energy</span>
                            <div className="scale-text">{profile.statsMap?.['energy']}%</div>
                        </div>
                        <div className="col col-statistics">
                            <span>Tempo</span>
                            <div className="scale-text">{profile.statsMap?.['tempo']} BPM</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{color:"#7d7d7d", fontStyle:"italic"}}>
                <div className="col">
                    <p>* Based on your all-time statistics</p>
                </div>
            </div>
        </div>
    );
}

export default statistics;