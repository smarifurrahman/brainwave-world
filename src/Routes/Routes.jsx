import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'addToy',
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            }
        ]
    },
]);

export default router;