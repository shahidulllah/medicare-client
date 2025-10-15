import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useUser = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext);

    const { data: User, refetch } = useQuery({
        queryKey: [user?.email, 'user'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user.email}`);
            console.log(res.data)
            return res.data;
        }
    })
    return {User, refetch};
};

export default useUser;