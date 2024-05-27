import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { OurTitle, Pagination, ProductCard } from "../components";

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

const ProductsPage = () => {
  const { categoryID, categoryTITLE } = useParams();
  useEffect(() => {
    document.title = `${
      categoryTITLE ? `Products Of ${categoryTITLE}` : "Our Products"
    }`;
    window.scrollTo(0, 0);
  }, [categoryID, categoryTITLE]);
  return (
    <section className="min-h-[100dvh] pd-y">
      <OurTitle
        title={`${categoryTITLE ? `${categoryTITLE} products` : "products"}`}
      />
      <div className="container ">
        <ul className="pd-y-s flex gap-8 flex-wrap items-center justify-around">
          {DUMMY_PRODUCTS.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </ul>
        <Pagination totalPages={7} />
      </div>
    </section>
  );
};

export default ProductsPage;
