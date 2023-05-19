import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Pages/Shared/Spinner/Spinner";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <Spinner></Spinner>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" ></Navigate>
};

export default PrivateRoutes;