import { RiPriceTagLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const Available = () => {
    const camps = useLoaderData();

    return (
        <div className="px-4 lg:mx-24">
            <SectionTitle
                heading={"Available Medical Camps"}
                description={'Objectively optimize intermandated quality vectors after efficient expertise. Competently architect multidisciplinary "outside the box" thinking before cooperative users. Appropriately promote fully.'}
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 mb-12">
                {
                    camps.map(camp =>
                        <div key={camp._id} className="rounded-2xl shadow-2xl border-2">
                            <img src={camp.Image} alt="" className="object-cover object-center w-full rounded-t-md h-80" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracking-wide text-green-600 font-roboto">{camp.CampName}</h2>
                                    <div>
                                        {camp.Description}
                                    </div>
                                </div>

                                <div className='space-y-1'>
                                    <div className='flex items-center justify-between font-roboto'>
                                        <div className="flex items-center"><RiPriceTagLine className='mr-2'></RiPriceTagLine> <span className='font-bold mr-2'>Professional:</span> <span className=''>{camp.HealthcareProfessional}</span></div>
                                    </div>
                                    <div className='flex items-center justify-between font-roboto'>
                                        <div className="flex items-center"><RiPriceTagLine className='mr-2'></RiPriceTagLine> <span className='font-bold mr-2'>Fees:</span> <span className=''>{camp.CampFees}</span></div>
                                    </div>
                                    <div className='flex items-center justify-between font-roboto'>
                                        <div className="flex items-center"><RiPriceTagLine className='mr-2'></RiPriceTagLine> <span className='font-bold mr-2'>Participants:</span> <span className=''>{camp.ParticipantCount}</span></div>
                                    </div>
                                    <div className='flex items-center justify-between font-roboto'>
                                        <div className="flex items-center"><RiPriceTagLine className='mr-2'></RiPriceTagLine> <span className='font-bold mr-2'>Date:</span> <span className=''>{camp.DateAndTime}</span></div>
                                    </div>
                                    <div className='flex items-center justify-between font-roboto'>
                                        <div className="flex items-center"><RiPriceTagLine className='mr-2'></RiPriceTagLine> <span className='font-bold mr-2'>Address:</span> <span className=''>{camp.Location}</span></div>
                                    </div>

                                </div>
                                <div>
                                    <Link to={`/details/${camp._id}`}> <button type="button" className="flex btn  items-center justify-center w-full p-3 font-extrabold tracking-wide rounded-md  bg-green-400 hover:bg-green-500"><span className='text-blue-600'><TbListDetails className='text-xl' /></span>Details</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default Available;