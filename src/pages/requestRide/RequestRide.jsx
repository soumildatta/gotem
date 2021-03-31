import React, { useState } from "react";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router";

// there's too much stuff in this file, should probably be broken out into separate components (but who cares tbh)
const RequestRide = () => {
  const { currentUser } = useAuth();

  const [input, setInput] = useState({
    location: "",
    hospital: "",
    info: "",
    date: "",
    time: "",
  });

  const history = useHistory();
  const goToDashboard = () => {
    history.push("/dashboard");
  };

  const hasEmptyInput = () => {
    return (
      input.location !== "" &&
      input.hospital !== "" &&
      input.date !== "" &&
      input.time !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasEmptyInput()) {
      db.collection("Requests")
        .add({
          user: currentUser.email,
          location: input.location,
          hospital: input.hospital,
          info: input.info,
          date: input.date,
          time: input.time,
          completed: false,
          driver: "",
          status: "",
          price: "",
        })
        .catch((error) => {
          // prolly need a better way to handle the errors. or we could just make the users open up the console ya know
          console.error("error occured: ", error);
        });
    }
    goToDashboard();
  };

  return (
    <div className="min-h-screen -mt-20 flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-10">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 flex justify-left pt-32">
          Request a Ride
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-0 space-y-6">
            <div className="flex flex-col">
              <label htmlFor="info">Info:</label>
              <select
                onChange={(e) => setInput({ ...input, info: e.target.value })}
                defaultValue=""
                name="info"
                id="info"
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              >
                <optgroup label="Info">
                  <option value="" disabled>
                    (Optional)
                  </option>
                  <option value="fine">I'm probably fine</option>
                  <option value="not">I'm not fine</option>
                  <option value="dying">I'm probably dying</option>
                  <option value="definite">I'm definitely dying</option>
                  <option value="dead">I'm already dead</option>
                </optgroup>
              </select>
            </div>
            <div>
              <label htmlFor="your-location">Your location</label>
              <input
                onChange={(e) =>
                  setInput({ ...input, location: e.target.value })
                }
                id="your-location"
                name="location"
                type="text"
                required
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  input.location === "" ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                placeholder="Your location"
              ></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="info">Available Hospitals:</label>
              <select
                onChange={(e) =>
                  setInput({ ...input, hospital: e.target.value })
                }
                defaultValue=""
                name="available-hospitals"
                id="available-hospitals"
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  input.hospital === "" ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
              >
                <optgroup label="Available Hospitals">
                  <option value="" disabled>
                    (Required)
                  </option>
                  <option value="bruh">bruh hospital</option>
                  <option value="emerge">emergen-c hospital</option>
                  <option value="uh">uh oh wrong arm hospital</option>
                </optgroup>
              </select>
            </div>

            <div className="flex justify-between flex-col md:flex-row">
              <div className="w-1/2 mr-2 min-w-min">
                <label htmlFor="date">Ride Date:</label>
                <input
                  required
                  onChange={(e) => setInput({ ...input, date: e.target.value })}
                  type="date"
                  id="date"
                  className={`appearance-none relative block w-full px-3 py-2 border ${
                    input.date === "" ? "border-red-500" : "border-gray-300"
                  } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                />
              </div>
              <div className="w-1/2 md:ml-2 min-w-min">
                <label htmlFor="time">Ride Time:</label>
                <input
                  required
                  onChange={(e) => setInput({ ...input, time: e.target.value })}
                  type="time"
                  id="time"
                  className={`appearance-none relative block w-full px-3 py-2 border ${
                    input.time === "" ? "border-red-500" : "border-gray-300"
                  } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
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
                type="submit"
                className="group relative w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-2 ml-2"
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
