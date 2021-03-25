import React from "react";
import RideInfoSkeleton from "../../shared/RideInfoSkeleton";

const AcceptedRequestCard = ({ request, handleClick }) => {
  const rideInfo = {
    time: request.time,
    name: request.name,
    status: request.rideStatus,
  };

  return (
    <div>
      <RideInfoSkeleton
        title="Current Rider"
        destination={request.destination}
        riderAddress={request.riderAddress}
        rideInfo={rideInfo}
        handleClick={handleClick}
        isDriver
      />
    </div>
  );
};

export default AcceptedRequestCard;
