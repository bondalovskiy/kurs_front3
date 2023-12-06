import React from 'react'
import './popup.css';
import { AuthRequest } from '../request/apiUrl';

function popup({trigger, callbackTrigger}) {
  return (trigger) ? (
    <div className="popup animate-fade">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => callbackTrigger(false)}>Close</button>
            <h4>Beta Access Required!</h4>
            <br/>
            <div style={{opacity:".85"}}>Thank you for your interest in our application! 
                Before you can log in with your Spotify account, please make sure you are registered as a beta user. 
                Only registered beta users are granted access to the application at this stage.</div>
            <br/>
            <div style={{color:"#00A573", fontWeight:"500"}}>
                Click 'Join Beta' button on our Home page if you haven't register yet!
            </div>
            <hr/>
            <div style={{opacity:".6"}}>
            We appreciate your understanding and look forward to having you as a valued member of our beta testing community!
            </div>
            <br/>
            <div className="login-btn-description">
                <p>Registered beta users, continue here ➜</p>
            </div>
            <button className="login-btn" onClick={() => window.location.href = AuthRequest.Auth}>Login with Spotify</button>
        </div>
    </div>
  ) : "";
}

export default popup;