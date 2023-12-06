import './header.css';
import logo from '../../resources/logo.png';
import { Link } from 'react-router-dom';
import { logOut } from '../logOut/logOut';
import { getConfiguration } from '../../config';
import { MobileNavigation } from '../navigation/MobileNavigation';
import { useState } from 'react';
import Search from './searchBar';

function Header() {
    return (
        <div>
            <div className="container header">
                <Link to="/">
                    <img src={logo} alt="logo" width="150px" height="49px"/>
                </Link>
            </div>
        </div>
    );
}

function HeaderLogged() {
    const [showBar, setShowBar] = useState(true);
    const id = sessionStorage.getItem('userId');

    return (
        <div className="container-fluid header-logged" onMouseLeave={() => setShowBar(true)}>
            <div className="row g-0">
                <div className="header-nav col d-xxl-none">
                    <MobileNavigation/>
                </div>
                <div className="col-sm header-logo">
                    <Link to="/" className="link-item">
                        <img src={logo} alt="logo" width="150px" height="49px" />
                    </Link>
                </div>
                <div className="col-sm-6 col-md-4 header-content">
                    Hello, {sessionStorage.getItem('username')}
                </div>
                <div className="col header-account">
                    <div className="dropdown">
                        <img className="user-image" src={sessionStorage.getItem('imageUrl')} alt="userImage" width={'40px'} height={'40px'} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" />
                        <Search setShowBar={setShowBar} showBar={showBar}/>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark animate-bar" aria-labelledby="dropdownMenuButton1">
                            <li><h6 className="dropdown-header">{sessionStorage.getItem('username')}</h6></li>
                            <li className="dropdown-item dropdown-link-item"><Link to="/user/profile" state={{ id: id }} className="link-item">Your profile</Link></li>
                            {sessionStorage.getItem('username') === getConfiguration().roleUsername ? <li className="dropdown-item dropdown-link-item"><Link to="/admin/beta" className="link-item">Control panel</Link></li> : null}
                            <li className="dropdown-item dropdown-link-item"><Link to="/user/account" className="link-item">Account</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className="dropdown-item dropdown-link-item" onClick={logOut}><Link to="/" className="link-item">Sign Out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

const exportedObject = {
    Header, HeaderLogged
}

export default exportedObject;