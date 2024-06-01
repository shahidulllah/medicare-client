import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Components/AuthProvider/AuthProvider";





const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="text-center"><span className=" loading loading-spinner text-primary"></span></div>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes ={
    children: PropTypes.node
}