import React from "react";

const CharCounter = ({ value = "", max = 100, show }) => {

  if (!show || !value.length) return null;

  return (
    <span
      className={`absolute bottom-1 right-2 text-[10px]
      ${value.length > max ? "text-red-500" : "text-gray-400"}`}
    >
      {value.length}/{max}
    </span>
  );
};

export default CharCounter;