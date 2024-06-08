import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY_PK);
const Payment = () => {
    return (
        <div>
            <div className="text-green-600">
                <SectionTitle heading={'Payment'}></SectionTitle>
            </div>



            <div className="px-16">
                <div className="shadow-2xl p-12 bg-green-100 rounded-xl">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;