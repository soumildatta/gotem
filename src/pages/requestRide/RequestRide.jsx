import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import useFetchRequests from "../../hooks/useFetchRequests";
import useIsDriver from "../../hooks/useIsDriver";

const RequestRide = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const isEditMode = query.get("edit") === "true";

  const { currentUser } = useAuth();
  const { isDriver } = useIsDriver();
  const { currentRequest } = useFetchRequests(isDriver);

  const [input, setInput] = useState({
    location: "",
    hospital: "",
    info: "",
    date: "",
    time: "",
  });

  // if the user arrived at the page through the edit button, then display the items from the current request inside the input fields
  useEffect(() => {
    if (isEditMode) {
      setInput({
        location: currentRequest.location,
        hospital: currentRequest.hospital,
        info: currentRequest.info,
        date: currentRequest.date,
        time: currentRequest.time,
      });
    }
  }, [currentRequest, isEditMode]);

  const history = useHistory();
  const goToDashboard = () => {
    history.push("/dashboard");
  };

  const hasProperInput = () => {
    if (!isEditMode && Boolean(currentRequest)) {
      return false;
    }
    return (
      input.location !== "" &&
      input.hospital !== "" &&
      input.date !== "" &&
      input.time !== ""
    );
  };

  // function called when the submit button clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasProperInput()) {
      // if user is editing a current request, remove the request and create a new one (will not affect driver becauase no driver assigned yet)
      if (isEditMode) {
        db.collection("Requests")
          .doc(currentRequest.id)
          .delete()
          .catch(() => {
            window.location.reload();
          });
      }

      // store the values from the input fields in firebase
      db.collection("Requests")
        .add({
          user: currentUser.email,
          passengerName: currentUser.displayName,
          location: input.location,
          hospital: input.hospital,
          date: input.date,
          time: input.time,
          completed: false,
          driver: "",
          status: "",
          price: 10,
        })
        .then(() => {
          // After the items have been stored, return to dashboard
          goToDashboard();
        })
        .catch((error) => {
          console.error("error occured: ", error);
        });
    }
  };

  // html for displaying the page
  return (
    <div className="min-h-screen -mt-20 flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-10">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 flex justify-left pt-32">
          Request a Ride
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-0 space-y-6">
            <div>
              <label htmlFor="your-location">Your location</label>
              <input
                onChange={(e) =>
                  setInput({ ...input, location: e.target.value })
                }
                value={input.location}
                id="your-location"
                name="location"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Your location"
              ></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="info">Available Hospitals:</label>
              <select
                onChange={(e) =>
                  setInput({ ...input, hospital: e.target.value })
                }
                value={input.hospital}
                defaultValue=""
                name="available-hospitals"
                id="available-hospitals"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              >
                <option value="" disabled>
                  (Required)
                </option>
                <optgroup label="Available Hospitals">
                  <option value="Oxford Hospital">Oxford Hospital</option>
                  <option value="Baptist Memorial Hospital">
                    Baptist Memorial Hospital
                  </option>
                  <option value="ABC Kidz Clinic">ABC Kidz Clinic</option>
                  <option value="Urget Care Clinic of Oxford">
                    Urget Care Clinic of Oxford
                  </option>
                  <option value="Ross Family Dental">Ross Family Dental</option>
                  <option value="Walmart Vision Center">
                    Walmart Vision Center
                  </option>
                  <option value="Oxford Family Clinic">
                    Oxford Family Clinic
                  </option>
                  <option value="University Health Services">
                    University Health Services
                  </option>
                  <option value="Endurance Physical Therapy">
                    Endurance Physical Therapy
                  </option>
                </optgroup>
              </select>
            </div>

            <div className="flex justify-between flex-col md:flex-row">
              <div className="w-full mr-2 min-w-min">
                <label htmlFor="date">Ride Date:</label>
                <input
                  value={input.date}
                  required
                  onChange={(e) => setInput({ ...input, date: e.target.value })}
                  type="date"
                  id="date"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="w-full md:ml-2 min-w-min">
                <label htmlFor="time">Ride Time:</label>
                <input
                  value={input.time}
                  required
                  onChange={(e) => setInput({ ...input, time: e.target.value })}
                  type="time"
                  id="time"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between py-2">
              <button
                onClick={goToDashboard}
                type="button"
                className="group relative w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-2 mr-2"
              >
                Cancel
              </button>
              <button
                disabled={!isEditMode && Boolean(currentRequest)}
                type="submit"
                className={`group relative w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                  !isEditMode && Boolean(currentRequest)
                    ? "bg-gray-400"
                    : "bg-blue-500"
                } ${
                  (!Boolean(currentRequest) || isEditMode) &&
                  "hover:bg-blue-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-2 ml-2`}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestRide;
