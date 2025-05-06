import { useAuth } from "@/hooks/AuthHook";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { logoutAuth } from "@/services/auth/auth-service";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const NavAuthButton = ({ className }) => {
  const { user, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await logoutAuth();

      console.log(response.data);
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      logout();
      setIsLoading(false);
    }
  };

  return user ? (
    <Button
      variant="outline"
      onClick={handleLogout}
      disabled={isLoading}
      className={cn("hover:bg-red-50 hover:text-red-600", className)}>
      Logout
    </Button>
  ) : (
    <Link to="/login" className="w-full">
      <Button
        variant="outline"
        className={cn("hover:bg-gray-300 hover:text-gray-600", className)}>
        Login
      </Button>
    </Link>
  );
};

NavAuthButton.propTypes = {
  className: PropTypes.string,
};

export default NavAuthButton;
