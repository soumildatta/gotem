import React, { useEffect } from "react";
import UserRequestCards from "./UserRequestCards";
import CurrentRequest from "./CurrentRequest";
import RequestRideButton from "./RequestRideButton";
import ThEdgeAligned from "../../shared/ThEdgeAligned";
import useFetchRequests from "../../hooks/useFetchRequests";

const UserDashboard = () => {
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#ffffff";
  }, []);

  const { requests, currentRequest } = useFetchRequests({ isDriver: false });

  const hasCurrentRide = () => {
    return currentRequest === undefined;
  };

  const handleCancel = () => {
    console.log();
  };

  const RenderRideDetails = () => {
    return (
      <div className="my-8 mx-6 text-center">
        {hasCurrentRide() ? (
          <RequestRideButton />
        ) : (
          <CurrentRequest ride={currentRequest} handleCancel={handleCancel} />
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
                  {requests.map(
                    (request) =>
                      request.completed && (
                        <UserRequestCards key={request.id} requests={request} />
                      )
                  )}
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
