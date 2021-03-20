import React from "react";

const CurrentRequest = ({ ride }) => {
  return (
    <div className="border rounded-md border-gray-700">
      <div className="text-3xl my-2">Current Request:</div>
      <p className="my-2">
        Destination: &nbsp;
        <span className="font-medium">{ride.destination}</span>
      </p>
      <div className="flex justify-around">
        <div className="mx-2">
          <p>
            Ride Status: &nbsp;
            <span className="font-semibold">{ride.rideStatus}</span>
          </p>
        </div>
        <div className="mx-2">
          <p>
            Driver: &nbsp; <span className="font-semibold">{ride.driver}</span>
          </p>
        </div>
        <div className="mx-2">
          <p>Other important info</p>
        </div>
      </div>
      <div className="flex justify-center mb-2">
        {/* these could be a reusable component */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 my-3 mx-2 rounded-md ">
          Edit Ride
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 my-3 mx-2 rounded-md ">
          Cancel Ride
        </button>
      </div>
    </div>
  );
};

export default CurrentRequest;
