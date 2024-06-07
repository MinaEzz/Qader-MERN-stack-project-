import { useContext } from "react";
import { Button } from "..";
import { CartContext } from "../../context/cart-context";
import { IoTrash } from "react-icons/io5";
const CartItem = ({ item, userId }) => {
  const { removeFromCart } = useContext(CartContext);
  const handleRemove = () => {
    removeFromCart(userId, item?.product?._id);
  };
  console.log(userId);
  return (
    <li className="w-full bg-white dark:bg-slate-900 p-4 rounded-xl flex max-lg:flex-col flex-row  gap-4 items-center">
      <div className=" w-[240px] max-lg:w-full h-[180px]">
        <img
          className="rounded-xl"
          src={item?.product?.image}
          alt="product image"
        />
      </div>
      <div className="w-full flex flex-col flex-1 gap-2">
        <h4 className=" text-xl capitalize font-medium text-primary-600">
          {item?.product?.title}
        </h4>
        <p className=" text-md text-slate-700 dark:text-slate-400">
          {item?.product?.description}
        </p>
        <p className=" text-lg text-primary-600 ">${item?.price}</p>
        <p className=" text-lg text-primary-600 ">Quantity: {item?.quantity}</p>
        <Button
          label={"remove"}
          icon={<IoTrash fontSize={20} />}
          width={"w-[160px]"}
          backgroundColor={"bg-coral-red-700"}
          hoverBgColor={"hover:bg-coral-red-800"}
          activeBgColor={"active:bg-coral-red-900"}
          fontSize="text-base"
          height="h-10"
          onClick={handleRemove}
        />
      </div>
    </li>
  );
};

export default CartItem;
