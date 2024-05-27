import { useState, useContext } from "react";
import Searchbar from "../Searchbar";
import MobileNavbar from "./MobileNavbar";
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import logo from "../../assets/images/logo/logoBlue.png";
import { AuthContext } from "../../context/auth-context";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-white dark:bg-slate-950 min-h-[70px] py-3 flex items-center justify-center max-lg:flex-col transition-all ease-in-out duration-500 sticky top-0 z-40 shadow-md"
      aria-label="Main Navigation"
    >
      <div className="container flex justify-between items-center gap-4">
        <Link to="/" className="w-[80px] h-[75px]">
          <img src={logo} alt="Qader Website" draggable={false} />
        </Link>
        <button
          className="max-lg:block hidden transition-all ease-in-out"
          onClick={toggleNavbar}
          aria-label={`${isOpen ? "Close" : "Open"}`}
        >
          {isOpen ? (
            <IoClose
              title="Close Navigation Menu Icon"
              fontSize={36}
              className="text-primary-600"
            />
          ) : (
            <FiAlignJustify
              title="Navigation Menu Icon"
              fontSize={36}
              className="text-primary-600"
            />
          )}
        </button>
        <div className="flex flex-1 items-center gap-2 max-lg:hidden">
          <Searchbar />
          <ul className="flex items-center gap-4">
            <li>
              <NavigationLink to={"/"} title={"home"} />
            </li>
            <li>
              <NavigationLink to={"/products"} title={"products"} />
            </li>
            <li>
              <NavigationLink to={"/about-us"} title={"about"} />
            </li>
            <li>
              <NavigationLink to={"/contact-us"} title={"contact us"} />
            </li>
            <li>
              <NavigationLink to={"/jobs"} title={"jobs"} />
            </li>
            {auth.isLoggedIn ? (
              <li>
                <button
                  className="w-full px-4 py-1 text-lg font-semibold rounded-sm text-slate-700 dark:text-slate-400 capitalize border bg-transparent border-slate-700 dark:border-primary-600 hover:text-white dark:hover:text-white hover:bg-slate-700 dark:hover:bg-primary-600 transition-all ease-in-out duration-700"
                  onClick={() => auth.logout()}
                >
                  logout
                </button>
              </li>
            ) : (
              <li>
                <NavigationLink
                  to={"/authentication"}
                  title={"login/Register"}
                />
              </li>
            )}
          </ul>
        </div>
      </div>

      <MobileNavbar isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
