import React from "react";
import UserRequestCards from "./UserRequestCards";
import CurrentRequest from "./CurrentRequest";
import RequestRideButton from "./RequestRideButton";
import ThEdgeAligned from "../../shared/TableHeader/ThEdgeAligned";
import { render } from "@testing-library/react";

const UserDashboard = () => {
  const currentRequest = {
    rideStatus: "On the way",
    driver: "Big Boi",
    destination: "Hello Kitty Hospital, HAHA 12345",
  };

  const ride = Object.keys(currentRequest).length === 0;
  const RenderRideDetails = () => {
    return (
      <div className="my-8 mx-6 text-center">
        {!ride ? (
          <CurrentRequest ride={currentRequest} />
        ) : (
          <RequestRideButton />
        )}
      </div>
    );
  };

  return (
    <div>
      <RenderRideDetails />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <ThEdgeAligned header1="Driver" header2="Price" />
                <tbody className="bg-white divide-y divide-gray-200">
                  <UserRequestCards />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
