import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCard from "./SliderCard";

const ProductSlider = ({ title, products }) => {
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
    <section className="w-full px-8 py-4 bg-white dark:bg-slate-900 rounded-xl flex flex-col">
      <h3 className="text-xl font-medium  text-primary-600 capitalize max-lg:text-center">
        {title}
      </h3>
      <div className="mt-4">
        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable={true}
          autoPlay={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {products.map((product) => {
            return (
              <SliderCard
                key={product.name}
                productImg={product.image}
                productName={product.name}
                productPrice={product.price}
                productId={product.id}
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default ProductSlider;
