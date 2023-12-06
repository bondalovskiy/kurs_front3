import '../header/header.css';

import Navigation from '../navigation/navigation';
import Friend from '../friend/friend';

function WrapperPanel({list, component}) {
    return (
        <div>
            <div className="row g-0">
                <div className="col">
                    <Navigation hidden={"nav-col no-mob"}/>
                </div>
                <div className="col-lg-9">
                    {component}
                </div>
                <div className="col">
                    <Friend friends={list}/>
               </div>
            </div>
        </div>
    );
}
export default WrapperPanel;