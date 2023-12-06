import { Navigate } from "react-router-dom";
import { getConfiguration } from "../../config";

const roleUsername = getConfiguration().roleUsername;

const AdminRoute = ({ children }) => {
    const logged = sessionStorage.getItem('userLogged');
    const username = sessionStorage.getItem('username');
    if (logged === null || logged === false || username !== roleUsername) {
      return <Navigate to="/" replace/>;
    }
  
    return children;
};

export default AdminRoute;