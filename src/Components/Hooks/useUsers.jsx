import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Axiosfiles/useAxiosSecure";


const useUsers = () => {
 
    const axiosSecure = UseAxiosSecure();

    const {data: allusers = [], refetch} = useQuery({
        queryKey: ['Allusers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    return [allusers, refetch]
};

export default useUsers;