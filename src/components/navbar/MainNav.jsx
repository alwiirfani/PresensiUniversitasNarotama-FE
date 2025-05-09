import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoNarotama from "../../assets/images/logo_unnar.png";
import { siteConfig } from "@/configs/SiteConfig";
import NavAuthButton from "./NavAuthButton";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const MainNav = () => {
  const { user } = useAuth();
  const location = useLocation();

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      active: location.pathname === "/dashboard",
    },
    {
      href: "/presensi",
      label: "Presensi",
      active: location.pathname === "/presensi",
    },
  ];

  return (
    <>
      <nav className="flex items-center justify-between w-full">
        <div className="flex gap-1 w-[90%]">
          <Link to="/" className="flex items-center space-x-1">
            <div className="p-[5.5px] sm:p-[6px]">
              <img
                src={logoNarotama}
                alt="Logo Universitas Narotama"
                className="w-10 h-10 sm:h-11 sm:w-11 rounded-full"
              />
            </div>
            <div className="font-bold text-xs xl:text-xl">
              {siteConfig.logo.name}
            </div>
          </Link>

          {user && (
            <div className="items-center justify-center hidden sm:flex gap-4 w-[65%]">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  to={route.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-flex",
                    route.active ? "text-primary" : "text-muted-foreground"
                  )}>
                  {route.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="items-center justify-end hidden sm:flex">
          <NavAuthButton />
        </div>
      </nav>
    </>
  );
};

export default MainNav;
