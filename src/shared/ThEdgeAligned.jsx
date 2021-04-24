import React from "react";

// reusable component for headers used in the driver and passenger dashboards
const ThEdgeAligned = ({ header1, header2 }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          {header1}
        </th>
        <th
          scope="col"
          className="px-8 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          {header2}
        </th>
      </tr>
    </thead>
  );
};

export default ThEdgeAligned;
