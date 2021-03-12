import React from "react";

const PaymentCard = ({ data }) => {
  return (
    <tr>
      <td className="px-8 py-4">
        <div className="flex items-center">
          <div>
            <div className="text-md font-medium text-gray-900">{data.name}</div>
            <div className="text-sm text-gray-500">
              <strong>To: </strong>
              {data.to}
            </div>
            <div className="text-sm text-gray-500">
              <strong>From: </strong>
              {data.from}
            </div>
          </div>
        </div>
      </td>
      <td className="px-8 py-4 text-right whitespace-nowrap">
        <span className="px-2 py-1 mb-1 inline-flex text-xl leading-5 font-semibold rounded-full bg-green-100 text-green-800 ">
          ${data.earnings}
        </span>
        <div className="text-sm text-gray-500">{data.date}</div>
      </td>
    </tr>
  );
};

export default PaymentCard;
