import React from "react";
import { ClipLoader } from "react-spinners";

const LoaderButton = ({ children }) => {
  return (
    <div className="flex items-center gap-[5px]">
      <ClipLoader color="#ffffff" size={20} speedMultiplier={0.8} />
      <span>{children}</span>
      <span className="flex space-x-1">
        <span className="animate-dot-fade">.</span>
        <span className="animate-dot-fade delay-200">.</span>
        <span className="animate-dot-fade delay-500">.</span>
        <span className="animate-dot-fade delay-800">.</span>
        <span className="animate-dot-fade delay-1100">.</span>
      </span>
    </div>
  );
};

export default LoaderButton;
