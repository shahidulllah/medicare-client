
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useCampData from "../../Hooks/useCampData";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageCamps = () => {
    const axiosSecure = useAxiosSecure()
    const [campData, refetch] = useCampData();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/camps/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="p-4 lg:mx-12 lg:p-2 w-full flex justify-center">
            <div className="container p-4 lg:p-12 mx-auto text-blue-400 bg-gray-200 rounded-lg">
                <h2 className="mb-5 text-3xl text-center font-semibold text-green-600 leading-tight  -mt-6">Manage Camps ({campData.length})</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead className="bg-green-700">
                            <tr className="text-center font-bold text-slate-300">
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3">Healthcare Professional</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Date & Time</th>
                                <th className="p-3">Update</th>
                                <th className="p-3 text-right">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                campData.map(camp => <tr key={camp._id} className="border-b border-opacity-20 border-green-700 bg-gray-900">
                                    <td className="p-3 text-left">
                                        <p className="text-purple-500 font-semibold">{camp.CampName}</p>
                                    </td>
                                    <td className="p-3 text-center">
                                        <p>{camp.HealthcareProfessional}</p>
                                    </td>
                                    <td className="p-3 text-center">
                                        <p>{camp.Location}</p>
                                    </td>

                                    <td className="p-3 text-center">
                                        <p>{camp.DateAndTime}</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <Link to={`/dashboard/updateCamp/${camp._id}`}>
                                            <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                                                <span><button><FaEdit></FaEdit></button></span>
                                            </span>
                                        </Link>
                                    </td>
                                    <td className="p-3 text-right">
                                        <span onClick={() => handleDelete(camp._id)} className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                                            <span><button ><MdDelete></MdDelete></button></span>
                                        </span>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageCamps;