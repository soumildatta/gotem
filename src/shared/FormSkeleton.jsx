import React from "react";
import logo from "../shared/logo_v1.png";
import { Link } from "react-router-dom";

//basic format of all forms used throughout the site
const FormSkeleton = ({
  children,
  text,
  linkText,
  linkDestination,
  onSubmit,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center -mt-12 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-20 w-auto" src={logo} alt="Workflow" />
          <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
            Gotem
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {text} &nbsp;
            <Link
              to={linkDestination}
              className="font-medium text-primaryBlue hover:text-blue-600"
            >
              {linkText}
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="rounded-md shadow-sm my-4">{children}</div>
        </form>

        <p className="text-center text-sm text-gray-600">
          <Link to="/" className="font-medium text-primaryBlue hover:text-blue-600">
            RETURN HOME
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FormSkeleton;
