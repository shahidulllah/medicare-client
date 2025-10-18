import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { RiPriceTagLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Available = () => {
  const [campData, setCampData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [totalCamps, setTotalCamps] = useState(0);
  const [campsPerPage, setCampsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPages = Math.ceil(totalCamps / campsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axiosSecure
      .get(`/camps?page=${currentPage}&size=${campsPerPage}`)
      .then((res) => {
        setCampData(res.data.camps);
        setTotalCamps(res.data.totalCamps);
      });
  }, [currentPage, campsPerPage, axiosSecure]);

  const handleCampsPerPage = (e) => {
    const intPage = parseInt(e.target.value);
    setCampsPerPage(intPage);
    setCurrentPage(0);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-4 lg:mx-20">
      <SectionTitle
        heading={"Available Medical Camps"}
        description={
          'Objectively optimize intermandated quality vectors after efficient expertise. Competently architect multidisciplinary "outside the box" thinking before cooperative users. Appropriately promote fully.'
        }
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 mb-12">
        {campData.map((camp) => (
          <div key={camp._id} className="rounded-2xl shadow-2xl border-2">
            <img
              src={camp.Image}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-80"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide text-green-600 font-roboto">
                  {camp.CampName}
                </h2>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between font-roboto">
                  <div className="flex items-center">
                    <RiPriceTagLine className="mr-2"></RiPriceTagLine>{" "}
                    <span className="font-bold mr-2">Professional:</span>{" "}
                    <span className="">{camp.HealthcareProfessional}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between font-roboto">
                  <div className="flex items-center">
                    <RiPriceTagLine className="mr-2"></RiPriceTagLine>{" "}
                    <span className="font-bold mr-2">Fees:</span>{" "}
                    <span className="">{camp.CampFees}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between font-roboto">
                  <div className="flex items-center">
                    <RiPriceTagLine className="mr-2"></RiPriceTagLine>{" "}
                    <span className="font-bold mr-2">Participants:</span>{" "}
                    <span className="">{camp.ParticipantCount}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between font-roboto">
                  <div className="flex items-center">
                    <RiPriceTagLine className="mr-2"></RiPriceTagLine>{" "}
                    <span className="font-bold mr-2">Date:</span>{" "}
                    <span className="">{camp.DateAndTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between font-roboto">
                  <div className="flex items-center">
                    <RiPriceTagLine className="mr-2"></RiPriceTagLine>{" "}
                    <span className="font-bold mr-2">Address:</span>{" "}
                    <span className="">{camp.Location}</span>
                  </div>
                </div>
              </div>
              <div>
                <Link to={`/details/${camp._id}`}>
                  {" "}
                  <button
                    type="button"
                    className="flex btn  items-center justify-center w-full p-3 font-extrabold tracking-wide rounded-md  bg-green-400 hover:bg-green-500"
                  >
                    <span className="text-blue-600">
                      <TbListDetails className="text-xl" />
                    </span>
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center p-12">
        <button onClick={handlePreviousPage} className="px-5 m-2 btn">
          Previous
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`${
              currentPage === page && "bg-green-300 hover:bg-green-400"
            } px-5 m-2 btn`}
            key={page}
          >
            {page + 1}
          </button>
        ))}
        <button onClick={handleNextPage} className="px-5 m-2 btn">
          Next
        </button>
        <select
          onChange={handleCampsPerPage}
          value={campsPerPage}
          className="px- border"
          name=""
          id=""
        >
          <option value="6">6</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default Available;
