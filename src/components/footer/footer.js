import './footer.css'
import '../body/body.css';
import logo from '../../resources/logo.png';
import { Link } from 'react-router-dom';

function footer() {
    return (
        <div className="container-fluid footer animate-fade">
        <div className="container section-description">
            <div className="container-fluid">
            <div className="row" id="footer-row">
                <div className="col">
                    <ul>
                        <li className="footer-title">Spotapp</li>
                        <Link to="/" className="link-item">
                        <li>Home</li>
                        </Link>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li className="footer-title">Legal stuff</li>
                        <li>nothing in here</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <p>copyrighted content are owned by their owners. Data is provided by Spotify AB.</p>
                    <p>&copy; kinda my smart ass. 2023.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default footer;