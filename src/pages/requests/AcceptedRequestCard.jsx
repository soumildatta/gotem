import React from "react";
import RideInfoSkeleton from "../../shared/RideInfoSkeleton";

const AcceptedRequestCard = ({ ride, handleClick }) => {
  const rideInfo = {
    time: { date: ride.date, time: ride.time },
    name: ride.passenger,
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
        isDriver
      />
    </div>
  );
};

export default AcceptedRequestCard;
