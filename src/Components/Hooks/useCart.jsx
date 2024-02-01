import UseAxiosPublic from '../Axiosfiles/useAxiosPublic';
import UseAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const axiosPublic = UseAxiosPublic();
    const {user} = UseAuth();
    const {refetch, data: carts=[]} = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/cart?email=${user.email}`)
            return res.data;
        }
    })
    return [carts, refetch]
};

export default useCart;