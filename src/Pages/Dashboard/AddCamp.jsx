import { useState } from "react";
import { useForm } from "react-hook-form";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const AddCamp = () => {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    console.log(watch("example")) // watch input value by passing the name of it

    const [value, onChange] = useState(new Date());
    return (
        <div className="p-4">
            <section className="lg:p-24  text-gray-50 mb-8">
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 lg:p-16 rounded-md shadow-sm bg-green-700">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-3xl ">Add a Camp</p>
                            <p className="text-xs">Credibly create dynamic assignment after long-term high-impact infrastructures. Synergistically provide.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Camp Name</label>
                                <input id="firstname" {...register("campName")} name="campName" type="text" placeholder="Camp Name" className="w-full input rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Image</label>
                                <input id="lastname" {...register("image")} name="image" type="text" placeholder="Image URL" className="w-full input rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Description</label>
                                <input id="email" {...register("description")} name="description" type="text" placeholder="Description" className="w-full textarea rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Location</label>
                                <input id="email" {...register("location")} name="location" type="text" placeholder="Location" className="w-full textarea rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="state" className="text-sm">Healthcare Professional</label>
                                <input id="state" type="text" {...register("professional")} name="mark" placeholder="Professional Doctor" className="w-full rounded-md focus:ring focus:ring-opacity-75 input text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3 flex flex-col mt-1">
                                <label htmlFor="zip" className="text-sm">Date & Time</label>
                                <DateTimePicker className="w-full rounded-md focus:ring focus:ring-opacity-75 input text-gray-900 focus:ring-violet-400 border-gray-700 border-none outline-none" {...register("date&time")} name="date&time"   onChange={onChange} value={value} />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="state" className="text-sm">Participant Count</label>
                                <input id="state" type="text" {...register("participantCount")} name="mark"defaultValue={"0"} className="w-full rounded-md focus:ring focus:ring-opacity-75 input text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="state" className="text-sm">Camp Fees</label>
                                <input id="state" type="text" {...register("campFees")} name="campFees" placeholder="Camp Fees" className="w-full rounded-md focus:ring focus:ring-opacity-75 input text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full">
                                <button type="submit" className="btn w-full mt-10 bg-slate-300 font-extrabold">Add</button>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default AddCamp;