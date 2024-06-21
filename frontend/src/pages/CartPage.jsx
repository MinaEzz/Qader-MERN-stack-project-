/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Button, CartItem, Loader } from "../components";
import { AuthContext } from "./../context/auth-context";
import { CartContext } from "../context/cart-context";
import { ThemeContext } from "../context/theme-context";
import { ToastContainer } from "react-toastify";
import { IoCart, IoBagCheckOutline } from "react-icons/io5";

const CartPage = () => {
  const { userId } = useContext(AuthContext);
  const { cart, getCart, isLoading } = useContext(CartContext);
  const { isDark } = useContext(ThemeContext);
  console.log(cart);

  const getTotalQuantity = (cart) => {
    if (!cart || !cart?.items) {
      return 0;
    }
    return cart?.items.reduce((total, item) => total + item?.quantity, 0);
  };
  useEffect(() => {
    if (userId) {
      getCart(userId);
    }
    document.title = "Your Cart";
    window.scrollTo(0, 0);
  }, [userId]);

  if (!cart || !cart?.items || cart?.items?.length === 0) {
    return (
      <section className="w-full min-h-[100dvh] pd-y">
        <div className="container flex flex-col gap-4 items-center justify-center">
          <h1 className="text-6xl text-center font-bold text-primary-600">
            Your cart is empty! 🛒
          </h1>
          <p className="text-xl text-center text-neutral-600 dark:text-neutral-200">
            Start adding some products you love!
          </p>
          <Button
            width={"w-[200px]"}
            label={"shop now"}
            icon={<IoCart fontSize={28} />}
            to={"/products"}
          />
        </div>
      </section>
    );
  }

  return (
    <>
      <ToastContainer theme={isDark ? "dark" : "light" || "colored"} />
      <section className="min-h-[100dvh] pd-y ">
        <div className="container flex max-lg:flex-col justify-start items-start gap-2">
          <ul className="w-full flex flex-col flex-1 gap-4 ">
            {isLoading ? (
              <Loader />
            ) : (
              cart?.items?.map((item) => {
                return <CartItem item={item} userId={userId} key={item?._id} />;
              })
            )}
          </ul>
          <div className="w-[300px] max-lg:w-full flex flex-col gap-2 px-2 py-4 bg-white dark:bg-slate-900 rounded-xl">
            <h3 className="text-2xl text-center text-slate-700 dark:text-slate-400 capitalize font-medium">
              cart summary
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-400 font-semibold">
              <span className="text-primary-600 font-bold">Total items</span>{" "}
              {cart?.items?.length}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-400 font-semibold">
              <span className="text-primary-600 font-bold">Total quantity</span>{" "}
              {getTotalQuantity(cart)}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-400 font-semibold">
              <span className="text-primary-600 font-bold">Total price</span>{" "}
              EGP {Math.round(cart?.total * 25 * 100) / 100}
            </p>
            <Button
              type={"button"}
              to="/checkout"
              label={"checkout"}
              fontSize={"text-xl"}
              icon={<IoBagCheckOutline fontSize={24} />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
