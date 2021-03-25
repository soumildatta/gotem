import React from "react";
import RideInfoSkeleton from "../../shared/RideInfoSkeleton";

const CurrentRequest = ({ ride, handleClick }) => {
  const rideInfo = {
    status: ride.rideStatus,
    time: ride.time,
    driver: ride.driver,
  };

  return (
    <RideInfoSkeleton
      title="Current Request"
      destination={ride.destination}
      rideInfo={rideInfo}
      handleClick={handleClick}
    />
  );
};

export default CurrentRequest;
