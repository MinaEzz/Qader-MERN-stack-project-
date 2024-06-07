import { useEffect } from "react";
import { Hero, Services, Categories, ProductSlider } from "../components";

const HomePage = () => {
  useEffect(() => {
    document.title = "Welcome to Qader";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home">
      <Hero />
      <Services />
      <section id="shop-now" className="h-fit w-full pd-y-s">
        <h2 className="w-fit mx-auto text-4xl font-bold uppercase text-slate-700 dark:text-slate-400 after:w-1/2 after:h-[2px] after:block after:mx-auto after:mt-[1px] after:bg-slate-700 dark:after:bg-slate-400 hover:after:w-full hover:after:transition-all hover:after:duration-500 hover:after:ease-in-out after:duration-500">
          shop <span className="text-primary-600">now</span>
        </h2>
        <div className="container flex flex-row justify-between max-lg:flex-col gap-4 mt-8">
          <Categories />
          <section className="flex w-[80%] max-lg:w-full flex-col gap-4 ">
            <ProductSlider />
          </section>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
