import React, { useState, useEffect } from "react";
import RequestCards from "./RequestCards";
import AcceptedRequestCard from "./AcceptedRequestCard";
import { db } from "../../firebase";
const Requests = () => {
  // changes the <html> bgColor on mount
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#ffffff";
  }, []);
  const [rideStatus, setRideStatus] = useState("On My Way");
  const [requestsData, setRequestsData] = useState([]);

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
  }, []);

  const rideRequest = {
    time: "01/22/33 at 10:30am",
    rideStatus: rideStatus,
    name: "Smol Boi",
    destination: "Large Hospital, Mippississi",
    riderAddress: "Smol House place thing",
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

  return (
    <div className="flex flex-col">
      <div className="my-8 mx-6 text-center">
        <AcceptedRequestCard
          request={rideRequest}
          handleClick={handleStatusChange}
        />
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
                  <RequestCards key={data.id} data={data} />
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
