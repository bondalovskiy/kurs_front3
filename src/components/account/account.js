import { useNavigate } from "react-router-dom";
import Error from "../error/error";

import './account.css';
import { useState, useEffect } from "react";
import { getRequestParam } from "../request/getRequest";
import { GetRequest } from "../request/apiUrl";
import { putSocialLink } from "../request/putRequest";
import DeletePopup from "./deletePopup";

function Account() {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();
    const [profile, setProfile] = useState([]);
    const [deletePopup, setDeletePopup] = useState(false);
    const id = sessionStorage.getItem('userId');

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        getRequestParam(GetRequest.Profile, Number(id))
        .then((data) => {
            setProfile(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
        })
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        var instagram = event.target.instagram.value;
        var facebook = event.target.facebook.value;
        var twitter = event.target.twitter.value;
        putSocialLink(instagram, facebook, twitter);
    }

    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div className="container panel" style={{textAlign:"center"}}>
            <h1 style={{color:"#b3b3b3"}}>Account Settings</h1>
            <hr/>
            <h5 style={{marginBottom:"70px", color:"#7d7d7d"}}>Here you can check your Spotify account settings, add social links and also delete your account.</h5>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="link-container">
                    <div className="row input-row">
                        <label className="col-sm-3 col-form-label label-settings">Spotify settings</label>
                        <div className="col-sm-9 col-settings mb-2">
                            <a className="form-control-plaintext link-settings" href="https://www.spotify.com/us/account/overview">https://www.spotify.com/us/account/overview</a>
                        </div>
                        <label className="col-sm-3 col-form-label label-settings">Spotify account</label>
                        <div className="col-sm-9 col-settings mb-2">
                            <a className="form-control-plaintext link-settings" href={'https://open.spotify.com/user/' + profile.externalId}>https://open.spotify.com/user/{profile.externalId}</a>
                        </div>
                        <label htmlFor="instagram-input" className="col-sm-3 col-form-label label-settings">Instagram link</label>
                        <div className="col-sm-9 col-settings mb-2">
                            <input type="text" className="form-control link-input" defaultValue={profile.linkIg} name="instagram" id="instagram-input"/>
                        </div>
                        <label htmlFor="facebook-input" className="col-sm-3 col-form-label label-settings">Facebook link</label>
                        <div className="col-sm-9 col-settings mb-2">
                            <input type="text" className="form-control link-input" defaultValue={profile.linkFb} name="facebook" id="facebook-input"/>
                        </div>
                        <label htmlFor="twitter-input" className="col-sm-3 col-form-label label-settings">Twitter link</label>
                        <div className="col-sm-9 col-settings mb-2">
                            <input type="text" className="form-control link-input" defaultValue={profile.linkTwitter} name="twitter" id="twitter-input"/>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button type="submit" className="button-link mt-3">Save</button>
                        </div>
                    </div>
                </div>
            </form>
            <div style={{display:"flex", justifyContent:"center", marginTop:"80px"}}>
                <div className="button-delete" onClick={() => setDeletePopup(true)}>I want to delete my account</div>
            </div>
            <DeletePopup trigger={deletePopup} callbackTrigger={setDeletePopup}/>
            <div style={{marginTop:"30px", display:"flex", justifyContent:"center"}}>
                <div className="button-back" onClick={() => navigate(-1)} style={{textAlign:"center"}}>Back</div>
            </div>
        </div>
    );
}

export default Account;