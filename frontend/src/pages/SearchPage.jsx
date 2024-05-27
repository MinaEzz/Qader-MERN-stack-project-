import { useParams } from "react-router-dom";
import { ProductCard } from "../components";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    document.title = `Search For ${searchTerm}`;
    window.scrollTo(0, 0);
    // fetch search api using searchterm
  }, [searchTerm]);
  return (
    <section className="min-h-[100dvh] pd-y-s">
      <h2 className="text-4xl text-slate-700 dark:text-slate-400 text-center">
        Search result for:{" "}
        <span className="text-primary-600 font-medium">{searchTerm}</span>
      </h2>
      <div className="container ">
        {/* <ul className="pd-y-s flex gap-8 flex-wrap items-center justify-around">
          {products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </ul> */}
        product cards
      </div>
    </section>
  );
};

export default SearchPage;
