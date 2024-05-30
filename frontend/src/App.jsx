import { useState, useCallback } from "react";
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
  const [userId, setUserId] = useState(null);
  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
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
        <Route path="/profile/:userId" element={<UserProfilePage />} />
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
        <Route
          path="/profile/:userId"
          element={<Navigate to="/authentication" />}
        />
        <Route path="/cart" element={<Navigate to="/authentication" />} />
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <main className="bg-neutral-100 dark:bg-slate-950 overflow-clip relative">
        <Router>
          <Header />
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
