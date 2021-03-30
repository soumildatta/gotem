import React from "react";

const RequestCards = ({ data }) => {
  return (
    <tr>
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{data.user}</div>
            <div className="text-sm text-gray-500">{data.info}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{data.location}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {/* these are the same span, prolly better if we make things like this reusable considering we don't know what we'll be building in the future */}
        {/* also, best practice is to break this logic out into a function above and pass data.status as a param returning the correct span */}
        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full border border-black text-black">
          {data.date} at {data.time}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button className="px-8 py-2 inline-flex text-s leading-5 font-semibold rounded-full bg-green-100 hover:bg-green-200 text-green-800 mr-3">
          Accept
        </button>
        <button className="px-8 py-2 inline-flex text-s leading-5 font-semibold rounded-full bg-red-100 hover:bg-red-200 text-red-800">
          Decline
        </button>
      </td>
    </tr>
  );
};
export default RequestCards;
