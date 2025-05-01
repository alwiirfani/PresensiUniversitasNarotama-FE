import { useAuth } from "@/hooks/AuthHook";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { logoutAuth } from "@/services/auth/auth-service";

const NavAuthButton = () => {
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
      className="hover:bg-red-50 hover:text-red-600">
      Logout
    </Button>
  ) : (
    <Link to="/login">
      <Button variant="outline">Login</Button>
    </Link>
  );
};

export default NavAuthButton;
