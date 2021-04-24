import React from "react";
import { Link } from "react-router-dom";

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
