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
                <p>Your Spotify statistics on-demand</p>
            </div>
            <div className="container section">
                <div className="content">
                    <div className="slides">
                        <div className="slide-content">
                            <img className="image" src={tracks} alt={"tracks"} width={"600px"} height={"300px"} />
                            <div className="centered">Your Top tracks</div>
                        </div>
                        <div className="slide-content">
                            <img className="image" src={concert} alt={"concert"} width={"600px"} height={"300px"} />
                            <div className="centered">Your Top artists</div>
                        </div>
                        <div className="slide-content">
                            <img className="image" src={score} alt={"concert"} width={"600px"} height={"300px"} />
                            <div className="centered">Audio analysis</div>
                        </div>
                        <div className="slide-content">
                            <img className="image" src={genres} alt={"concert"} width={"600px"} height={"300px"} />
                            <div className="centered">Your Top genres</div>
                        </div>
                        <div className="slide-content">
                            <img className="image" src={playlists} alt={"concert"} width={"600px"} height={"300px"} />
                            <div className="centered">Export playlists</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container section-two">
                
                <div className="row">
                    <div className="col-sm">
                        <div className="container section-description">
                            <p className="section-two-title">Tired of waiting for Spotify Wrapped?</p>
                            <p>Discover your musical taste with our Spotify-powered app!</p>
                            <p>Our app seamlessly integrates with Spotify API to bring you a
                                comprehensive view of your music preferences.</p>
                            <p>With different features you can discover new music and curate
                                personalized playlists.</p>
                            <p> With an intuitive design and seamless integration, you can immerse yourself
                                in your music like never before.</p>
                            <hr />
                            <p className="iphone-text">Login with your Spotify account to see your Top tracks, artists and more!</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <center><img src={iphone} alt="iphone" width="240px" height="450px" /></center>
                        <img className="iphone-logo logo-position" src={spotifylogo} alt="spotifylogo" width={"157px"} height={"47px"} />
                        <button className="iphone-button button-position" onClick={() => setButtonPopup(true)}>Login with Spotify</button>
                        <button className="iphone-button-2 button-position-2" onClick={executeScroll}>Join Beta</button>
                    </div>
                    <Popup trigger={buttonPopup} callbackTrigger={setButtonPopup}/>
                </div>
            </div>
            <div className="container test-section" ref={beta}>
            <h1 className="test-section-title">Sign up as a beta-tester!</h1>
            <div className="row">
                <div className="col test-section-description-1">
                    <p>Please provide full name and email associated with your Spotify account</p>
                    <div className="wrapper-form">
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="mb-3">
                                <input type="text" className="beta-form-input form-control" id="username" name="username" aria-describedby="email-help" placeholder="Full name"/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="beta-form-input form-control" id="email" name="email" placeholder="Email address"/>
                                <div id="email-help" className="form-text">We'll never share your data with anyone else.</div>
                            </div>
                            <button type="submit" className="register-button" 
                            onClick={toggleConfirmation} disabled={disable} style={disable ? {opacity:'0.7'} : null}>{showConfirmation}</button>
                        </form>
                    </div> 
                </div>
                <div className="col test-section-description-2">
                    <p style={{fontSize:"21px", textAlign:"center"}}>Important note</p>
                    <hr/>
                    <span style={{fontSize:"16px"}}>
                    <p>To access our Spotify-powered web application, please register with your full name and Spotify email address that are associated with your Spotify account.</p>
                    <p>This is necessary because we use the basic version of the Spotify API and need to add testers to our Spotify developer panel in order to grant them access to our application.
                          Once you register, your access will be assigned within 15 minutes, and you will receive a confirmation email with instructions on how to get started.</p>
                    <p>Thank you for your interest in testing our application and helping us improve our service!</p>
                    </span>
                </div>
            </div>
        </div>
        </div>
    );
}