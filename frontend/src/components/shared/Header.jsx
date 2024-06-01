import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { AuthContext } from "../../context/auth-context";
import { ThemeContext } from "../../context/theme-context";
import { CartContext } from "../../context/cart-context";

const Header = () => {
  const auth = useContext(AuthContext);
  const { isDark, themeSwitch } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);

  return (
    <header className="py-1.5 bg-primary-600">
      <div className="container grid grid-cols-2 ">
        <p className="text-white text-base uppercase flex items-center">
          welcome to qader
        </p>
        <div className=" flex items-center justify-end gap-3">
          <div className="rounded-full text-center h-fit bg-neutral-100 dark:bg-slate-900 p-2 ">
            <Link to={`/profile/${auth?.userId}`}>
              {/* {user ? (
                  <img
                    className="rounded-full "
                    src={user?.image || noProfilePic}
                    alt={user?.name}
                  />
                ) : (
                  <FaUser
                    fontSize={20}
                    title="Avatar"
                    className="text-primary-600"
                  />
                )} */}
              <FaUser
                fontSize={20}
                title="Avatar"
                className="text-primary-600"
              />
            </Link>
          </div>
          <div className="relative rounded-full text-center h-fit bg-neutral-100 dark:bg-slate-900 p-2">
            <Link to={`/cart/${auth?.userId}`}>
              <MdShoppingCart
                fontSize={20}
                title="Cart"
                className="text-primary-600"
              />
              <div className="absolute top-1/2 -translate-y-full -right-2 text-center bg-neutral-100 dark:bg-slate-900 rounded-full w-6 h-6">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-400">
                  {cart?.length}
                </span>
              </div>
            </Link>
          </div>
          <button
            className="rounded-full text-center h-fit bg-neutral-100 dark:bg-slate-900 p-2"
            onClick={themeSwitch}
          >
            {isDark ? (
              <IoSunnyOutline
                fontSize={20}
                className="text-primary-600"
                title="Light mode"
              />
            ) : (
              <IoMoonOutline
                fontSize={20}
                className="text-primary-600"
                title="Dark mode"
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
