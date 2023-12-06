import Image from '../image/image';
import './analysis.css'

import IndicatorText from './indicatorText';
import Error from '../error/error';

import { useEffect, useState } from 'react';
import { getRequest } from '../request/getRequest';
import { GetRequest } from '../request/apiUrl';


function Analysis() {
    const[indicators, setIndicators] = useState([]);

    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    useEffect(() => {
        getRequest(GetRequest.LibraryAnalysis).then((data) => {
            setIndicators(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        }).then(() => window.scrollTo(0, 0))}, []);

    if (hasError) return (<div><Error code={status}/></div>);
    
    return (
        <div className="panel animate-fade">
            <Image.ImageAnalysis/>
            <div className="analysis-container">
           <div className="container analysis-section">
                <div className="row">
                    <div className="col-lg-auto">
                        <center><img className="analysis-image" src={indicators.images?.length !== 0 ? indicators.images?.[0].url : "none"} alt="test"/></center>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Acousticness</span>
                            <p className="analysis-percentage">{indicators.analysis?.['acousticness']}%</p>
                        </div>
                    </div>
                    <div className="col analysis-column">
                        <IndicatorText indicator={'acousticness'}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col analysis-column">
                    <IndicatorText indicator={'danceability'}/>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Danceability</span>
                            <p className="analysis-percentage">{indicators.analysis?.['danceability']}%</p>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.length !== 0 ? indicators.images?.[1].url : "none"} alt="test" className="analysis-image"/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.length !== 0 ? indicators.images?.[2].url : "none"} alt="test" className="analysis-image"/></center>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Energy</span>
                            <p className="analysis-percentage">{indicators.analysis?.['energy']}%</p>
                        </div>
                    </div>
                    <div className="col analysis-column">
                        <IndicatorText indicator={'energy'}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col analysis-column">
                    <IndicatorText indicator={'instrumentalness'}/>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Instrumentalness</span>
                            <p className="analysis-percentage">{indicators.analysis?.['instrumentalness']}%</p>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.length !== 0 ? indicators.images?.[3].url : "none"} alt="test" className="analysis-image"/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.length !== 0 ? indicators.images?.[4].url : "none"} alt="test" className="analysis-image"/></center>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Liveness</span>
                            <p className="analysis-percentage">{indicators.analysis?.['liveness']}%</p>
                        </div>
                    </div>
                    <div className="col analysis-column">
                        <IndicatorText indicator={'liveness'}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col analysis-column">
                    <IndicatorText indicator={'loudness'}/>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Loudness</span>
                            <p className="analysis-percentage">{indicators.analysis?.['loudness']}dB</p>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.length !== 0 ? indicators.images?.[5].url : "none"} alt="test" className="analysis-image"/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.length !== 0 ? indicators.images?.[6].url : "none"} alt="test" className="analysis-image"/></center>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Speechiness</span>
                            <p className="analysis-percentage">{indicators.analysis?.['speechiness']}%</p>
                        </div>
                    </div>
                    <div className="col analysis-column">
                        <IndicatorText indicator={'speechiness'}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col analysis-column">
                    <IndicatorText indicator={'valence'}/>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Valence</span>
                            <p className="analysis-percentage">{indicators.analysis?.['valence']}%</p>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.length !== 0 ? indicators.images?.[7].url : "none"} alt="test" className="analysis-image"/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.length !== 0 ? indicators.images?.[8].url : "none"} alt="test" className="analysis-image"/></center>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Mainstream</span>
                            <p className="analysis-percentage">{indicators.analysis?.['mainstream']}%</p>
                        </div>
                    </div>
                    <div className="col analysis-column">
                        <IndicatorText indicator={'mainstream'}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col analysis-column">
                    <IndicatorText indicator={'boringness'}/>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Boringness score</span>
                            <p className="analysis-percentage">{indicators.analysis?.['boringness']} points</p>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.length !== 0 ? indicators.images?.[9].url : "none"} alt="test" className="analysis-image"/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.length !== 0 ? indicators.images?.[10].url : "none"} alt="test" className="analysis-image"/></center>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Tempo</span>
                            <p className="analysis-percentage">{indicators.analysis?.['tempo']} BPM</p>
                        </div>
                    </div>
                    <div className="col analysis-column">
                        <IndicatorText indicator={'tempo'}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Analysis;