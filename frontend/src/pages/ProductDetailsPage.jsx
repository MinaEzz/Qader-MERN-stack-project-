import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  QuantitySelector,
  ProductFeedback,
  ProductRates,
  Loader,
  Button,
} from "../components";
import { FaCartArrowDown } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/auth-context";
import { CartContext } from "../context/cart-context";
import { ThemeContext } from "../context/theme-context";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { userId, isLoggedIn } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const { isDark } = useContext(ThemeContext);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      return toast.error("You Must Login To Add Products To Your Cart", {
        theme: isDark ? "dark" : "light" || "colored",
      });
    }
    addToCart(userId, productId, quantity);
  };

  useEffect(() => {
    const fetchProductById = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${productId}`
        );
        const responseData = await response.json();
        if (response.ok) {
          console.log(responseData);
          setProduct(responseData.data.product);
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
    fetchProductById();
    document.title = product.title;
    window.scrollTo(0, 0);
  }, [product.title, productId]);

  return (
    <>
      <ToastContainer theme={isDark ? "dark" : "light" || "colored"} />
      <section className="min-h-[100dvh] pd-y">
        <div className="container flex flex-col gap-4">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {" "}
              <div className="w-full flex justify-between max-lg:flex-col gap-4">
                <div className="flex-1 w-full h-[400px]">
                  <img src={product?.image} alt={product?.title} />
                </div>
                <div className="w-full flex flex-1 flex-col gap-4">
                  <h3 className="text-primary-600 text-3xl font-bold capitalize">
                    {product?.title}
                  </h3>
                  <ProductRates stars={product?.rate} />
                  <p className="text-stone-600 dark:text-stone-200 text-base">
                    {product?.description}
                  </p>
                  <p className="text-primary-600 font-bold text-xl">
                    ${product?.price}
                  </p>
                  <div className="w-full flex items-center gap-2">
                    <p className="text-lg capitalize text-slate-700 dark:text-slate-400">
                      select the quantity
                    </p>
                    <QuantitySelector
                      quantity={quantity}
                      setQuantity={setQuantity}
                    />
                  </div>
                  <Button
                    type={"button"}
                    label={"add to cart"}
                    icon={<FaCartArrowDown fontSize={24} />}
                    fontSize={"text-xl"}
                    fontWeight={"font-medium"}
                    onClick={handleAddToCart}
                  />
                </div>
              </div>
              <ProductFeedback feedback={product?.feedback} />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
