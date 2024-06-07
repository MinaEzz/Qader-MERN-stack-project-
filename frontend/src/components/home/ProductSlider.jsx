/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import SliderCard from "./SliderCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loader from "../shared/Loader";
import { AuthContext } from "../../context/auth-context";
import { ToastContainer, toast } from "react-toastify";
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const ProductSlider = () => {
  const { userId } = useContext(AuthContext);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      setIsLoading(true);
      if (!userId) {
        setIsLoading(false);
        return;
      }
      try {
        const response = await fetch(
          BASE_URL + `/api/products/recommend/${userId}`
        );
        const responseData = await response.json();
        if (response.ok) {
          console.log(responseData.data);
          setRecommendedProducts(responseData.data.recommendedProducts);
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
    fetchRecommendedProducts();
  }, [userId]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <ToastContainer />
      <section className="w-full px-8 py-4 bg-white dark:bg-slate-900 rounded-xl flex flex-col">
        <h3 className="text-xl font-semibold  text-primary-600 capitalize max-lg:text-center">
          recommended products
        </h3>
        {!recommendedProducts || recommendedProducts.length === 0 ? (
          isLoading ? (
            <Loader />
          ) : (
            <div className="mt-4">
              <b className="text-lg font-medium text-slate-700 dark:text-slate-400">
                🚫 Oops! You're Not Logged In 🚫
              </b>
              <p className="text-base text-slate-700 dark:text-slate-400">
                To receive personalized equipment recommendations that cater to
                your specific needs, please log in to your account. We are here
                to help you find the best solutions for your requirements! 😊
              </p>
            </div>
          )
        ) : (
          <div className="mt-4">
            {isLoading ? (
              <Loader />
            ) : (
              <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={true}
                autoPlay={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                {recommendedProducts?.map((product) => {
                  return (
                    <SliderCard
                      key={product?._id}
                      productImg={product?.image}
                      productTitle={product?.title}
                      productPrice={product?.price}
                      productId={product?._id}
                    />
                  );
                })}
              </Carousel>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default ProductSlider;
