import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const logged = sessionStorage.getItem('userLogged');
    if (logged === null || logged === false) {
      return <Navigate to="/" replace/>;
    }
  
    return children;
};

export default PrivateRoute;