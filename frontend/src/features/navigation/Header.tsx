import { CiMenuBurger } from "react-icons/ci";
import trainlytics_logo from "@/assets/logo.webp";

const Header = () => {
  return (
    <header className="fixed top-0 flex items-center justify-between py-2 px-4 bg-white shadow w-full">
      <img className="w-32 h-8" src={trainlytics_logo} alt="Trainlytics logo" />
      <CiMenuBurger size={32} />
    </header>
  );
};

export default Header;
