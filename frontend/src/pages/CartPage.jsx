import { useContext, useEffect } from "react";
import { Loader } from "../components";
import { AuthContext } from "./../context/auth-context";
import { CartContext } from "../context/cart-context";

const CartPage = () => {
  const { userId } = useContext(AuthContext);
  const { cart, getCart, isLoading } = useContext(CartContext);

  useEffect(() => {
    if (userId) {
      getCart(userId);
    }
  }, []);

  if (cart.length === 0) {
    return (
      <section>
        <h1>Your Cart is Empty</h1>
      </section>
    );
  }

  return (
    <section className="min-h-[100dvh] pd-y dark:bg-slate-950">
      <div className="container">
        <ul>
          {isLoading ? (
            <Loader />
          ) : (
            cart.map((item) => {
              return <h2>{item.product.title}</h2>;
            })
          )}
        </ul>
      </div>
    </section>
  );
};

export default CartPage;
