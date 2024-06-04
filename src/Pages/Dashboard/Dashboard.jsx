import { FaAddressBook, FaCampground, FaHome } from "react-icons/fa";
import { FaManatSign, FaPersonRifle } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="bg-green-300           ">
            <div className="flex px-4 mx-24 ">
            <div className="w-72 h-screen bg-green-800 p-6 pt-12 text-slate-200">
                <ul>
                   <NavLink to="/"><li className="flex items-center gap-2 my-2">
                    <FaHome></FaHome>
                    Home</li></NavLink>

                   <NavLink to="/dashboard/profile"><li className="flex items-center gap-2 my-2">
                    <FaPersonRifle></FaPersonRifle>
                    Organizer Profile</li></NavLink>

                   <NavLink to="/dashboard/addCamp"><li className="flex items-center gap-2 my-2">
                   <FaAddressBook></FaAddressBook>
                    Add A Camp</li>
                   </NavLink>

                   <NavLink><li  className="flex items-center gap-2 my-2">
                    <FaManatSign></FaManatSign>
                    Manage Camps</li></NavLink>

                   <NavLink><li className="flex items-center gap-2 my-2">
                    <FaCampground></FaCampground>
                    Manage Camps</li></NavLink>             
                    
                </ul>
            </div>
            <div className="mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;