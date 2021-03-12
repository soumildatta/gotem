import React from "react";

const UserRequestCards = () => {
  return (
    <tr>
      <td className="px-8 py-4">
        <div className="flex items-center">
          <div>
            <div className="text-md font-medium text-gray-900">TEMP</div>
            <div className="text-sm text-gray-500">
              <strong>To: </strong>
              TEMP
            </div>
            <div className="text-sm text-gray-500">
              <strong>From: </strong>
              TEMP
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 py-1 mb-1 inline-flex text-xl leading-5 font-semibold rounded-full bg-green-100 text-green-800 ">
          TEMP
        </span>
        <div className="text-sm text-gray-500">TEMP</div>
      </td>
    </tr>
  );
};

export default UserRequestCards;
