import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";



const useCampData = () =>{
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

   const {refetch, data: campData = []} = useQuery({
        queryKey: ['camp', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/camps`)
            return res.data;
        }
   })
  return[campData,refetch]
};

export default useCampData;