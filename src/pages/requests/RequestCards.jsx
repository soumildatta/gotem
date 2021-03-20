import React from "react";

// you are using 'class' in this file use 'className' instead
const RequestCards = ({ data }) => {
  return (
    <tr>
      <td class="px-4 py-4 whitespace-nowrap">
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
        {/* these are the same span, prolly better if we make things like this reusable considering we don't know what we'll be building in the future */}
        {/* also, best practice is to break this logic out into a function above and pass data.status as a param returning the correct span */}
        {data.status === "Emergency" ? (
          <span class="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white">
            {data.status}
          </span>
        ) : (
          <span class="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500 text-white">
            {data.status}
          </span>
        )}
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
