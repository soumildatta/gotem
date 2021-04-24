import React from "react";
import RideInfoSkeleton from "../../shared/RideInfoSkeleton";

// component for displaying the current request card through the RideInfoSkeleton similar to accepted ride requests for the driver
const CurrentRequest = ({ ride, handleCancel, handleComplete, handleEdit }) => {
  const rideInfo = {
    status: ride.status,
    time: { date: ride.date, time: ride.time },
    driver: ride.driverName,
  };

  return (
    <RideInfoSkeleton
      title="Current Request"
      destination={ride.hospital}
      rideInfo={rideInfo}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      handleEdit={handleEdit}
    />
  );
};

export default CurrentRequest;
