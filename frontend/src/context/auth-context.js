import { createContext } from "react";

// initialize the context
export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  login: () => {},
  logout: () => {},
});
