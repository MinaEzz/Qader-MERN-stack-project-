import { createContext, useState, useCallback, useContext } from "react";
import { CartContext } from "./cart-context";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const { getCart, resetCart } = useContext(CartContext);

  const login = useCallback(
    (uid) => {
      setIsLoggedIn(true);
      setUserId(uid);
      getCart(uid); // Fetch cart when user logs in
    },
    [getCart]
  );

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
    resetCart();
  }, [resetCart]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
