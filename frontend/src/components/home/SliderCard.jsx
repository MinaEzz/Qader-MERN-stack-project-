// import { Link } from "react-router-dom";
import { Button } from "..";

const SliderCard = ({ productImg, productName, productPrice, productId }) => {
  return (
    <div className="w-full min-h-[305px] flex flex-col justify-between rounded-lg p-1 gap-2">
      <div className="w-full h-[150px]">
        <img
          className="rounded-lg"
          src={productImg}
          alt="product image"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 h-full w-full flex-col gap-2">
        <div className="flex flex-1 w-full flex-col gap-2">
          <h3 className="text-base capitalize font-bold text-slate-700 dark:text-slate-400">
            {productName.slice(0, 40)}
          </h3>
          <p className=" text-sm font-bold text-primary-600">${productPrice}</p>
        </div>
        <Button
          label="shop now"
          to={`/products/${productId}`}
          fontSize="text-sm"
          height="h-8"
        />
      </div>
    </div>
  );
};

export default SliderCard;
