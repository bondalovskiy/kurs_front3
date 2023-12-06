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
                <h1>Discover your favorite tracks with ease</h1>
                <p style={{color:"#7d7d7d"}}>Our Top Tracks section highlights your most-played tracks, so you can keep the music going</p>
                <div className='arrows-description'>{date === null ? <br/> : 'The arrows show the change in the tracks ranking since your last visit on ' + date}</div>
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
                <h1>Explore your musical taste</h1>
                <p style={{color:"#7d7d7d"}}>Our Top Artist section showcases your most-played artists, so you can dive deeper into their catalog and discover new tracks</p>
                <div className='arrows-description'>{date === null ? <br/> : 'The arrows show the change in the artists ranking since your last visit on ' + date}</div>
            </div>
        </div>
    );
}

function ImageGenre({date}) {
    return (
        <div className="container">
            <div className="image-description">
                <h1>Discover the breadth of your musical interests</h1>
                <p style={{color:"#7d7d7d"}}>Our Top Genres section highlights the genres you listen to most frequently, so you can explore new artists and tracks within those genres</p>
                <div className='arrows-description'>{date === null ? <br/> : 'The arrows show the change in the genres ranking since your last visit on ' + date}</div>
            </div>
        </div>
    );
}

function ImageAnalysis() {
    return (
        <div className="container">
            <div className="image-description">
                <h1>See how your musical taste stacks up</h1>
                <div style={{color:"#7d7d7d"}}>Here, you can gain valuable insights and access various metrics that provide a deeper understanding of your musical preferences and characteristics.</div>
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
                <h1>Never miss a beat</h1>
                <div style={{color:"#7d7d7d"}}>Our Recently Played section keeps track of the songs you've listened to recently, so you can easily revisit your favorites.</div>
            </div>
        </div>
    );
}

const exportedObject = {
    ImageTrack, ImageArtist, ImageGenre, ImageAnalysis, ImageRecently
};

export default exportedObject;