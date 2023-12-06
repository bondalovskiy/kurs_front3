import './friend.css';

import { Link } from 'react-router-dom';

function Friend({friends}) {

    return (
        <div className="friend-col">
            <h2 className="friend-title">
                <div className="link-item">Your friends - {friends?.size}</div>
            </h2>
            <div className="friend-list">
            {friends?.users?.map((data, i) => {
                return (
                <div key={i} className="friend-item">
                    <img className="friend-image" src={data.images[0].url} alt="test" width={'30px'} height={'30px'} />
                    <Link to="/user/profile" state={{ id: data.id }} className="link-item">{data.display_name}</Link>
                </div>
                )
            })}
            </div>
        </div>
    );
}

export default Friend;