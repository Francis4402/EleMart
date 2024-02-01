import PropTypes from 'prop-types';
import UseAuth from './useAuth';
import useAdmin from './useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const {user, loading} = UseAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg min-h-screen"></span>
        </div>
    }

    if(user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace />
};

AdminRoute.propTypes = {
    children: PropTypes.node
}

export default AdminRoute;