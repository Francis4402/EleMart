import useAuth from "./useAuth.jsx";
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import {useQuery} from "@tanstack/react-query";

const UseProfileData = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();

    const {data: users = []} = useQuery({
        queryKey: ['myProfile'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users?email=${user.email}`);
            return res.data;
        }
    })

    return [users]
};

export default UseProfileData;