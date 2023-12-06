import { useNavigate } from 'react-router-dom';
import search from '../../resources/icon-search.png';

function Search({ showBar, setShowBar }) {
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        var username = event.target.username.value;
        navigate("/user/search", { state: { username } });
    }

    return (
        <div className="user-search">
            <div className="wrapper-form">
                {showBar && <div className="search-bar-hidden">
                    <input style={{ marginTop: "0" }} className="search-input-hidden form-control" id="username" name="username" />
                    <button className="search-button-hidden" onMouseOver={() => setShowBar(false)}>
                        <center>
                            <img style={{ marginBottom: "8%", marginRight: "10%" }} width="25" height="25" src={search} alt="search--v1" />
                        </center></button>
                </div>}
                {!showBar && <form onSubmit={handleSearch} autoComplete="off">
                    <div className="search-bar animate-bar">
                        <input type="text" style={{ marginTop: "0" }} className="search-input form-control" id="username" name="username" aria-describedby="email-help" placeholder="Search..." />
                        <button className="search-button animate-bar" type="submit">
                            <center>
                                <img style={{ marginBottom: "8%", marginRight: "10%" }} width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" />
                            </center>
                        </button>
                    </div>
                </form>}
            </div>
        </div>
    );
}

export default Search;