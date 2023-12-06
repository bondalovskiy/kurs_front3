import { AuthRequest } from '../request/apiUrl';
import './error.css';
import { httpStatus } from './httpStatus';


function Error({code}) {

    const refresh = () => {
        sessionStorage.clear();
        window.location.href = AuthRequest.Auth;
    }
    return (
        <div className="container error-section">
            <div className="error-title">Ooops...</div>
            <div className="error-code">{code.split('&')[0] + ' ' + httpStatus[code.split('&')[0]]}</div>
            <div className="error-message">{code.split('&')[1]}</div>
            <div className="error-refresh">Refresh and try again.</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={refresh} type="submit" className="button-link mt-3">Refresh</button>
            </div>
        </div>
    )
}

export default Error;