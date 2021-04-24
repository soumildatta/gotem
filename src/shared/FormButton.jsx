import React from "react";

const FormButton = ({ onClick, text, type = "submit" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="group mt-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primaryBlue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {text}
    </button>
  );
};

export default FormButton;
