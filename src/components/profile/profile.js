import './profile.css';
import Error from '../error/error';
import Statistics from './statistics';
import Matching from './matching';
import PlaylistBattle from './playlistBattle';
import twitter from '../../resources/twitter.png';
import facebook from '../../resources/facebook.png';
import instagram from '../../resources/instagram.png';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRequest, getRequestParam } from '../request/getRequest';
import { GetRequest, PutRequest } from '../request/apiUrl';
import { putFollowUnfollow } from '../request/putRequest';

function Profile({ callback }) {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    const [active, setActive] = useState('stats');
    const [profile, setProfile] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);
    const [followed, setFollowed] = useState();

    const location = useLocation();
    const { id } = location.state;
    const buttonStyle = {
        cursor: "pointer",
        color: "#b3b3b3",
        borderBottom: "7px solid #1db954"
    };

    const disableSocialStyle = {
        cursor: "default",
        opacity: "15%"
    }

    useEffect(() => {
        setActive('stats');
        window.scrollTo(0, 0);
        handleRenderProfile();
        getRequest(GetRequest.CurrentUser).then((data) => {
            setCurrentUser(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
        })
    // eslint-disable-next-line
    }, [location]);

    useEffect(() => {
        setFollowed(profile.followers?.some(e => e.id === currentUser.id));
    }, [profile.followers, currentUser.id]);

    const handleRenderProfile = () => {
        getRequestParam(GetRequest.Profile, id)
            .then((data) => {
                setProfile(data);
            }).catch((err) => {
                setHasError(true);
                setStatus(err.message);
            })
    }

    const handleFollow = (id) => {
        putFollowUnfollow(PutRequest.Follow, id)
            .then(() => setFollowed(true))
            .then(() => callback())
            .then(() => handleRenderProfile());
    }

    const handleUnfollow = (id) => {
        putFollowUnfollow(PutRequest.Unfollow, id)
            .then(() => setFollowed(false))
            .then(() => callback())
            .then(() => handleRenderProfile());
    }

    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div className="container profile-img-container">
            <div className="row mb-0">
                <div className="col-md-1 image-container">
                    <img src={profile.imageUrl} className="profile-img" alt={"random"}/>
                </div>
                <div className="col-md-7 name-container">
                    <div className="profile-name">
                        <b className="me-3 profile-username">{profile.username}</b>
                        {profile?.linkIg !== null ? <img src={instagram} alt={'insta'} className="profile-social-img" onClick={() => window.open(profile.linkIg, "_blank", "noreferrer")}/> : 
                            <img src={instagram} alt={'insta'} className="profile-social-img" style={disableSocialStyle}/>}
                        {profile?.linkFb !== null ? <img src={facebook} alt={'fb'} className="profile-social-img" onClick={() => window.open(profile.linkFb, "_blank", "noreferrer")}/> :
                            <img src={facebook} alt={'fb'} className="profile-social-img" style={disableSocialStyle}/>}
                        {profile?.linkTwitter !== null ? <img src={twitter} alt={'twitter'} className="profile-social-img" onClick={() => window.open(profile.linkTwitter, "_blank", "noreferrer")}/> : 
                            <img src={twitter} alt={'twitter'} className="profile-social-img" style={disableSocialStyle}/>}
                    </div>
                    <div className="profile-followers"><b><span style={{color:"#1db954"}}>{profile?.points} points</span> | {profile.followers?.length} followers | {profile.following?.length} following</b></div>
                </div>
                <div className="col-md-4 button-container animate-fade"> 
                    {followed && <div className="unfollow-button" onClick={() => handleUnfollow(id)}>Unfollow</div>}
                    {!followed && currentUser.id !== id && <div className="follow-button" onClick={() => handleFollow(id)}>Follow</div>}
                </div>
            </div>
            <div className="row section-row">
            <nav className="container section-nav">
                <ul className="nav">
                    <li className="profile-button" style={active === 'stats' ? buttonStyle : {}} onClick={() => setActive('stats')}>Statistics</li>
                    {profile.id === Number(currentUser.id) ? <li/> : <li className="profile-button" style={active === 'matching' ? buttonStyle : {}} onClick={() => setActive('matching')}>Matching</li>}
                    {profile.id === Number(currentUser.id) ? <li/> : <li className="profile-button" style={active === 'battle' ? buttonStyle : {}} onClick={() => setActive('battle')}>Playlist battle</li>}
                </ul>
            </nav>
                {active === 'stats' && <Statistics profile={profile}/>}
                {active === 'matching' && <Matching profile={profile}/>}
                {active === 'battle' && <PlaylistBattle profile={profile} callback={handleRenderProfile}/>}
            </div>
        </div>
    );
}

export default Profile;