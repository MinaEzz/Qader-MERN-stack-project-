import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./auth-context";
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(AuthContext);

  const getCart = async (userId) => {
    setIsLoading(true);
    try {
      const response = await fetch(BASE_URL + `/api/cart/${userId}`, {
        headers: { Authorization: "Bearer " + token },
      });
      const responseData = await response.json();
      if (response.ok) {
        setCart(responseData?.data?.cart);
      } else {
        console.log(responseData?.message);
      }
    } catch (err) {
      toast.error(err?.message || "Something Went Wrong, Please Try Again.");
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (userId, productId, quantity) => {
    const toastId = toast.loading(
      "Just a moment! Your product is being added to the cart..."
    );
    setIsLoading(true);
    try {
      const response = await fetch(BASE_URL + "/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ userId, productId, quantity }),
      });
      const responseData = await response.json();
      if (response.ok) {
        setCart(responseData?.data?.cart);
        toast.update(toastId, {
          render: "Product added to your cart successfully! 🛒",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        toast.update(toastId, {
          render: responseData?.message,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.update(toastId, {
        render: err?.message || "Something Went Wrong, Please Try Again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (userId, productId) => {
    const toastId = toast.loading("Removing product from your cart...");
    setIsLoading(true);
    try {
      const response = await fetch(BASE_URL + "/api/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ userId, productId }),
      });
      const responseData = await response.json();
      if (response.ok) {
        getCart(userId);
        toast.update(toastId, {
          render: "The product has been removed from your cart! 🗑️",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        toast.update(toastId, {
          render: responseData?.message,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.update(toastId, {
        render: err?.message || "Something Went Wrong, Please Try Again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
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
