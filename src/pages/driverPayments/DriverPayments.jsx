import React, { useMemo } from "react";
import PaymentCard from "./PaymentCard";
import ThEdgeAligned from "../../shared/ThEdgeAligned";
import useFetchRequests from "../../hooks/useFetchRequests";

const DriverPayments = () => {
  const { requests } = useFetchRequests({ isDriver: true });

  const lifetimeEarning = useMemo(() => {
    const val = requests.reduce((sum, obj) => (sum += obj.price), 0);
    // regex adds a comma to the value of the price after every 3 digits
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }, [requests]);

  return (
    <div className="item">
      <div className="text-center">
        <h4 className="mt-20 mb-2 text-lg">Lifetime Earnings:</h4>
        <h1 className="text-5xl">${lifetimeEarning}</h1>
        <h4 className="mt-10 mb-2 text-lg">Payment History:</h4>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <ThEdgeAligned header1="Ride Info" header2="Earnings" />
                <tbody className="bg-white divide-y divide-gray-200">
                  {requests.map((request) => (
                    <PaymentCard request={request} key={request.id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverPayments;
