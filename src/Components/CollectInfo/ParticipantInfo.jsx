import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const ParticipantInfo = () => {
    const camps = useLoaderData();
    const {id} = useParams();
    const detailsCamp = camps.find(camp => camp._id == id);

    const {user} = useContext(AuthContext)
    console.log(camps);
    const { CampName, HealthcareProfessional, Location, CampFees } = detailsCamp;
    // const navigate = useNavigate();

    const handleInfo = e => {
        e.preventDefault();
        const form = e.target;
        const campName = CampName;
        const professional = HealthcareProfessional;
        const location = Location;
        const fees = CampFees;
        const name = user.displayName;
        const email = user.email;
        const age = form.age.value;
        const phone = form.phone.value
        const gender = form.gender.value;
        const contact = form.contact.value;

        const participantInfo = {campName,professional,location, fees,phone, name, email, age, gender, contact}
        console.log(participantInfo);

          //send assignment to server
          fetch(`${import.meta.env.VITE_API_URL}/participants`, {
            method: 'POST',
            headers: {
             'content-type' : 'application/json'
            },
            body: JSON.stringify(participantInfo) 
         })
         .then(res => res.json())
         .then (data => {
             console.log(data)
             if (data.insertedId) {
                 Swal.fire({
                     title: 'Success!',
                     text: 'Participation Successful!',
                     icon: 'success',
                     confirmButtonText: 'Done'
                 })
                 form.reset()
                //  navigate('/')
             }
         })
    }

    return (
        <div className=" flex justify-center p-4">
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800 bg-green-300">
                <h2 className="mb-3 text-3xl font-bold text-center">Give Your Info</h2>

                <form onSubmit={handleInfo} noValidate="" action="" className="space-y-8">
                    <div className="space-y-4 mb-7">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Your Age</label>
                            <input type="text" name="age" placeholder="Type Your age" className=" input w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Phone Number</label>
                            <input type="text" name="phone" placeholder="Give Your Photo URL" className=" input w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Gender</label>
                            <select className="select select-bordered w-full" name='gender'>
                                <option disabled selected>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Emergency Contact</label>
                            <input type="text" name="contact" placeholder="Give your contact number" className=" input w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                        </div>
                    </div>
                    <button type="submit" className="btn bg-green-600 hover:bg-green-500 border-none w-full px-8 py-3 text-xl font-bold rounded-md">Participate</button>
                </form>
            </div>
        </div>
    );
};

export default ParticipantInfo;