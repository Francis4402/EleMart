import { useEffect, useState } from "react";

import UseAxiosSecure from "../Axiosfiles/useAxiosSecure";
import UseAuth from "../Hooks/useAuth";
import useCart from "../Hooks/useCart";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import Swal from "sweetalert2";


const CheckOutForm = ({isClose}) => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    const {user} = UseAuth();
    const [carts, refetch] = useCart();
    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);

    const totalprice = carts.reduce((total, item) => total + item.price * item.quantity, 0)

    useEffect(() => {
        if(totalprice > 0) {
            axiosSecure.post('/create-payment-intent', {price: totalprice})
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                }).catch(error => {
                console.error('Error creating payment intent:', error);
                setError('Error creating payment intent. Please try again.');
            });
        } else {
            setError('Total price must be greater than 0.');
        }
    }, [axiosSecure, totalprice])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if(error) {
            console.log('payment error', error)
            setError(error.message);
        } else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            }
        )

        if(confirmError){
            console.log('confirm error')
        } else {
            console.log('Payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: totalprice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cardIds: carts.map(item => item.name),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res.data);
                refetch();
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the payment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/paymenthistory')
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="justify-center flex">
                <button onClick={isClose} className="btn btn-sm btn-primary mt-5 w-full" type="submit" disabled={!stripe || !clientSecret || processing}>
                    {processing ? 'Processing...' : 'Pay'}
                </button>
            </div>

            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        </form>
    );
};

CheckOutForm.propTypes = {
    isClose: PropTypes.func,
}


export default CheckOutForm;