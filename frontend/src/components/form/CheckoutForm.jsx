import { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import { ThemeContext } from "../../context/theme-context";
import Input from "../shared/Input";
import { Button } from "..";
import { FaCreditCard } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateCheckoutForm } from "../../utils/validation";

const CheckoutForm = () => {
  const { cart } = useContext(CartContext);
  const { isDark } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateCheckoutForm(formData)) return;
    console.log(formData);
  };

  return (
    <>
      <ToastContainer theme={isDark ? "dark" : "light" || "colored"} />
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        method="POST"
        aria-labelledby="Login Form"
      >
        <div className="flex w-full flex-1 flex-col items gap-1">
          <label
            className="text-lg capitalize text-neutral-600 dark:text-neutral-200"
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <Input
            element={"input"}
            type="text"
            id="cardNumber"
            name={"cardNumber"}
            placeholder={"Card Number"}
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div className="flex w-full flex-1 flex-col items gap-1">
          <label
            className="text-lg capitalize text-neutral-600 dark:text-neutral-200"
            htmlFor="cardNumber"
          >
            Expiry Date
          </label>
          <Input
            element={"input"}
            type="text"
            id="ExpiryDate"
            name={"ExpiryDate"}
            placeholder={"Expiry Date"}
            value={formData.expiryDate}
            onChange={handleChange}
          />
        </div>
        <div className="flex w-full flex-1 flex-col items gap-1">
          <label
            className="text-lg uppercase text-neutral-600 dark:text-neutral-200"
            htmlFor="cardNumber"
          >
            CVV
          </label>
          <Input
            element={"input"}
            type="text"
            id="cvv"
            name={"cvv"}
            placeholder={"CVV"}
            value={formData.cvv}
            onChange={handleChange}
          />
        </div>
        <Button
          label={`pay ${cart?.total}`}
          icon={<FaCreditCard fontSize={28} color="white" />}
        />
      </form>
    </>
  );
};

export default CheckoutForm;
