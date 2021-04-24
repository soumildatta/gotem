import React from "react";

const Input = ({ onChange, fieldName, type, round, required = false }) => {
  const chooseRounding = () => {
    if (round === "top") {
      return "rounded-t-md";
    } else if (round === "bottom") {
      return "rounded-b-md";
    } else if (round === "all") {
      return "rounded";
    }
    return "";
  };

  const getUpperFieldName = () => {
    return fieldName.charAt(0).toUpperCase() + fieldName.substring(1);
  };

  return (
    <div>
      <label htmlFor={fieldName} className="sr-only">
        {getUpperFieldName()}
      </label>
      <input
        onChange={onChange}
        id={fieldName}
        name={fieldName}
        type={type}
        required={required}
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${chooseRounding()} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm `}
        placeholder={getUpperFieldName()}
      />
    </div>
  );
};

export default Input;
