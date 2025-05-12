import '../header/header.css';

import Navigation from '../navigation/navigation';
import Friend from '../friend/friend';

function WrapperPanel({list, component}) {
    return (
        <div className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-lg-2 ps-0 pe-0">
                    <Navigation hidden={"nav-col no-mob"}/>
                </div>
                <div className="col-lg-8">
                    {component}
                </div>
                <div className="col-lg-2">
                    <Friend friends={list}/>
                </div>
            </div>
        </div>
    );
}
export default WrapperPanel;