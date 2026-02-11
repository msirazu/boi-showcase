import { use } from "react";
import { AuthContext } from "../auth/Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <>loading .....</>
    }

    if (user && user?.email) {
        return children;
    } else {
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
};

export default PrivateRoute;