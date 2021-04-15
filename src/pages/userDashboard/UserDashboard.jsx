import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserRequestCards from "./UserRequestCards";
import CurrentRequest from "./CurrentRequest";
import RequestRideButton from "./RequestRideButton";
import ThEdgeAligned from "../../shared/ThEdgeAligned";
import useFetchRequests from "../../hooks/useFetchRequests";
import { db } from "../../firebase";

const UserDashboard = () => {
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#ffffff";
  }, []);

  const history = useHistory();
  const { requests, currentRequest } = useFetchRequests({ isDriver: false });

  const hasCurrentRide = () => {
    return currentRequest === undefined;
  };

  const handleCancel = () => {
    db.collection("Requests")
      .doc(currentRequest.id)
      .delete()
      .catch(() => {
        window.location.reload();
      });
  };

  const handleComplete = () => {
    let ref = db.collection("Requests").doc(currentRequest.id);

    ref.get().then(function (doc) {
      if (doc.exists) {
        if (doc.data().driver !== ""){
          ref.update({
            userCompleted: "true",
          });
          ref.get().then(function (doc) {
            if (doc.exists) {
              if (doc.data().userCompleted === doc.data().driverCompleted){
                ref.update({
                  completed: "true"
                });
              }
            }
          });
        }
        else{
          alert("You don't have a driver yet, so your ride hasn't been completed."
          + " If you wish to cancel your request, please select 'Cancel Ride' instead.")
        }
      }
    });   
  };

  const handleEdit = () => {
    let ref = db.collection("Requests").doc(currentRequest.id);

    ref.get().then(function (doc) {
      if (doc.exists) {
        if (doc.data().driver === ""){
          history.push("/request?edit=true");
        }
        else{
          alert("You can't edit your request if a driver has already accepted it.")
        }
      }
    });
  };

  const RenderRideDetails = () => {
    return (
      <div className="my-8 mx-6 text-center">
        {hasCurrentRide() ? (
          <RequestRideButton />
        ) : (
          <CurrentRequest
            ride={currentRequest}
            handleCancel={handleCancel}
            handleEdit={handleEdit}
            handleComplete={handleComplete}
          />
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
