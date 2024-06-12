import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { AuthContext } from "../../context/auth-context";
import { toast } from "react-toastify";
import { Button } from "..";
import { FaPlus } from "react-icons/fa6";
import { ThemeContext } from "../../context/theme-context";

const ProductCard = ({ ...product }) => {
  const { userId, isLoggedIn } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const { isDark } = useContext(ThemeContext);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      return toast.error("You Must Login To Add Products To Your Cart", {
        theme: isDark ? "dark" : "light" || "colored",
      });
    }
    addToCart(userId, product?._id, 1);
  };

  return (
    <li className="w-[250px] min-h-[520px] bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all p-4 rounded-xl flex flex-col justify-between gap-4">
      <div className="flex justify-between items-center">
        <b className="bg-slate-600 rounded-xl py-1 px-2 text-white text-sm">
          EGP {Math.round(product?.price * 25 * 100) / 100}
        </b>
        <b
          className={`text-sm ${
            product?.isAvailable ? "bg-primary-500" : "bg-coral-red-500"
          }  rounded-xl py-1 px-2 text-white`}
        >
          {product?.isAvailable ? "Available" : "Out of stock"}
        </b>
      </div>
      <div className="w-full h-[180px]">
        <img className="rounded-xl" src={product?.image} alt="product image" />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h4 className="text-center text-xl capitalize font-medium text-primary-600">
          {`${product?.title.slice(0, 22)}`}
        </h4>
        <p className="text-center text-sm text-slate-700 dark:text-slate-400">
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
          onClick={handleAddToCart}
        />
        <Button
          label={"details"}
          fontSize="text-base"
          height="h-10"
          to={`/products/${product?._id}`}
        />
      </div>
    </li>
  );
};

export default ProductCard;
