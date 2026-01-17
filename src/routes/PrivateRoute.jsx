import { use } from "react";
import { AuthContext } from "../auth/Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <>loading .....</>
    }

    if (user && user?.email) {
        return children;
    } else {
        return <Navigate to='/auth/login'></Navigate>
    }
};

export default PrivateRoute;