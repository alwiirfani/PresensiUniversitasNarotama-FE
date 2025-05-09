import PropTypes from "prop-types";
import React from "react";
import { Button } from "../ui/button";
import { ClipLoader } from "react-spinners";
import LoaderButton from "@/configs/LoaderButton";

const LoginButton = ({ children, isLoading }) => {
  return (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 ease-in-out"
      type="submit"
      disabled={isLoading}>
      {isLoading ? <LoaderButton>On the way</LoaderButton> : children}
    </Button>
  );
};

LoginButton.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export default LoginButton;
