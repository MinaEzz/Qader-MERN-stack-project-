import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCart = async (userId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${userId}`);
      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData);
        setCart(responseData.data.cart.items);
      } else {
        console.log(responseData);
        console.log(responseData.message);
      }
    } catch (err) {
      console.log(err);
      console.log(err.message || "Something Went Wrong, Please Try Again.");
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (userId, productId, quantity) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId, quantity }),
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData.data.cart.items);
        setCart(responseData.data.cart.items);
        console.log(cart);
      } else {
        console.log(responseData);
        console.log(responseData.message);
      }
    } catch (err) {
      console.log("Failed to add to cart", err);
    }
  };

  const removeFromCart = async (userId, productId) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId }),
      });
      const data = await response.json();
      setCart(data.items);
    } catch (err) {
      console.error("Failed to remove from cart", err);
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, getCart, addToCart, removeFromCart, isLoading, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
