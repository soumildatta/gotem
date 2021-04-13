import React, { useState, useEffect } from "react";
import RequestCards from "./RequestCards";
import AcceptedRequestCard from "./AcceptedRequestCard";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

const Requests = () => {
  // changes the <html> bgColor on mount
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#ffffff";
  }, []);
  const { currentUser } = useAuth();
  const [rideStatus, setRideStatus] = useState("On My Way");
  const [requestsData, setRequestsData] = useState([]);
  const [rideRequest, setRideRequest] = useState({});

  const ref = db.collection("Requests");

  function getRequests() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setRequestsData(items);
    });
  }
  useEffect(() => {
    getRequests();
    persistRequest();
  }, []);

  const acceptRequest = (id) => {
    const request = requestsData.find((obj) => {
      return obj.id === id;
    });
    db.collection("Requests").doc(id).update({
      driver: currentUser.email,
      driverName: currentUser.displayName,
    });
    setRideRequest(request);
  };

  const handleCancel = () => {
    if (window.confirm(`Delete ride by ${rideRequest.passengerName}?`)) {
      db.collection("Requests")
        .doc(rideRequest.id)
        .update({
          driver: "",
          driverName: "",
        })
        .then(() => {
          setRideRequest({});
        });
    }
  };

  const handleStatusChange = (button) => {
    if (button !== "Cancel") {
      if (window.confirm(`Change status to "${button}"?`)) {
        setRideStatus(button);
        // firestore stuff here
      }
    } else {
      // Request is cancelled by driver ??
      if (
        window.confirm("Are you sure you want to cancel this user's request?")
      ) {
        setRideStatus("Cancelled");
      }
    }
  };
  const persistRequest = () => {
    const item = [];
    ref.where("driver", "==", currentUser.email).onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      const reduceditem = arrayToObject(item);
      setRideRequest(reduceditem);
    });
  };

  const arrayToObject = (arr) =>
    arr.reduce((obj, item) => {
      obj = item;
      return obj;
    }, {});

  return (
    <div className="flex flex-col">
      <div className="my-8 mx-6 text-center">
        {Object.keys(rideRequest).length !== 0 && (
          <AcceptedRequestCard
            ride={rideRequest}
            handleClick={handleStatusChange}
            handleCancel={handleCancel}
          />
        )}
      </div>
      <h2 className="mt-6 text-center text-4xl font-medium ml-3 mb-4 text-gray-900 flex justify-left ">
        Requests
      </h2>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {/* these are the same th, prolly better if we make things like this reusable considering we don't know what we'll be building in the future */}
                  <th
                    scope="col"
                    className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Time
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Options</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {requestsData.map((data) => (
                  <RequestCards
                    key={data.id}
                    data={data}
                    acceptRequest={acceptRequest}
                    disableButton={Object.keys(rideRequest).length !== 0}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
