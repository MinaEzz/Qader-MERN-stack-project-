import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const ProductRates = ({ stars }) => {
  const [rating, setRating] = useState(stars);
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  // const onPointerMove = (value, index) => console.log(value, index);
  return (
    <div className="w-full ">
      <Rating
        onClick={handleRating}
        // onPointerMove={onPointerMove}
        size={25}
        allowFraction
        initialValue={rating}
        ratingValue={rating}
        transition
        /* Available Props */
      />
    </div>
  );
};

export default ProductRates;
