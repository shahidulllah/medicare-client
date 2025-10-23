import { Link, useLoaderData } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { RiPriceTagLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";

const Details = () => {
  const detailsCamp = useLoaderData();
  console.log(detailsCamp);
  return (
    <div className="flex justify-center my-16">
      <Card className="w-full max-w-[60rem] flex-row shadow-2xl bg-green-100">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-6/12 shrink-0 rounded-r-none"
        >
          <img src={detailsCamp.Image} className="h-full w-full object-cover" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 text-3xl text-green-600"
          >
            {detailsCamp.CampName}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {detailsCamp.Description}
          </Typography>
          <div className="space-y-2">
            <div className="flex items-center justify-between font-roboto">
              <div className="flex items-center">
                <RiPriceTagLine className="mr-2"></RiPriceTagLine>{" "}
                <span className="font-bold mr-2">Professional:</span>{" "}
                <span className="">{detailsCamp.HealthcareProfessional}</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-roboto">
              <div className="flex items-center">
                <RiPriceTagLine className="mr-2"></RiPriceTagLine>{" "}
                <span className="font-bold mr-2">Fees:</span>{" "}
                <span className="">{detailsCamp.CampFees}</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-roboto">
              <div className="flex items-center">
                <RiPriceTagLine className="mr-2"></RiPriceTagLine>{" "}
                <span className="font-bold mr-2">Participants:</span>{" "}
                <span className="">{detailsCamp.ParticipantCount}</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-roboto">
              <div className="flex items-center">
                <RiPriceTagLine className="mr-2"></RiPriceTagLine>{" "}
                <span className="font-bold mr-2">Date:</span>{" "}
                <span className="">{detailsCamp.DateAndTime}</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-roboto">
              <div className="flex items-center">
                <RiPriceTagLine className="mr-2"></RiPriceTagLine>{" "}
                <span className="font-bold mr-2">Address:</span>{" "}
                <span className="">{detailsCamp.Location}</span>
              </div>
            </div>
          </div>
          <div>
            <Link to={`/participentInfo/${detailsCamp._id}`}>
              <button
                type="button"
                className="flex btn  items-center justify-center w-full p-3 font-extrabold tracking-wide rounded-md  bg-green-400 hover:bg-green-500 mt-12"
              >
                <span className="text-blue-600">
                  <TbListDetails className="text-xl" />
                </span>
                Join Camp
              </button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Details;
