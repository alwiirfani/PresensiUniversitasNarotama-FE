import React from "react";

const FieldSet = ({ value, label, icon }) => {
  return (
    <fieldset className="border border-border flex items-center h-14 sm:h-16 rounded-md">
      <legend className="flex w-fit items-center text-sm sm:text-base font-bold ml-4 px-1 gap-[2px]">
        {label}
        <span className="text-gray-400">{icon}</span>
      </legend>
      <span className="w-full text-sm sm:text-base text-gray-500 ml-3 overflow-auto whitespace-nowrap">
        {value}
      </span>
    </fieldset>
  );
};

export default FieldSet;
