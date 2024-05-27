import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  QuantitySelector,
  ProductFeedback,
  ProductRates,
  Loader,
} from "../components";
import { FaCartArrowDown } from "react-icons/fa6";

const DUMMY_PRODUCTS = [
  {
    id: 100,
    name: "product_1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum atque qui numquam minus aliquam fugiat ad soluta adipisci ducimus harum maiores laborum necessitatibus officia, impedit nesciunt officiis quo exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl:
      "https://storage-dmes.comcash.com/images/products/c71aa8798af2cfc53e8ea99f60844733.jpg",
    price: 1000,
    available: false,
  },
  {
    id: 101,
    name: "product_1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum atque qui numquam minus aliquam fugiat ad soluta adipisci ducimus harum maiores laborum necessitatibus officia, impedit nesciunt officiis quo exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem atque molestias sit itaque! Facere ut repellendus, molestias ad porro aliquam at dolor vitae laborum, neque dolore. Animi ea sapiente in?",
    imageUrl:
      "https://storage-dmes.comcash.com/images/products/c71aa8798af2cfc53e8ea99f60844733.jpg",
    price: 1000,
    available: false,
  },
  {
    id: 102,
    name: "product_1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum atque qui numquam minus aliquam fugiat ad soluta adipisci ducimus harum maiores laborum necessitatibus officia, impedit nesciunt officiis quo exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl:
      "https://storage-dmes.comcash.com/images/products/c71aa8798af2cfc53e8ea99f60844733.jpg",
    price: 1000,
    available: false,
  },
  {
    id: 103,
    name: "product_1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum atque qui numquam minus aliquam fugiat ad soluta adipisci ducimus harum maiores laborum necessitatibus officia, impedit nesciunt officiis quo exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem atque molestias sit itaque! Facere ut repellendus, molestias ad porro aliquam at dolor vitae laborum, neque dolore. Animi ea sapiente in?",
    imageUrl:
      "https://storage-dmes.comcash.com/images/products/c71aa8798af2cfc53e8ea99f60844733.jpg",
    price: 1000,
    available: false,
  },
  {
    id: 104,
    name: "product_1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum atque qui numquam minus aliquam fugiat ad soluta adipisci ducimus harum maiores laborum necessitatibus officia, impedit nesciunt officiis quo exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl:
      "https://storage-dmes.comcash.com/images/products/c71aa8798af2cfc53e8ea99f60844733.jpg",
    price: 1000,
    available: false,
  },
  {
    id: 105,
    name: "product_1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum atque qui numquam minus aliquam fugiat ad soluta adipisci ducimus harum maiores laborum necessitatibus officia, impedit nesciunt officiis quo exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem atque molestias sit itaque! Facere ut repellendus, molestias ad porro aliquam at dolor vitae laborum, neque dolore. Animi ea sapiente in?",
    imageUrl:
      "https://storage-dmes.comcash.com/images/products/c71aa8798af2cfc53e8ea99f60844733.jpg",
    price: 1000,
    available: false,
  },
];

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { productID } = useParams();
  const matchedProduct = DUMMY_PRODUCTS.find((p) => p.id === Number(productID));

  useEffect(() => {
    document.title = matchedProduct.name;
    window.scrollTo(0, 0);
  }, [matchedProduct]);

  if (!matchedProduct) return <Loader />;

  return (
    <section className="min-h-[100dvh] pd-y">
      <div className="container flex flex-col gap-4">
        <div className="w-full flex justify-between max-lg:flex-col gap-4">
          <div className="flex-1 w-full h-[400px]">
            <img src={matchedProduct.imageUrl} alt={matchedProduct.name} />
          </div>
          <div className="w-full flex flex-1 flex-col gap-4">
            <h3 className="text-primary-600 text-3xl font-bold capitalize">
              {matchedProduct.name}
            </h3>
            <ProductRates stars={2.3} />
            <p className="text-stone-600 text-base">
              {matchedProduct.description}
            </p>
            <p className="text-primary-600 font-bold text-xl">
              ${matchedProduct.price}
            </p>
            <div className="w-full flex items-center gap-2">
              <p className="text-lg capitalize text-slate-700 dark:text-slate-400">
                select the quantity
              </p>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>
            <button className="w-full h-14 flex items-center justify-center gap-1 rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all text-xl capitalize font-medium text-white">
              add to cart
              <FaCartArrowDown fontSize={24} />
            </button>
          </div>
        </div>
        <ProductFeedback />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
