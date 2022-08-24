import React from "react";
import { NavLinks } from "./NavLinks";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

import ImageLogo from "../../assets/imgs/logo.png";


const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navigation__mobile">
      <img src={ImageLogo} alt="logo Vitalínea" />

      <RiMenu3Line
        size="40px"
        color="#b98b3c"
        className="hamburger"
        onClick={() => setOpen(!open)}
      />
      {open && <NavLinks /> }
    </nav>
  );
};

export { MobileNavigation };
