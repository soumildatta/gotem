import React from "react";
import PaymentCard from "./PaymentCard";

const DriverPayments = () => {
  const earnings = [
    {
      id: 1,
      name: "Jane Cooper",
      to: "Baptist Memorial Hospital, MS 38655",
      from: "1253 Mansion House Manor, Poor Place, MS",
      date: "25/32/1242",
      earnings: 18.0,
    },
    {
      id: 2,
      name: "Haloco Lapcopaote",
      to: "Memorial Hospital of Baptist, MS 38657",
      from: "1253 Cottage Hut House, Rich Place, MS",
      date: "23/02/2623",
      earnings: 78.0,
    },
  ];

  const lifetimeEarning = earnings.reduce(
    (sum, obj) => (sum += obj.earnings),
    0
  );

  return (
    <div className="item">
      <div className="text-center">
        <h4 className="mt-20 mb-2 text-lg">Lifetime Earnings:</h4>
        <h1 className="text-5xl">
          ${lifetimeEarning.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h1>
        <h4 className="mt-10 mb-2 text-lg">Payment History:</h4>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ride Info
                    </th>
                    <th
                      scope="col"
                      className="px-8 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Earnings
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {earnings.map((earning) => (
                    <PaymentCard data={earning} key={earning.id} />
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
