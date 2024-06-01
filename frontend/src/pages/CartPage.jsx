/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { CartItem, Loader } from "../components";
import { AuthContext } from "./../context/auth-context";
import { CartContext } from "../context/cart-context";
import { ThemeContext } from "../context/theme-context";
import { ToastContainer } from "react-toastify";

const CartPage = () => {
  const { userId } = useContext(AuthContext);
  const { cart, getCart, isLoading } = useContext(CartContext);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    if (userId) {
      getCart(userId);
    }
  }, [userId]);

  if (cart.length === 0) {
    return (
      <section>
        <h1>Your Cart is Empty</h1>
      </section>
    );
  }

  return (
    <>
      <ToastContainer theme={isDark ? "dark" : "light" || "colored"} />
      <section className="min-h-[100dvh] pd-y dark:bg-slate-950">
        <div className="container flex max-lg:flex-col justify-start items-start gap-2">
          <ul className="w-full flex flex-col flex-1 gap-4 ">
            {isLoading ? (
              <Loader />
            ) : (
              cart.map((item) => {
                return <CartItem item={item} userId={userId} key={item._id} />;
              })
            )}
          </ul>
          <div className="w-[300px] max-lg:w-full flex flex-col gap-2 px-2 py-4 bg-white dark:bg-slate-900 rounded-xl">
            <h3 className="text-2xl text-center text-slate-700 dark:text-slate-400 capitalize font-medium">
              cart summary
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
