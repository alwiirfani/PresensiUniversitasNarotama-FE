import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import logoNarotama from "../../assets/images/logo_unnar.png";
import { siteConfig } from "@/configs/SiteConfig";
import NavAuthButton from "./NavAuthButton";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
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
          <div className="flex flex-col h-[85%] gap-2 mt-10">
            <div className=" flex flex-row"></div>
          </div>

          <hr className="border-border mb-2 mx-3" />

          <div className="flex w-64 justify-center items-center mt-2 mx-4">
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
