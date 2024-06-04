import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Error Page/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import Details from "../Pages/DetailsPage/Details";
import ParticipantInfo from "../Components/CollectInfo/ParticipantInfo";
import Available from "../Pages/AvailableCamps/Available";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/Profile";
import AddCamp from "../Pages/Dashboard/AddCamp";


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
            {
                path: "/participentInfo/:id",
                element: <ParticipantInfo></ParticipantInfo>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/camps`)
            },
            {
                path: "/availableCamps",
                element: <Available></Available>,
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
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard/profile",
                element: <Profile></Profile>
            },
            {
                path: "/dashboard/addCamp",
                element: <AddCamp></AddCamp>
            }
        ]
    },
])