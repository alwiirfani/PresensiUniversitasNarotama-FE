import PropTypes from "prop-types";
import React from "react";
import { Button } from "../ui/button";
import { ClipLoader } from "react-spinners";

const LoginButton = ({ children, isLoading }) => {
  return (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 ease-in-out"
      type="submit"
      disabled={isLoading}>
      {isLoading ? (
        <div className="flex items-center gap-[5px]">
          <ClipLoader color="#ffffff" size={20} speedMultiplier={0.8} />
          <span>Memproses</span>
          <span className="flex space-x-1">
            <span className="animate-dot-fade">.</span>
            <span className="animate-dot-fade delay-200">.</span>
            <span className="animate-dot-fade delay-500">.</span>
            <span className="animate-dot-fade delay-800">.</span>
            <span className="animate-dot-fade delay-1100">.</span>
          </span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

LoginButton.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export default LoginButton;
