import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";


const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="p-4 flex justify-center items-center">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative flex justify-center mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-full h-">
                    <img className="rounded-full" src={user?.photoURL} />
                </div>
                <div className="text-center p-6 mb-12">
                    <h4 className="block font-roboto text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {user?.displayName}
                    </h4>
                    <h4 className="block mb-2 font-roboto text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
                       Email: {user?.email}
                    </h4>
                </div>
                <div className=" text-center p-8">
                   <button className="btn w-full bg-green-400 font-bold">Update</button>
                </div>
               
            </div>
        </div>
    );
};

export default Profile;