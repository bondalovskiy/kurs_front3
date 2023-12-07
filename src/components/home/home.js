import concert from '../../resources/concert.jpg';
import genres from '../../resources/genres.jpg';
import playlists from '../../resources/playlists.jpg';
import score from '../../resources/score.jpg';
import tracks from '../../resources/tracks.jpg';
import iphone from '../../resources/iphone.png';
import spotifylogo from '../../resources/Spotify_logo.png';
import './home.css'

import { useRef, useState } from 'react';
import { getBetaUser } from '../request/getRequest';
import Popup from './popup';


export function Home() {
    const beta = useRef(null);
    const executeScroll = () => beta.current.scrollIntoView();
    const [showConfirmation, setShowConfirmation] = useState("Register");
    const [disable, setDisable] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    
    const toggleConfirmation = () => {
        setShowConfirmation("Thank you!");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var username = event.target.username.value;
        var email = event.target.email.value;
        getBetaUser(username, email);
        setDisable(true);
    }

    return (
        <div className="animate-fade">
            <div className="container section-title">
                <p>Spotify statistics on-demand</p>
            </div>
            <div className="container section-two">
                <div className="row">
                    <div className="col-sm">
                        <div className="container section-description">
                            <p className="section-two-title">Your mini Spotify Wrapped</p>
                            <p>SpotifyAPI-powered app. blabla. more description.</p>
                            <hr />
                            <p className="iphone-text">Login with your Spotify account to see your Top tracks, artists and more!</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <center><img src={iphone} alt="iphone" width="213px" height="400px" /></center>
                        <img className="iphone-logo logo-position" src={spotifylogo} alt="spotifylogo" width={"157px"} height={"47px"} />
                        <button className="iphone-button button-position" onClick={() => setButtonPopup(true)}>Login with Spotify</button>
                        <button className="iphone-button-2 button-position-2" onClick={executeScroll}>Join Beta</button>
                    </div>
                    <Popup trigger={buttonPopup} callbackTrigger={setButtonPopup}/>
                </div>
            </div>
            <div className="container test-section" ref={beta}>
            <h1 className="test-section-title">Sign up for a beta</h1>
            <div className="row">
                <div className="col test-section-description-1">
                    <p>provide your name and email associated with your Spotify account</p>
                    <div className="wrapper-form">
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="mb-3">
                                <input type="text" className="beta-form-input form-control" id="username" name="username" aria-describedby="email-help" placeholder="Name"/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="beta-form-input form-control" id="email" name="email" placeholder="Email"/>
                                <div id="email-help" className="form-text">Ur data is safe type of bullshit. source: trust me bro.</div>
                            </div>
                            <button type="submit" className="register-button" 
                            onClick={toggleConfirmation} disabled={disable} style={disable ? {opacity:'0.7'} : null}>{showConfirmation}</button>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
        </div>
    );
}