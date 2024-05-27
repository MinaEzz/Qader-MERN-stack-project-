import { Button } from "..";
import { FaPlus } from "react-icons/fa6";

const ProductCard = ({ ...product }) => {
  return (
    <li className="bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all p-4 w-[250px] rounded-xl flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <b className="bg-slate-600 rounded-xl py-1 px-2 text-white text-sm">
          ${product.price}
        </b>
        <b
          className={`text-sm ${
            product.available ? "bg-primary-500" : "bg-coral-red-500"
          }  rounded-xl py-1 px-2 text-white`}
        >
          {product.available ? "Available" : "Out of stock"}
        </b>
      </div>
      <div className="w-full h-[180px]">
        <img
          className="rounded-xl"
          src={product.imageUrl}
          alt="product image"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h4 className="text-center text-xl capitalize font-medium text-primary-600">
          {`${product?.name.slice(0, 26)}`}
        </h4>
        <p className="text-center text-sm text-slate-700 dark:text-slate-600">
          {`${product?.description.slice(0, 120)}...`}
        </p>
      </div>
      <div className="flex flex-col items-center justify-between w-full gap-2">
        <Button
          label={<FaPlus fontSize={20} />}
          backgroundColor="bg-slate-700"
          hoverBgColor="hover:bg-slate-800"
          activeBgColor="active:bg-slate-900"
          fontSize="text-base"
          height="h-10"
        />
        <Button
          label={"details"}
          fontSize="text-base"
          height="h-10"
          to={`/products/${product?.id}`}
        />
      </div>
    </li>
  );
};

export default ProductCard;
