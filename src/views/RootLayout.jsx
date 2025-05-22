import { Outlet, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Toaster } from "@/components/ui/sonner";

const RootLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const accessToken = parsedUser.accessToken;

        if (!accessToken) throw new Error("Access token not found");

        const decode = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000;

        if (decode.exp && decode.exp < currentTime) {
          console.warn("Access token expired");
          localStorage.removeItem("user");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
        navigate("/login");
      }
    }
  }, []);
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        "font-sans",
        "bg-white"
      )}>
      <div className="relative flex flex-col min-h-dvh bg-background overflow-hidden">
        <SiteHeader />
        <Toaster position="top-center" richColors />
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node,
};

export default RootLayout;
