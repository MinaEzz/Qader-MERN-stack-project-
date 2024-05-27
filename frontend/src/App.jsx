import { useEffect, useState, useCallback } from "react";
import { AuthContext } from "./context/auth-context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header, Footer, Navbar } from "./components";
import {
  HomePage,
  ProductsPage,
  AboutPage,
  ContactUsPage,
  AuthenticationPage,
  ProductDetailsPage,
  UserProfilePage,
  JobsPage,
  PageNotFound,
  SearchPage,
  CartPage,
} from "./pages";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/products/:categoryID/:categoryTITLE"
          element={<ProductsPage />}
        />
        <Route path="/products/:productID" element={<ProductDetailsPage />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/authentication" element={<Navigate to="/" />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/products/:categoryID/:categoryTITLE"
          element={<ProductsPage />}
        />
        <Route path="/products/:productID" element={<ProductDetailsPage />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/authentication" element={<AuthenticationPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/profile" element={<Navigate to="/authentication" />} />
        <Route path="/cart" element={<Navigate to="/authentication" />} />
      </>
    );
  }

  const [isDark, setIsDark] = useState(false);
  // theme vars
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // initial theme check
  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
      return;
    }
  };
  // manual theme switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };
  useEffect(() => {
    themeCheck();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <main className="bg-neutral-100 dark:bg-slate-950 overflow-clip relative">
        <Router>
          <Header
            isDark={isDark}
            setIsDark={setIsDark}
            userTheme={userTheme}
            systemTheme={systemTheme}
            themeSwitch={themeSwitch}
          />
          <Navbar />
          <Routes>
            {routes}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </AuthContext.Provider>
  );
};

export default App;
