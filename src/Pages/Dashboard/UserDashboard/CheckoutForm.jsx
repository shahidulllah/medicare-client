import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();

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
                <div className="-mb-8 mt-9  card-body">
                    <button className="px-5 py-1 btn bg-green-500 font-semibold text-xl" type="submit" disabled={!stripe}>
                        Pay
                    </button>
                    <p className="text-red-600 py-2">{error}</p>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;