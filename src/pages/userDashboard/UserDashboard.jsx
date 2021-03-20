import React from "react";
import UserRequestCards from "./UserRequestCards";
import CurrentRequest from "./CurrentRequest";
import RequestRideButton from "./RequestRideButton";

// you are using 'class' in this file use 'className' instead
const UserDashboard = () => {
  const currentRequest = {
    rideStatus: "On the way",
    driver: "Big Boi",
    destination: "Hello Kitty Hospital, HAHA 12345",
  };

  const ride = Object.keys(currentRequest).length === 0;

  return (
    <div>
      <div className="my-8 mx-6 text-center">
        {/* best to extract this into it's own function and has ride as a param */}
        {!ride ? (
          <CurrentRequest ride={currentRequest} />
        ) : (
          <RequestRideButton />
        )}
      </div>

      {/* <CurrentRequest /> */}
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    {/* think similar th are being used in another file, best to make these reusable */}
                    <th
                      scope="col"
                      class="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Driver
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
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