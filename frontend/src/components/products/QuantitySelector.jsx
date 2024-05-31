import { FaPlus, FaMinus } from "react-icons/fa";

const QuantitySelector = ({ quantity, setQuantity }) => {
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg p-1 w-fit flex items-center gap-2">
      <button
        className=" bg-primary-600 hover:bg-primary-700 active:bg-primary-800 h-7 w-7 rounded-lg"
        onClick={handleDecrease}
      >
        <FaMinus className="m-auto" fontSize={14} color="white" />
      </button>
      <span className="text-slate-700 dark:text-slate-400 font-medium text-base">
        {quantity}
      </span>
      <button
        className=" bg-primary-600 hover:bg-primary-700 active:bg-primary-800 h-7 w-7 rounded-lg"
        onClick={handleIncrease}
      >
        <FaPlus className="m-auto" fontSize={14} color="white" />
      </button>
    </div>
  );
};

export default QuantitySelector;
