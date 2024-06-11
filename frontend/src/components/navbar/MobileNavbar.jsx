import { useContext } from "react";
import Searchbar from "../Searchbar";
import NavigationLink from "./NavigationLink";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from "../../context/auth-context";

const MobileNavbar = (probs) => {
  const auth = useContext(AuthContext);

  return (
    <div
      className={`container lg:hidden p-2 rounded-2xl transition-all ease-in-out duration-500 ${
        probs.isOpen ? " block opacity-100 w-full" : "hidden opacity-0 w-0 h-0"
      }`}
    >
      <div className="flex flex-1 flex-col gap-4 ">
        <Searchbar />
        <nav className="flex-1" aria-label="Main Navigation">
          <ul className="flex flex-col items-center gap-4">
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
                  className="w-full px-4 py-1 text-lg font-semibold rounded-sm text-slate-700 dark:text-slate-400 capitalize border bg-transparent border-slate-700 dark:border-primary-600 hover:text-white dark:hover:text-white hover:bg-slate-700 dark:hover:bg-primary-600 transition-all ease-in-out duration-700 flex items-center justify-center space-x-2"
                  onClick={() => {
                    auth.logout();
                    window.location.reload();
                  }}
                >
                  <span>logout</span> <CiLogout fontSize={24} />
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
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
