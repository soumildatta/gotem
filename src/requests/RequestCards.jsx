import React from "react";

const RequestCards = ({ data }) => {
  return (
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">{data.name}</div>
            <div class="text-sm text-gray-500">{data.info}</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">{data.address}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        {data.status == "Emergency" ? (
          <span class="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white">
            {data.status}
          </span>
        ) : (
          <span class="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500 text-white">
            {data.status}
          </span>
        )}
        {/* <span class="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-black">
                      {data.status}
                    </span> */}
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <button class="px-8 py-4 inline-flex text-s leading-5 font-semibold rounded-full bg-green-100 hover:bg-green-200 text-green-800 mr-3">
          Accept
        </button>
        <button class="px-8 py-4 inline-flex text-s leading-5 font-semibold rounded-full bg-red-100 hover:bg-red-200 text-red-800">
          Decline
        </button>
      </td>
    </tr>
  );
};
export default RequestCards;
