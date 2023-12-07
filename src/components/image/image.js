import './image.css';

function ImageTrack({list, date}) {
    return (
        <div className="container">
            <div className="image-container">
                {list.slice(0,3).map((data, i, arr) => {
                    return(
                        i + 1 === arr.length ? <img key={i} className="img3" src={data.album.images[1].url} alt={"first"} width={"150px"} height={"150px"}/> : <img key={i} className="img1" src={data.album.images[1].url} alt={"first"} width={"150px"} height={"150px"}/>
                    )})}
            </div>
            <div className="image-description">
                <h1>Your top tracks</h1>
                <p style={{color:"#7d7d7d"}}>Page highlights the tracks you listen to most frequently</p>
                <div className='arrows-description'>{date === null ? <br/> : 'arrows show the change in the ranking since ' + date}</div>
            </div>
        </div>
    );
}

function ImageArtist({list, date}) {
    return (
        <div className="container">
            <div className="image-container">
            {list.slice(0,3).map((data, i, arr) => {
                    return(
                        i + 1 === arr.length ? <img key={i} className="img3" src={data.images[1].url} alt={"first"} width={"150px"} height={"150px"}/> : <img key={i} className="img1" src={data.images[1].url} alt={"first"} width={"150px"} height={"150px"}/>
                    )})}
            </div>
            <div className="image-description">
                <h1>Your top artists</h1>
                <p style={{color:"#7d7d7d"}}>Page highlights the artists you listen to most frequently</p>
                <div className='arrows-description'>{date === null ? <br/> : 'arrows show the change in the ranking since ' + date}</div>
            </div>
        </div>
    );
}

function ImageGenre({date}) {
    return (
        <div className="container">
            <div className="image-description">
                <h1>Your top genres</h1>
                <p style={{color:"#7d7d7d"}}>Page highlights the genres you listen to most frequently</p>
                <div className='arrows-description'>{date === null ? <br/> : 'arrows show the change in the ranking since ' + date}</div>
            </div>
        </div>
    );
}

function ImageAnalysis() {
    return (
        <div className="container">
            <div className="image-description">
                <h1>Mood of your music taste</h1>
                <div style={{color:"#7d7d7d"}}>Spotify measures this type of info of the songs you listen to. Description provided by spotify themselves.</div>
            </div>
        </div>
    );
}

function ImageRecently({list}) {
    return (
        <div className="container">
            <div className="image-container">
                {list.slice(0,3).map((data, i, arr) => {
                    return(
                        i + 1 === arr.length ? <img key={i} className="img3" src={data.track.album.images[1].url} alt={"first"} width={"150px"} height={"150px"}/> : <img key={i} className="img1" src={data.track.album.images[1].url} alt={"first"} width={"150px"} height={"150px"}/>
                    )})}
            </div>
            <div className="image-description mb-4">
                <h1>Your recent plays</h1>
                <div style={{color:"#7d7d7d"}}>Page highlights tracks you listened recently</div>
            </div>
        </div>
    );
}

const exportedObject = {
    ImageTrack, ImageArtist, ImageGenre, ImageAnalysis, ImageRecently
};

export default exportedObject;