import React from "react";
import RideInfoSkeleton from "../../shared/RideInfoSkeleton";

const AcceptedRequestCard = ({ ride, handleClick, handleArrived, handleCancel }) => {
  const rideInfo = {
    time: { date: ride.date, time: ride.time },
    name: ride.passengerName,
    status: ride.status,
  };

  return (
    <div>
      <RideInfoSkeleton
        title="Current Rider"
        destination={ride.hospital}
        riderAddress={ride.location}
        rideInfo={rideInfo}
        handleClick={handleClick}
        handleArrived={handleArrived}
        handleCancel={handleCancel}
        isDriver
      />
    </div>
  );
};

export default AcceptedRequestCard;
