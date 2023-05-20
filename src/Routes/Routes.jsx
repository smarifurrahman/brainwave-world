import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoutes from "./PrivateRoutes";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

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
            },
            {
                path: 'toys',
                element: <AllToys></AllToys>
            },
            {
                path: 'toys/:id',
                element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: 'myToys',
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            },
            {
                path: 'updateToy/:id',
                element: <PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            }
        ]
    },
]);

export default router;