import React from "react";
import ImageLogo from "../../assets/imgs/logo.png";

const NavLinks = () => {
  return (
    <nav>
      <img src={ImageLogo} alt="logo Vitalínea" className="imgDesktop" />

      <ul>
        <li>Nuestros productos</li>
        <li>Disfruta cuidarte</li>
        <li>Blog</li>
        <li>
          <span className="facebook"></span>
        </li>
        <li>
          <span className="instagram"></span>
        </li>
        <li>
          <span className="youtube"></span>
        </li>
      </ul>
    </nav>
  );
};

export { NavLinks };
