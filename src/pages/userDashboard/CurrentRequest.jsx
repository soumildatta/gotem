import React from "react";
import RideInfoSkeleton from "../../shared/RideInfoSkeleton";

const CurrentRequest = ({ ride, handleClick }) => {
  const rideInfo = {
    status: ride.status,
    time: { date: ride.date, time: ride.time },
    driver: ride.driver,
  };

  return (
    <RideInfoSkeleton
      title="Current Request"
      destination={ride.hospital}
      rideInfo={rideInfo}
      handleClick={handleClick}
    />
  );
};

export default CurrentRequest;
