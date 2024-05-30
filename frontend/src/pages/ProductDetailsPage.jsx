import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  QuantitySelector,
  ProductFeedback,
  ProductRates,
  Loader,
} from "../components";
import { FaCartArrowDown } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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

    document.title = product?.title;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ToastContainer />
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
                  <p className="text-stone-600 text-base">
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
                  <button className="w-full h-14 flex items-center justify-center gap-1 rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all text-xl capitalize font-medium text-white">
                    add to cart
                    <FaCartArrowDown fontSize={24} />
                  </button>
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
