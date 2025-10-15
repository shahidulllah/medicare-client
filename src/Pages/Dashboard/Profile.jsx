import { useState } from "react";
import UpdateProfile from "./UserDashboard/UpdateProfile";
import { Link } from "react-router-dom";
import useUser from "../../Hooks/useUser";


const Profile = () => {
     const [update, setUpdate] = useState(false);
    const{User, refetch} = useUser();
    console.log(User);

    const handleToggle = () => {
        setUpdate(!update)
    }
    return (
        <div className="p-4 flex justify-center items-center gap-10">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative flex justify-center mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-full h-">
                    <img className="rounded-full" src={User?.photo} />
                </div>
                <div className="text-center p-6 mb-12">
                    <h4 className="block font-roboto text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {User?.name}
                    </h4>
                    <h4 className="block mb-2 font-roboto text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
                        Email: {User?.email}
                    </h4>
                </div>
                <div className=" text-center p-8">
                   <Link> <button onClick={handleToggle} className="btn w-full bg-green-400 font-bold">{update ? 'Cancel' : 'Click to Edit'}</button></Link>
                </div>

            </div>

            <div>
               {update && <UpdateProfile refetch={refetch} user={User} update={update} setUpdate={setUpdate}></UpdateProfile>}
            </div>
        </div>
    );
};

export default Profile;