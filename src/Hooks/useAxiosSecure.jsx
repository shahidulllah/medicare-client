import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const axiosSecure = axios.create({
    // baseURL:"https://ass12-medicare-server.vercel.app"
    baseURL:"http://localhost:5000"
    
}) 
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stop by interceptor', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error){
        return Promise.reject(error)
    })

    // intercepts 401 and 403
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error)=>{
        const status = error.response.status;
        // console.log('staus code error', status);
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error);
    })

   return axiosSecure;
};

export default useAxiosSecure;