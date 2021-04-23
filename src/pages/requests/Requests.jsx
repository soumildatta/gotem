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
  const [rideStatus, setRideStatus] = useState("On My Way");
  const [requestsData, setRequestsData] = useState([]);
  const [rideRequest, setRideRequest] = useState({});

  const ref = db.collection("Requests");

  // retrieve requests from firebase
  function getRequests() {
    ref
      .where("driver", "==", "")
      .where("completed", "==", false)
      .onSnapshot((querySnapshot) => {
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

  // updates the document according to the id of the
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
    // remove accepted request from current list
    setRequestsData(
      requestsData.filter((obj) => {
        return obj.id !== id;
      })
    );
  };

  // function called when the arrived button is clicked
  const handleArrived = () => {
    const ref = db.collection("Requests").doc(rideRequest.id);

    // update the status and the driverCompleted values accordingly
    ref.update({
      status: "Arrived",
      driverCompleted: "true",
    });

    // determine if both userCompleted and driverCompleted values are true
    // if true, then update the completed field to true, which completes the entire ride
    ref.get().then(function (doc) {
      if (doc.exists) {
        if (
          doc.data().userCompleted === "true" &&
          doc.data().driverCompleted === "true"
        ) {
          ref.update({
            completed: "true",
          });
          // since ride is completed, there is no more current ride, thus set ride request to empty
          setRideRequest({});
        }
      }
    });
  };

  // function called when cancel button clicked
  const handleCancel = () => {
    // first, let driver confirm that they want to cancel the ride
    if (window.confirm(`Cancel ride by ${rideRequest.passengerName}?`)) {
      // remove driver from the specific ride so that it can be assigned to someone else, and set status to none
      db.collection("Requests")
        .doc(rideRequest.id)
        .update({
          driver: "",
          driverName: "",
          status: "",
        })
        .then(() => {
          // since there is no current request anymore, set the current ride request to empty
          setRideRequest({});
        });
    }
  };

  // function called when button is clicked. Updates status to waiting
  const handleWaiting = () => {
    db.collection("Requests").doc(rideRequest.id).update({
      status: "Waiting",
    });
  };

  // function called when button is clicked. Updates status to En Route
  const handleEnRoute = () => {
    db.collection("Requests").doc(rideRequest.id).update({
      status: "En Route",
    });
  };

  const handleStatusChange = (button) => {
    if (button !== "Cancel") {
      if (window.confirm(`Change status to "${button}"?`)) {
        setRideStatus(button);
      }
    } else {
      if (
        window.confirm("Are you sure you want to cancel this user's request?")
      ) {
        setRideStatus("Cancelled");
      }
    }
  };
  // function to keep accepted ride card persistent on page
  const persistRequest = () => {
    ref
      .where("driver", "==", currentUser.email)
      .where("completed", "==", false)
      .onSnapshot((querySnapshot) => {
        const item = [];
        querySnapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });

        const reduceditem = arrayToObject(item);
        setRideRequest(reduceditem);
      });
  };

  // converts an array to an object which is used by the persist request function
  const arrayToObject = (arr) =>
    arr.reduce((obj, item) => {
      obj = item;
      return obj;
    }, {});

  // html for the page
  // if ride request is empty, then do not show the current ride card
  return (
    <div className="flex flex-col">
      <div className="my-8 mx-6 text-center">
        {Object.keys(rideRequest).length !== 0 && (
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
                  <RequestCards // displays request cards
                    key={data.id}
                    data={data}
                    acceptRequest={acceptRequest}
                    disableButton={
                      Object.keys(rideRequest).length !== 0 &&
                      rideRequest.completed === false
                    }
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
