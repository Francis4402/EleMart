import {useQuery} from "@tanstack/react-query";
import UseAxiosSecure from "../Axiosfiles/useAxiosSecure.jsx";
import UseAuth from "../Hooks/useAuth.jsx";


const PaymentHistory = () => {
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div className="justify-center flex">
            <div className="container">
                <h1 className="text-3xl">Total Payments: {payments.length}</h1>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>$ {payment.price}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.date}</td>
                                <td>{payment.status}</td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;