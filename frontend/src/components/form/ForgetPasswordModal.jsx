import { useState } from "react";
import Input from "../shared/Input";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "..";

const ForgetPasswordModal = ({ open, close }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setEnteredEmail(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
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
            <IoClose
              className="text-slate-700 dark:text-slate-400"
              fontSize={30}
            />
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
              <Button
                type={"submit"}
                label={"send"}
                width={"w-[70px]"}
                height={"h-10"}
                fontSize={"text-base"}
                fontWeight={"font-semibold"}
              />
            </div>
            <small className="text-neutral-600 dark:text-neutral-200">
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
