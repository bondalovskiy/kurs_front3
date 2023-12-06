import './location.css';
import worldmap from '../../resources/worldmap.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Location() {
    const [showDescription, setShowDescription] = useState(false);
    const [mapHighlight, setMapHighlight] = useState(false);


    const onMouseOverButton = () => {
        setMapHighlight(true);
        setShowDescription(true);
    }

    const onMouseLeaveButton = () => {
        setMapHighlight(false);
        setShowDescription(false);
    }

    const mapStyle = {
        opacity: 0.45
    };

    useEffect(() => window.scrollTo(0, 0));

    return (
        <div className="location-container animate-fade">
            <div className="image-description">
                <h1>Music-Matched Connections</h1>
                <div style={{ color: "#7d7d7d" }}>Discover fellow users whose music taste aligns with yours and explore their locations.</div>
                <div className="container location-section">
                <img src={worldmap} style={mapHighlight ? mapStyle : null} className="world-img animate-fate" alt="world-map" />
                    <div className="row row-cols-1 row-cols-sm-2 gy-3 location-buttons">
                        <div className="col">
                            <button onMouseOver={onMouseOverButton} className="match-users-button">
                                <Link to="/location/match" className="link-item">Find matching users</Link>
                            </button>
                        </div>
                        <div className="col">
                            <button onMouseOver={onMouseOverButton} className="nearby-users-button">
                                <Link to="/location/nearby" className="link-item">Find nearby users</Link>
                            </button>
                        </div>
                    </div>
                    {showDescription && <div onMouseLeave={onMouseLeaveButton} className="location-description animate-fade">
                        <div className="location-description-inner">
                            <h4>Connect</h4>
                            <div style={{ color: "#7d7d7d" }}>
                                ...with like-minded music enthusiasts and uncover nearby users who share your passion for this application.
                                Expand your musical connections and meet people who resonate with your preferences,
                                creating a harmonious community right at your fingertips.
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Location;