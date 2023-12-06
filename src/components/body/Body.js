import HeaderState from '../header/header';

import '../wrapper/panel.css';
import Track from '../track/track';
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import Analysis from "../analysis/analysis";
import History from "../history/history";
import Account from "../account/account";
import Callback from '../callback/callback';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AdminRoute from '../AdminRoute/AdminRoute';
import { Home } from '../home/home';
import Beta from '../beta/beta';
import Search from '../search/search';
import WrapperBody from '../wrapper/WrapperBody';

import { Route, Routes } from "react-router-dom";

import './slider.css';
import './body.css';
import PlaylistInsights from '../playlistInsight/playlistInsight';
import Rank from '../rank/rank';
import Location from '../location/location';
import MatchLocation from '../location/matchLocation';
import NearbyLocation from '../location/nearbyLocation';

function Body() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div className="home"><HeaderState.Header/><Home/></div>}/>
                <Route path="/callback" element={<div><HeaderState.Header/><Callback/></div>}/>
                <Route path="/track/top" element={<PrivateRoute><WrapperBody component={<Track/>}/></PrivateRoute>}/>
                <Route path="/artist/top" element={<PrivateRoute><WrapperBody component={<Artist/>}/></PrivateRoute>}/>
                <Route path="/user/history" element={<PrivateRoute><WrapperBody component={<History/>}/></PrivateRoute>}/>
                <Route path="/genre/top" element={<PrivateRoute><WrapperBody component={<Genre/>}/></PrivateRoute>}/>
                <Route path="/user/analysis" element={<PrivateRoute><WrapperBody component={<Analysis/>}/></PrivateRoute>}/>
                <Route path="/user/playlist" element={<PrivateRoute><WrapperBody component={<PlaylistInsights/>}/></PrivateRoute>}/>
                <Route path="/user/account" element={<PrivateRoute><HeaderState.HeaderLogged/><Account/></PrivateRoute>}/>
                <Route path="/user/search" element={<PrivateRoute><WrapperBody component={<Search/>}/></PrivateRoute>}/>
                <Route path="/user/profile" element={<PrivateRoute><WrapperBody withCallback={true}/></PrivateRoute>}/>
                <Route path="/admin/beta" element={<AdminRoute><HeaderState.HeaderLogged/><Beta/></AdminRoute>}/>
                <Route path="/rank" element={<PrivateRoute><WrapperBody component={<Rank/>}/></PrivateRoute>}/>
                <Route path="/location" element={<PrivateRoute><WrapperBody component={<Location/>}/></PrivateRoute>}/>
                <Route path="/location/match" element={<PrivateRoute><WrapperBody component={<MatchLocation/>}/></PrivateRoute>}/>      
                <Route path="/location/nearby" element={<PrivateRoute><WrapperBody component={<NearbyLocation/>}/></PrivateRoute>}/>                
            </Routes>
        </div>
    );
}
export default Body;