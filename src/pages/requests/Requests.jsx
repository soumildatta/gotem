import React, { useState, useEffect } from "react";
import RequestCards from "./RequestCards";
import AcceptedRequestCard from "./AcceptedRequestCard";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

const Requests = () => {
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#ffffff";
  }, []);

  const { currentUser } = useAuth();
  const [showRide, setShowRide] = useState(false);
  const [rideStatus, setRideStatus] = useState("On My Way");
  const [requestsData, setRequestsData] = useState([]);
  const [rideRequest, setRideRequest] = useState({});

  const ref = db.collection("Requests");

  function getRequests() {
    ref.where("driver", "==", "").onSnapshot((querySnapshot) => {
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
      status: "",
      driver: currentUser.email,
      driverName: currentUser.displayName,
    });
    setRideRequest(request);
    setShowRide(true);

    // remove accepted request from current list
    setRequestsData(
      requestsData.filter((obj) => {
        return obj.id !== id;
      })
    );
  };

  const handleArrived = () => {
    if (window.confirm(`Please confirm arrival.`)) {
      const ref = db.collection("Requests").doc(rideRequest.id);

      ref.update({
        status: "Arrived",
        driverCompleted: "true",
      });

      ref.get().then(function (doc) {
        if (doc.exists) {
          if (doc.data().userCompleted === doc.data().driverCompleted) {
            ref.update({
              completed: "true",
            });
            setShowRide(false);
          }
        }
      });
    }
  };

  const handleCancel = () => {
    if (window.confirm(`Cancel ride by ${rideRequest.passengerName}?`)) {
      db.collection("Requests")
        .doc(rideRequest.id)
        .update({
          driver: "",
          driverName: "",
          status: "",
        })
        .then(() => {
          setRideRequest({});
          setShowRide(false);
        });
    }
  };

  const handleWaiting = () => {
    db.collection("Requests").doc(rideRequest.id).update({
      status: "Waiting",
    });
  };

  const handleEnRoute = () => {
    db.collection("Requests").doc(rideRequest.id).update({
      status: "En Route",
    });
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
        {showRide === true && (
          <AcceptedRequestCard
            ride={rideRequest}
            handleClick={handleStatusChange}
            handleArrived={handleArrived}
            handleCancel={handleCancel}
            handleWaiting={handleWaiting}
            handleEnRoute={handleEnRoute}
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
                    disableButton={showRide}
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