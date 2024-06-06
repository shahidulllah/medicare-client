import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { Controller, useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const UpdateCamp = () => {
    const campData = useLoaderData()
    const { register, handleSubmit, control,reset, formState: { errors } } = useForm();
    const [value, setValue] = useState(new Date());
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        const formattedDate = value.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
        const updatedCamps = {
            ...data,
            DateAndTime: formattedDate
        }
        console.log(updatedCamps);

        //send Camp data to server
        axiosSecure.patch(`/camps/${campData._id}`, updatedCamps)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Camp is Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    navigate('/dashboard/manageCamps')
                }
            })
    }
    return (
        <div>
            <div className="p-4 ">
                <section className="lg:p-8 text-gray-50 mb-8 flex justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 lg:p-16 rounded-md shadow-sm bg-green-700">
                            <div className=" col-span-full -mt-12">
                                <p className="font-medium text-3xl text-center">Update The Camp</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full ">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="campName" className="text-sm">Camp Name</label>
                                    <input id="campName" {...register("CampName", { required: true })} type="text" placeholder="Camp Name" className="w-full input rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" defaultValue={campData.CampName} />
                                    {errors.CampName && <span className="text-black">This field is required..!</span>}
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="image" className="text-sm">Image</label>
                                    <input id="image" {...register("Image", { required: true })} type="text" placeholder="Image URL" className="w-full input rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" defaultValue={campData.Image} />
                                    {errors.Image && <span className="text-black">This field is required..!</span>}
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="description" className="text-sm">Description</label>
                                    <input id="description" {...register("Description", { required: true })} type="text" placeholder="Description" className="w-full textarea rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" defaultValue={campData.Description} />
                                    {errors.Description && <span className="text-black">This field is required..!</span>}
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="location" className="text-sm">Location</label>
                                    <input id="location" {...register("Location", { required: true })} type="text" placeholder="Location" className="w-full textarea rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" defaultValue={campData.Location} />
                                    {errors.Location && <span className="text-black">This field is required..!</span>}
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="professional" className="text-sm">Healthcare Professional</label>
                                    <input id="professional" {...register("HealthcareProfessional", { required: true })} type="text" placeholder="Professional Doctor" className="w-full rounded-md focus:ring focus:ring-opacity-75 input text-gray-900 focus:ring-violet-400 border-gray-700" defaultValue={campData.HealthcareProfessional} />
                                    {errors.HealthcareProfessional && <span className="text-black">This field is required..!</span>}
                                </div>
                                <div className="col-span-full sm:col-span-3 flex flex-col mt-1">
                                    <label htmlFor="dateAndTime" className="text-sm">Date & Time</label>
                                    <Controller
                                        name="DateAndTime"
                                        control={control}
                                        defaultValue={campData.DateAndTime}
                                        render={({ field }) => (
                                            <DateTimePicker
                                                className="w-full rounded-md focus:ring focus:ring-opacity-75 input text-gray-900 focus:ring-violet-400 border-gray-700 border-none outline-none"
                                                onChange={(date) => {
                                                    setValue(date);
                                                    field.onChange(date);
                                                }}
                                                value={value}

                                            />

                                        )}
                                    />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="participantCount" className="text-sm">Participant Count</label>
                                    <input id="participantCount" type="text" {...register("ParticipantCount", { required: true })} className="w-full rounded-md focus:ring focus:ring-opacity-75 input text-gray-900 focus:ring-violet-400 border-gray-700" defaultValue={campData.ParticipantCount} />
                                    {errors.ParticipantCount && <span className="text-black">This field is required..!</span>}
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="campFees" className="text-sm">Camp Fees</label>
                                    <input id="campFees" type="text" {...register("CampFees", { required: true })} placeholder="Camp Fees" className="w-full rounded-md focus:ring focus:ring-opacity-75 input text-gray-900 focus:ring-violet-400 border-gray-700" defaultValue={campData.CampFees} />
                                    {errors.CampFees && <span className="text-black">This field is required..!</span>}
                                </div>
                                <div className="col-span-full">
                                    <button type="submit" className="btn w-full mt-10 bg-slate-300 font-extrabold">Update</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UpdateCamp;