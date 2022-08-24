import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigaton";

const NavBar = () => {
  return (
    <div className="">
      <Navigation />
      <MobileNavigation />
    </div>
  );
}

export { NavBar };