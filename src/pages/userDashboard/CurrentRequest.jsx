import React from "react";
import RideInfoSkeleton from "../../shared/RideInfoSkeleton";

const CurrentRequest = ({ ride, handleCancel, handleComplete, handleEdit }) => {
  const formatTime = (time) => {
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? "AM" : "PM";
      time[0] = +time[0] % 12 || 12;
    }
    return time.join("");
  };

  const rideInfo = {
    status: ride.status,
    time: { date: ride.date, time: formatTime(ride.time) },
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
