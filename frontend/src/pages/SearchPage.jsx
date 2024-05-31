import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader, ProductCard } from "../components";
import { ToastContainer, toast } from "react-toastify";
import { ThemeContext } from "../context/theme-context";
import "react-toastify/dist/ReactToastify.css";

const SearchPage = () => {
  const { searchTerm } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const searchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/search/${searchTerm}`
        );
        const responseData = await response.json();
        if (response.ok) {
          console.log(responseData.data);
          setProducts(responseData.data.products);
        } else {
          console.log(responseData);
          toast.error(responseData.message);
        }
      } catch (err) {
        console.log(err);
        toast.error(err.message || "Something Went Wrong, Please Try Again.");
      } finally {
        setIsLoading(false);
      }
    };
    searchProducts();
    // fetch search api using searchterm
    document.title = `Search For ${searchTerm}`;
    window.scrollTo(0, 0);
  }, [searchTerm]);
  return (
    <>
      <ToastContainer theme={isDark ? "dark" : "light" || "colored"} />
      <section className="min-h-[100dvh] pd-y-s">
        <h2 className="text-4xl text-slate-700 dark:text-slate-400 text-center">
          Search result for:{" "}
          <span className="text-primary-600 font-medium">{searchTerm}</span>
        </h2>
        <div className="container ">
          <ul className="pd-y-s flex gap-8 flex-wrap items-center justify-around">
            {isLoading ? (
              <Loader />
            ) : (
              products?.map((product) => {
                return <ProductCard key={product._id} {...product} />;
              })
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
