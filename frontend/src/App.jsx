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
import { useContext, useEffect } from "react";

const App = () => {
  const { token, login } = useContext(AuthContext);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUserData &&
      storedUserData.token &&
      new Date(storedUserData.expiration) > new Date()
    ) {
      login(
        storedUserData.userId,
        storedUserData.token,
        new Date(storedUserData.expiration)
      );
    }
  }, [login]);

  let routes;
  if (token) {
    routes = (
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/products/:categoryId/:categoryTITLE"
          element={<ProductsPage />}
        />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/authentication" element={<Navigate to="/" />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/profile/:userId" element={<UserProfilePage />} />
        <Route path="/cart/:userId" element={<CartPage />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/products/:categoryId/:categoryTITLE"
          element={<ProductsPage />}
        />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/authentication" element={<AuthenticationPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/profile/:userId"
          element={<Navigate to="/authentication" />}
        />
        <Route
          path="/cart/:userId"
          element={<Navigate to="/authentication" />}
        />
      </>
    );
  }

  return (
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
  );
};

export default App;
