import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useParticipantData from "../../../Hooks/useParticipantData";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const CheckoutForm = () => {
    const { user } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [participantData] = useParticipantData();
    const { id } = useParams()
    const payAbleCamp = participantData.find(camp => camp._id == id);
    const CampName = payAbleCamp.CampName;
    const campId = payAbleCamp._id
    const price = payAbleCamp.CampFees;


    useEffect(() => {
      if(price > 0){
        axiosSecure.post('/create-payment-intent', { price: price })
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
      }
    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }

        // Confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "Anonymous",
                    name: user?.displayName || "Anonymous"
                }
            }
        })
        if (confirmError) {
            console.log('Confirm Error')
        } else {
            console.log('PaymentIntent', paymentIntent)
            if (paymentIntent.status === "succeeded") {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment Successfull..!",
                    text: `Transaction ID: ${paymentIntent.id}`,
                    showConfirmButton: false,
                    timer: 6500
                });
                console.log('Transaction Id: ', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // Save the payment in the database
                const payment = {
                    CampName: CampName,
                    Email: user.email,
                    TransactionId: paymentIntent.id,
                    CampFees : price,
                    Date: new Date(),
                    CampId: campId,
                    PaymentStatus: 'Paid',
                    ConfirmationStatus: 'Pending',
                }
               const res = await axiosSecure.post('/payments', payment)
               console.log('Payment saved',res);
            }
            
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#0A0E05',
                                '::placeholder': {
                                    color: '#0A0E05',
                                },
                            },
                            invalid: {
                                color: '#0A0E05',
                            },
                        },
                    }}
                />
                <div className="-mb-16 mt-16  card-body">
                    <button className="px-5 py-1 btn bg-green-500 font-semibold text-xl" type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                    <p className="text-red-600 py-2">{error}</p>
                </div>
                {transactionId && <p className="text-green-600 mt-6"><span className="font-bold">Your transaction Id:</span> {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;