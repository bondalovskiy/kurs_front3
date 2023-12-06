import { useEffect } from 'react';
import { GetRequest } from '../request/apiUrl';
import { getRequest } from '../request/getRequest';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Error from '../error/error';
import Map from './LocationMap';

function NearbyLocation() {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getRequest(GetRequest.NearbyUsersLocation).then((data) => {
            setUsers(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
        }).then(() => window.scrollTo(0, 0));
    // eslint-disable-next-line
    }, []);

    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div className="location-container animate-fade">
            <div className="image-description">
                <h4>Explore users in close proximity who are also part of this application's community</h4>
                <div className="mt-4">
                    <Map data={users} mapZoom={9.0}/>
                </div>
                <div style={{ justifyContent: "center", display: "flex", marginBottom: "5%", marginTop:"5%" }}>
                    <div className="back-playlist-button">
                        <Link to="/location" className="link-item">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NearbyLocation;