import { useState, useEffect } from 'react';
import './rank.css';
import Error from '../error/error';
import { Link } from 'react-router-dom';
import { getRequest } from '../request/getRequest';
import { GetRequest } from '../request/apiUrl';

function Rank() {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        getRequest(GetRequest.UserRanking).then((data) => {
            setRanking(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })
    }, []);

    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div className="rank-container container-sm">
            <center><h1>User ranking</h1></center>
            <div className="row mt-4 mb-2">
                <div className="col-1 rank-index-col">
                    <span className="rank-index title-rank">#</span>
                </div>
                <div className="col-8">
                    <span className="rank-index title-rank">User</span>
                </div>
                <div className="col-3 title-rank d-flex justify-content-left" style={{color:"#1db954"}}>
                    <span>Points</span>
                </div>
            </div>
            {ranking?.map((data, index) => {
                return (
                    <Link to="/user/profile" state={{ id: data.id }} key={data + index} className="row mb-2 link-item">
                        <div className="col-1 rank-index-col">
                            <span className="rank-index" style={{fontSize:"19px"}}>{index + 1}</span>
                        </div>
                        <div className="col-8"  style={{textOverflow:"clip", overflow:"hidden", whiteSpace:"nowrap"}}>
                            <img className="rank-image" src={data?.images[0].url} alt="profile" width="40px" height="40px"/>
                            <span className="rank-user">{data.display_name}</span>
                        </div>
                        <div className="col-3 rank-points">
                            <span>{data.points}</span>
                        </div>
                    </Link>)
            })}
        </div>
    );
}

export default Rank;