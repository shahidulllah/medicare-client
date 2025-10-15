import { FaAddressBook, FaCampground, FaHome } from "react-icons/fa";
import { FaManatSign, FaPersonRifle } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";



const Dashboard = () => { 
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    return (
        <div className="bg-green-200">
            <div className="flex">
                <div className="w-3/12 h-screen bg-green-800  lg:p-16 pt-12 text-slate-200">
                    <ul>
                        {
                            isAdmin ? <>
                                <div className="font-bold text-xl py-2 border-b mb-7 w-10/12">
                                    <h1>Organizer Dashboard</h1>
                                </div>
                            </> : <>
                                <div className="font-bold font-roboto text-xl py-2 border-b mb-7 w-11/12">
                                    <h1>Participant Dashboard</h1>
                                </div>
                            </>
                        }

                        <NavLink to="/"><li className="flex items-center gap-2 my-2">
                            <FaHome></FaHome>
                            Home</li></NavLink>

                        {
                            isAdmin ?
                                <>
                                    <NavLink to={`/dashboard/userProfile`}><li className="flex items-center gap-2 my-2">
                                        <FaPersonRifle></FaPersonRifle>
                                        Organizer Profile</li></NavLink>

                                    <NavLink to="/dashboard/addCamp"><li className="flex items-center gap-2 my-2">
                                        <FaAddressBook></FaAddressBook>
                                        Add A Camp</li>
                                    </NavLink>

                                    <NavLink to="/dashboard/manageCamps"><li className="flex items-center gap-2 my-2">
                                        <FaManatSign></FaManatSign>
                                        Manage Camps</li></NavLink>

                                    <NavLink to="/dashboard/manageRegCamps"><li className="flex items-center gap-2 my-2">
                                        <FaCampground></FaCampground>
                                        Manage Registered Camps</li></NavLink>
                                </>
                                :
                                <>

                                    <NavLink to="/dashboard/analytics"><li className="flex items-center gap-2 my-2">
                                        <FaAddressBook></FaAddressBook>
                                        Analytics</li>
                                    </NavLink>

                                    <NavLink to={`/dashboard/userProfile`}><li className="flex items-center gap-2 my-2">
                                        <FaPersonRifle></FaPersonRifle>
                                        Participant Profile</li></NavLink>

                                    <NavLink to="/dashboard/registeredCamps"><li className="flex items-center gap-2 my-2">
                                        <FaManatSign></FaManatSign>
                                        Registered Camps</li></NavLink>

                                    <NavLink to="/dashboard/paymentHistory"><li className="flex items-center gap-2 my-2">
                                        <FaCampground></FaCampground>
                                        Payment History</li></NavLink>

                                </>
                        }
                    </ul>
                </div>
                <div className="mx-auto w-9/12">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;