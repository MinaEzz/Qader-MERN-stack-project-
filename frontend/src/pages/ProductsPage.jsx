import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OurTitle, Pagination, ProductCard, Loader } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../context/theme-context";
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const ProductsPage = () => {
  const { categoryId, categoryTITLE } = useParams();
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { isDark } = useContext(ThemeContext);

  const fetchProducts = async (pageNumber) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        BASE_URL +
          `/api/products?page=${pageNumber}${
            categoryId ? "&categoryId=" + categoryId : ""
          }`
      );
      const responseData = await response.json();
      if (response.ok) {
        setProducts(responseData?.data?.products);
        setCurrentPage(responseData?.data?.currentPage);
        setTotalPages(responseData?.data?.totalPages);
      } else {
        toast.error(responseData?.message);
      }
    } catch (err) {
      toast.error(err?.message || "Something Went Wrong, Please Try Again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${
      categoryTITLE
        ? `Products Of ${categoryTITLE.toUpperCase()}`
        : "Our Products"
    }`;
    fetchProducts();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryTITLE]);

  return (
    <>
      <ToastContainer theme={isDark ? "dark" : "light" || "colored"} />
      <section className="min-h-[100dvh] pd-y">
        <OurTitle
          title={`${categoryTITLE ? `${categoryTITLE} products` : "products"}`}
        />
        <div className="container">
          <ul className="pd-y-s flex gap-8 flex-wrap items-center justify-around">
            {isLoading ? (
              <Loader />
            ) : (
              products.map((product) => {
                return <ProductCard key={product?._id} {...product} />;
              })
            )}
          </ul>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            fetchProducts={fetchProducts}
          />
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
