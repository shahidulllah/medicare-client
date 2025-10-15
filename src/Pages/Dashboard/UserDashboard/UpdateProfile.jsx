
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const UpdateProfile = ({user, setUpdate, refetch}) => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleUpdate = (data) =>{
        const updateData = data;
        console.log(updateData)
       
        axiosPublic.patch(`/users/${user._id}`, updateData)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                setUpdate(false)
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Profile Updtated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }

    return (
        <div className='card shadow-2xl bg-green-100'>
            <h1 className='p-5 text-center font-roboto font-bold text-2xl'>Update Your profile</h1>
            <form onSubmit={handleSubmit(handleUpdate)} className='card-body'>
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="image" className="text-sm">Name</label>
                    <input id="name" {...register("name", { required: true })} defaultValue={user.name} type="text" placeholder="Name" className="w-full input rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    {errors.Image && <span className="text-black">This field is required..!</span>}
                </div>
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="description" {...register("email", { required: true })} type="email" defaultValue={user.email} placeholder="Email" className="w-full textarea rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    {errors.Description && <span className="text-black">This field is required..!</span>}
                </div>
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="photo" className="text-sm">Photo URL</label>
                    <input id="description" {...register("photo", { required: true })} type="text" defaultValue={user.photo} placeholder="Give your phot url" className="w-full textarea rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    {errors.Description && <span className="text-black">This field is required..!</span>}
                </div>

                <input className='btn mt-5' type="submit" />
            </form>
        </div>
    );
};

export default UpdateProfile;