import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Error Page/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import Details from "../Pages/DetailsPage/Details";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/camps`)
            },
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
])