import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { PropTypes } from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <div className="max-w-5xl mx-auto my-8 flex justify-center items-center ">
            <span className="loading loading-spinner loading-lg min-h-screen"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate> ;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}