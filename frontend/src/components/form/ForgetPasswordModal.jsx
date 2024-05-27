import { useState } from "react";
import Input from "../shared/Input";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPasswordModal = ({ open, close }) => {
  const BASE_URL = "http://localhost:5000";
  const [enteredEmail, setEnteredEmail] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setEnteredEmail(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/users`, { method: "GET" });
      if (!response.ok) {
        console.error("Failed to fetch user data");
        return;
      }
      const userData = await response.json();
      const user = userData.find((u) => u.email === enteredEmail);
      if (!user) {
        console.error("Entered email doesn't exist");
        toast.error("Entered email doesn't exist", { theme: "colored" });
        return;
      }
      console.log("correct email");
      setEnteredEmail("");
      toast.success("Your message has been successfully sent", {
        theme: "colored",
      });
    } catch (error) {
      console.log("Error during submmiting email", error);
      toast.error("Error during submmiting email", { theme: "colored" });
    }
  };

  if (!open) return null;
  return (
    <section className="w-full h-full" onClick={close}>
      <div className="layer flex justify-center items-center z-40">
        <div
          className="bg-white dark:bg-slate-900 lg:w-1/2 w-full h-[250px] flex flex-col p-2 fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="w-fit h-fit ml-auto" onClick={close}>
            <IoClose className="text-slate-700" fontSize={30} />
          </button>
          <form
            className=" bg-slate-00 w-full my-auto flex flex-col gap-1"
            onSubmit={handleSubmit}
            aria-labelledby="Forget Password Form"
          >
            <div className="w-full flex gap-2 items-center">
              <Input
                element="input"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={handleChange}
                value={enteredEmail}
              />
              <button
                type="submit"
                className="w-[70px] h-10 rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-base capitalize font-bold text-white"
              >
                submit
              </button>
            </div>
            <small className="text-neutral-700 dark:text-neutral-600">
              you will receive an email with a link that direct you to reset
              your password in a few minutes
            </small>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ForgetPasswordModal;
