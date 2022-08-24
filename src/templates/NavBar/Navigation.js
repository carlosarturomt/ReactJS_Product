import { NavLinks } from "./NavLinks";
import ImageLogo from "../../assets/imgs/logo.png";


const Navigation = () => {
  return (
    <nav className="navigation">
      {/* <img src={ImageLogo} alt="logo Vitalínea" /> */}
      <NavLinks />
    </nav>
  );
};

export { Navigation };
