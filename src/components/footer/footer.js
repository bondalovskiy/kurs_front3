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
                        <Link to="/" className="link-item">
                        <li>Spotapp</li>
                        </Link>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li className="footer-title">Socials</li>
                        <li>Instagram</li>
                        <li><a href="https://github.com/laa66" className="link-item">GitHub</a></li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li className="footer-title">Legal</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
                <div className="col" id="col-empty">
                
                </div>
                <div className="col" id="footer-logo">
                    <img src={logo} alt={"logo"} width={"100px"} height={"33px"}/>
                </div>
                <div className="footer-copyright">
                    <p>All copyrighted content (i.e. album artwork) are owned by their respective owners. Data is provided by Spotify AB.</p>
                    <p>&copy; 2023.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default footer;