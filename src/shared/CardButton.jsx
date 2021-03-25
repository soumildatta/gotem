import React from "react";

const CardButton = ({ text, color, handleClick }) => {
  return (
    <button
      onClick={() => handleClick(text)}
      className={`bg-${color}-500 hover:bg-${color}-600 text-${
        color === "yellow" ? "black" : "white"
      } px-3 py-1 my-3 mx-2 rounded-md h-10 `}
    >
      {text}
    </button>
  );
};

export default CardButton;
