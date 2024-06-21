import { useEffect } from "react";
import { paymentCard } from "../assets/images";
import { CheckoutForm } from "../components";

const CheckOutPage = () => {
  useEffect(() => {
    document.title = "Checkout";
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="min-h-[100dvh] pd-y ">
      <div className="container flex max-lg:flex-col justify-start items-start gap-2">
        <div className="flex-1 w-full h-[500px]">
          <img src={paymentCard} alt="payment card image" />
        </div>

        <div className="flex flex-col gap-8 flex-1 w-full">
          <h2 className="text-4xl font-bold uppercase text-primary-600">
            checkout
          </h2>
          <CheckoutForm />
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;
