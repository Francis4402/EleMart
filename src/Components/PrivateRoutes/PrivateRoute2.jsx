import useAuth from "../Hooks/useAuth.jsx";
import {Navigate, useLocation} from "react-router-dom";
import PropTypes from 'prop-types';
const PrivateRoute2 = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg min-h-screen"></span>
        </div>
    }

    if(!user) {
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace />
};

PrivateRoute2.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute2;