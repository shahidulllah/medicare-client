import { useContext } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data;
        }
    })
   
    return (
        <div className="p-4  lg:p-12 w-full flex justify-center">
            <div className="container p-4 lg:p-10 mx-auto text-blue-400 bg-gray-200 rounded-lg">
                <h2 className="mb-5 text-3xl text-center font-semibold text-green-600 leading-tight  -mt-6">Payment History ({payments.length})</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead className="bg-green-700">
                            <tr className="text-center font-bold text-slate-300">
                                <th className="p-3 text-left">Camp Name</th>
                                <th className="p-3">Camp Fees</th>
                                <th className="p-3">Payment Status</th>
                                <th className="p-3">Confirmation Status</th>
                                <th className="p-3">Date</th>
                                <th className="p-3 ">Transaction ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map(pay => <tr key={pay._id} className="border-b border-opacity-20 border-green-700 bg-gray-900">
                                    <td className="p-3 text-left">
                                        <p className="text-purple-500 font-semibold">{pay.CampName}</p>
                                    </td>
                                    <td className="p-3 text-center">
                                        <p>$ {pay.CampFees}</p>
                                    </td>

                                    <td className="p-3 text-center">
                                    <p>{pay.PaymentStatus}</p>
                                    </td>
                                    <td className="p-3 text-center">
                                        <p>{pay.ConfirmationStatus}</p>
                                    </td>
                                    <td className="p-3 text-center">
                                        <p>{pay.Date}</p>
                                    </td>
                                    <td className="p-3 text-center">
                                        <p>{pay.TransactionId}</p>
                                    </td>
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