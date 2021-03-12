import React from "react";

const CurrentRequest = () => {
  return (
    <div className="border rounded-md border-gray-700 my-8 mx-6 text-center">
      <div className="text-3xl my-2">Current Request:</div>
      <p className="my-2">
        Destination:{" "}
        <span className="font-medium">Hello Kitty Hospital, HAHA 12345</span>
      </p>
      <div className="flex justify-around">
        <div className="mx-2">
          <p>Ride Status:</p>
        </div>
        <div className="mx-2">
          <p>Driver:</p>
        </div>
        <div className="mx-2">
          <p>Other important info</p>
        </div>
      </div>
      <div className="flex justify-center mb-2">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 my-3 mx-2 rounded-md ">
          Edit Ride
        </button>
        <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 my-3 mx-2 rounded-md ">
          Cancel Ride
        </button>
      </div>
    </div>
  );
};

export default CurrentRequest;
