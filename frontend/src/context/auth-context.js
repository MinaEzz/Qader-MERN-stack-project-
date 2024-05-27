import { createContext } from "react";

// initialize the context
export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
