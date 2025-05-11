import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Calendar1, LayoutDashboard, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import logoNarotama from "../../assets/images/logo_unnar.png";
import { siteConfig } from "@/configs/SiteConfig";
import NavAuthButton from "./NavAuthButton";
import { useAuth } from "@/contexts/AuthContext";
import { Separator } from "../ui/separator";

const MobileNav = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const routes = [
    {
      href: "/dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
      label: "Dashboard",
      active: location.pathname === "/dashboard",
    },
    {
      href: "/presensi",
      icon: <Calendar1 className="h-4 w-4" />,
      label: "Presensi",
      active: location.pathname === "/presensi",
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle Navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          to="/"
          onOpenChange={setOpen}
          className="flex items-start space-x-2 gap-[2px]">
          <div className=" ml-3 mt-4">
            <img
              src={logoNarotama}
              alt="Logo Universitas Narotama"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="flex items-start mt-7">
            <span className="font-bold text-[12px]">
              {siteConfig.logo.name}
            </span>
          </div>
        </MobileLink>

        <hr className="border-border mb-2 mx-3" />

        <div className=" flex flex-col h-full">
          <div className="flex flex-col h-[85%] gap-3">
            {user &&
              routes.map((route) => (
                <div
                  key={route.href}
                  className="flex flex-row gap-2 items-center justify-center mx-3 p-2 border border-border rounded-lg">
                  {route.icon}
                  <MobileLink
                    to={route.href}
                    onOpenChange={setOpen}
                    className={"text-base font-medium"}>
                    {route.label}
                  </MobileLink>
                </div>
              ))}
          </div>

          <hr className="border-border mb-2 mx-3" />

          <div className="flex w-full justify-center items-center mt-2 px-6">
            <NavAuthButton className={"w-full"} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const MobileLink = ({
  target,
  to,
  children,
  onOpenChange,
  className,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (target === "_blank") {
      event.preventDefault();
      onOpenChange?.(false);
      window.open(to.toString(), "_blank");
    } else {
      event.preventDefault();
      navigate(to.toString());
      onOpenChange?.(false);
    }
  };

  return (
    <Link
      to={to}
      target={target}
      className={className}
      onClick={handleClick}
      {...props}>
      {children}
    </Link>
  );
};

MobileLink.propTypes = {
  target: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onOpenChange: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MobileNav;
