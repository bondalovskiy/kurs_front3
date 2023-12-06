import './search.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Error from '../error/error';
import { getRequestParam } from '../request/getRequest';
import { GetRequest } from '../request/apiUrl';

function Search() {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();
    const [results, setResults] = useState([]);
    const { state } = useLocation();
    const { username } = state;
    const location = useLocation();
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        var username = event.target.username.value;
        navigate("/user/search", { state: { username } });
    }

    useEffect(() => {
        getRequestParam(GetRequest.Search, username).then((data) => {
            setResults(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        // eslint-disable-next-line
        })}, [location]);

    if (hasError) return (<div><Error code={status}/></div>);

    return (
        <div className="container search-section">
            <div className="d-flex justify-content-center mt-3 mb-4">
                <div className="search-box">
                    <form onSubmit={handleSearch} autoComplete="off">
                        <div className="search-bar animate-bar">
                            <input type="text" style={{ marginTop: "0" }} className="search-input form-control" id="username" name="username" aria-describedby="email-help" placeholder="Search..." />
                            <button className="search-button animate-bar" type="submit">
                                <center>
                                    <img style={{ marginBottom: "8%", marginRight: "10%" }} width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" />
                                </center>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <h2 className="search-title">Search results for "{username}"</h2>
            <div className="row row-cols-xl-1 row-cols-xl-2 row-cols-xl-3 row-cols-xl-4 row-cols-xl-5">
            {results?.map((data, i) => {
                  return(
                    <div key={i} className="search-item">
                        <img className="search-image" src={data?.images[0]?.url} alt="test" width={'60px'} height={'60px'}/>
                        <Link to="/user/profile" state={{id: data.id}} className="link-item">{data?.display_name}</Link>
                    </div>
                  )})}
            </div>
        </div>
    );
}

export default Search;