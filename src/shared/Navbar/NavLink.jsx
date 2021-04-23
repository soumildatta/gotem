import React from "react";
import { Link } from "react-router-dom";

//formatting of links on the nav bar
export default function NavLink({ linkName, linkDestination }) {
  return (
    <Link
      to={linkDestination}
      className="ml-8 whitespace-nowrap text-base font-medium text-white hover:text-gray-200"
    >
      {linkName}
    </Link>
  );
}
