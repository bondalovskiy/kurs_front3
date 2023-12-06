import Map, { Popup } from 'react-map-gl';
import { Layer, Source, Marker } from 'react-map-gl';
import Error from '../error/error';

import basemarkericon from '../../resources/basemarkericon.png';
import markericon from '../../resources/markericon.png';
import { useEffect, useState } from 'react';
import { GetRequest } from '../request/apiUrl';
import { getRequest } from '../request/getRequest';
import mapboxgl from 'mapbox-gl';

function LocationMap({data, mapZoom}) {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();
    const [mapToken, setMapToken] = useState(null);

    useEffect(() => {
        getRequest(GetRequest.MapToken).then((data) => {
            setMapToken(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
        }).then(() => window.scrollTo(0, 0));
    // eslint-disable-next-line
    }, []);

    // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
    mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

    const [user, setUser] = useState(null);
    const coordinates = [];
    const layerStyle = {
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#00A573',
            'line-width': 2
        }
    };
    
    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <>
            {data.length > 0 && <Map
                style={{ height: window.innerHeight-175}}
                initialViewState={{ zoom: mapZoom, longitude: data[0]?.coordinates.longitude, latitude: data[0]?.coordinates.latitude}}
                mapboxAccessToken={mapToken.token}
                mapStyle="mapbox://styles/mapbox/dark-v11">
                <Marker longitude={data[0]?.coordinates.longitude} latitude={data[0]?.coordinates.latitude}>
                    <img src={basemarkericon} alt="marker-icon" width={'40px'} height={'40px'} />
                </Marker>
                {
                    data.slice(1).map((user, i) => {
                        return (
                            <div key={i}>
                                <Marker
                                longitude={user.coordinates.longitude} 
                                latitude={user.coordinates.latitude}
                                onClick={e => {
                                    e.originalEvent.stopPropagation();
                                    setUser(user);
                                }}>
                                    <img src={markericon} alt="marker-icon" width={'40px'} height={'40px'} />
                                </Marker>
                                {coordinates.push([data[0]?.coordinates.longitude, data[0]?.coordinates.latitude])}
                                {coordinates.push([user.coordinates.longitude, user.coordinates.latitude])}
                            </div>
                        );
                    })
                }
                {user && 
                <Popup
                anchor="bottom"
                longitude={user.coordinates.longitude}
                latitude={user.coordinates.latitude}
                onClose={() => setUser(null)}
                >
                <div className="map-popup">
                    <div>
                        <div className="row gx-0">
                            <div className="col-3 map-popup-img">
                                <img src={user.images[0].url} alt="test" width={'30px'} height={'30px'}/>
                            </div>
                            <div className="col-9 map-popup-title">
                                {user.display_name}
                            </div>
                            <div className="map-popup-line">{user.location.features[0].text}, {user.location.features[1].text}</div>
                        {user.match !== null ? <div className="map-popup-line">Match - {user.match}%</div> : <></>}
                        <div className="map-popup-line">Distance - {parseInt(user.distance)}km</div>
                        </div>
                    </div>
                    
                </div>
                
                </Popup>
                }

                <Source id="data" type="geojson" data={{
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': coordinates
                    }
                }}>
                    <Layer {...layerStyle} />
                </Source>
            </Map>
            }
        </>
    );
}

export default LocationMap;