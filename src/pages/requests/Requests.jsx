import React from "react";
import RequestCards from "./RequestCards";

// you are using 'class' in this file use 'className' instead
const Requests = () => {
  const requestsData = [
    {
      name: "Jane Cooper",
      info: "Yikes, not good",
      address: "3598 Mansion House Manor, Poor Place, MS 38655",
      status: "Emergency",
    },
    {
      name: "Joe Cooper",
      info: "Ehh, aight.",
      address: "3598 Mansion House Manor, Poor Place, MS 38655",
      status: "Normal",
    },
  ];
  return (
    <div class="flex flex-col">
      <h2 className="mt-6 text-center text-5xl font-medium ml-3 mb-4 text-gray-900 flex justify-left ">
        Requests
      </h2>
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  {/* these are the same th, prolly better if we make things like this reusable considering we don't know what we'll be building in the future */}
                  <th
                    scope="col"
                    class="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Options</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {requestsData.map((data) => (
                  <RequestCards data={data} />
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
