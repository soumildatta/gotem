import React from "react";
import { Link } from "react-router-dom";

const RequestRideButton = () => {
  return (
    <div className="select-none rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold text-4xl py-10 cursor-pointer">
      <Link to="/request">+ Request a Ride</Link>
    </div>
  );
};

export default RequestRideButton;
