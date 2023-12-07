import React from 'react'
import './popup.css';
import { AuthRequest } from '../request/apiUrl';

function popup({trigger, callbackTrigger}) {
  return (trigger) ? (
    <div className="popup animate-fade">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => callbackTrigger(false)}>Close</button>
            <h4>Beta is required 4 now</h4>
            <br/>
            <div style={{color:"#00A573", fontWeight:"500"}}>
                Choose 'Join Beta' if you haven't yet
            </div>
            <hr/>
            <br/>
            <div className="login-btn-description">
                <p>continue here ➜</p>
            </div>
            <button className="login-btn" onClick={() => window.location.href = AuthRequest.Auth}>Login with Spotify</button>
        </div>
    </div>
  ) : "";
}

export default popup;