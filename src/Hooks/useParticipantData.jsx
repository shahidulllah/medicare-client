import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useParticipantData = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

   const {refetch, data: participantData = []} = useQuery({
        queryKey: ['participantInfo', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/participants`)
            return res.data;
        }
   })
  return[participantData,refetch]
};

export default useParticipantData;