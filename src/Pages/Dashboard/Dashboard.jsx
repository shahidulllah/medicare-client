import { FaAddressBook, FaCampground, FaHome } from "react-icons/fa";
import { FaManatSign, FaPersonRifle } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    const isAdin = true;
    return (
        <div className="bg-green-300           ">
            <div className="flex px-4 mx-24 ">
                <div className="w-72 h-screen bg-green-800 p-6 pt-12 text-slate-200">
                    <ul>
                        {
                            isAdin ? <>
                                <div className="font-bold text-xl py-2 border-b mb-7 w-10/12">
                                    <h1>Organizer Dashboard</h1>
                                </div>
                            </> : <>
                                <div className="font-bold text-xl py-2 border-b mb-7 w-11/12">
                                    <h1>Participant Dashboard</h1>
                                </div>
                            </>
                        }
                        <NavLink to="/"><li className="flex items-center gap-2 my-2">
                            <FaHome></FaHome>
                            Home</li></NavLink>

                        {
                            isAdin ?
                                <>
                                    <NavLink to="/dashboard/organizerProfile"><li className="flex items-center gap-2 my-2">
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
                                    <NavLink to="/dashboard/participantProfile"><li className="flex items-center gap-2 my-2">
                                        <FaPersonRifle></FaPersonRifle>
                                        Participant Profile</li></NavLink>

                                    <NavLink to="/dashboard/analytics"><li className="flex items-center gap-2 my-2">
                                        <FaAddressBook></FaAddressBook>
                                        Analytics</li>
                                    </NavLink>

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
                <div className="mx-auto">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;