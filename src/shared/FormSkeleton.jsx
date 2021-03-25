import React from "react";
import logo from "../shared/logo_v1.png";
import { Link } from "react-router-dom";

const FormSkeleton = ({
  children,
  text,
  linkText,
  linkDestination,
  onSubmit,
}) => {
  return (
    <div class="min-h-screen flex items-center justify-center -mt-12 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-20 w-auto" src={logo} alt="Workflow" />
          <h2 class="mt-3 text-center text-3xl font-extrabold text-gray-900">
            Gotem
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            {text} &nbsp;
            <Link
              to={linkDestination}
              class="font-medium text-primaryBlue hover:text-blue-600"
            >
              {linkText}
            </Link>
          </p>
        </div>

        <form class="mt-8 space-y-6" onSubmit={onSubmit}>
          <div class="rounded-md shadow-sm my-4">{children}</div>
        </form>

        <p class="text-center text-sm text-gray-600">
          <Link to="/" class="font-medium text-primaryBlue hover:text-blue-600">
            RETURN HOME
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FormSkeleton;
