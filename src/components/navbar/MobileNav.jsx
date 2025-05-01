import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

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
      <SheetContent side="right"></SheetContent>
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
