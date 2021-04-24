import React from "react";
import CardButton from "./CardButton";

const cardHeaders = new Set(["status", "time", "driver", "name"]);

//basic format for current request card for passengers and drivers
const RideInfoSkeleton = ({
  title,
  destination,
  riderAddress,
  rideInfo,
  isDriver,
  handleEdit,
  handleCancel,
  handleComplete,
  handleArrived,
  handleEnRoute,
  handleWaiting,
}) => {
  // Drivers and users have different info rideInfo
  const renderRideInfo = Object.entries(rideInfo).map(([key, value]) => {
    const subtitle = cardHeaders.has(key)
      ? key.charAt(0).toUpperCase() + key.slice(1)
      : "";

    return (
      <div key={key} className="mx-2">
        <p>
          {subtitle}: &nbsp;
          <span className="font-semibold">
            {subtitle === "Time" ? (
              <>
                {value.date} at {value.time}
              </>
            ) : (
              <>{value}</>
            )}
          </span>
        </p>
      </div>
    );
  });

  // renders buttons for the driver if the user is a driver
  const driverButtons = () => {
    return (
      <div className="flex justify-center mb-2">
        <CardButton handleClick={handleArrived} text="Arrived" color="green" />
        <CardButton
          handleClick={handleEnRoute}
          text="En route"
          color="yellow"
        />
        <CardButton handleClick={handleWaiting} text="Waiting" color="yellow" />
        <CardButton handleClick={handleCancel} text="Cancel" color="red" />
      </div>
    );
  };

  // renders the buttons for the passenger if the user is a passenger
  const userButtons = () => {
    return (
      <div className="flex justify-center mb-2">
        <CardButton
          handleClick={handleEdit}
          id="edit"
          text="Edit Ride"
          color="blue"
        />
        <CardButton
          handleClick={handleComplete}
          id="complete"
          text="Ride Complete"
          color="green"
        />
        <CardButton
          handleClick={handleCancel}
          id="cancel"
          text="Cancel Ride"
          color="red"
        />
      </div>
    );
  };

  //   Drivers and users have different sets of visible buttons
  const renderButtons = () => {
    return <div>{isDriver ? driverButtons() : userButtons()}</div>;
  };

  // render the address
  const renderRiderAddress = () => {
    return (
      Boolean(riderAddress) && (
        <p className="my-2">
          Rider Address: &nbsp;
          <span className="font-medium">{riderAddress}</span>
        </p>
      )
    );
  };

  // html fo rthe page
  return (
    <div className="border rounded-md border-gray-700">
      <div className="text-3xl my-2">{title}:</div>
      <p className="my-2">
        Destination: &nbsp;
        <span className="font-medium">{destination}</span>
      </p>

      {/* User address only displayed on driver dashboard */}
      {renderRiderAddress()}

      <div className="flex justify-around">{renderRideInfo}</div>
      <div className="flex justify-center mb-2 mt-3">{renderButtons()}</div>
    </div>
  );
};

export default RideInfoSkeleton;
