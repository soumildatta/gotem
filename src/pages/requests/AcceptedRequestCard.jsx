import React from "react";
import RideInfoSkeleton from "../../shared/RideInfoSkeleton";

const AcceptedRequestCard = ({
  ride,
  handleClick,
  handleCancel,
  handleWaiting,
  handleEnRoute,
  handleArrived,
}) => {
  // create an object that can be passed in as a singular prop into RideInfoSkeleton
  const rideInfo = {
    time: { date: ride.date, time: ride.time },
    name: ride.passengerName,
    status: ride.status,
  };

  // displays the RideInfoSkeleton
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
        handleWaiting={handleWaiting}
        handleEnRoute={handleEnRoute}
        isDriver
      />
    </div>
  );
};

export default AcceptedRequestCard;
