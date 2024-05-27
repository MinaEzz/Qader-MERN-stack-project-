import { useState, useContext } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../context/auth-context";
import Loader from "./../shared/Loader";
import { validateLoginForm } from "../../utils/validation";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = ({ setOpenModal }) => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    identifier: "", // This can be username, email, or phone number
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateLoginForm(formData)) return;
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData);
        toast.success("User login successfully", {
          theme: "colored",
        });
        auth.login();
      } else {
        console.log(responseData);
        toast.error(responseData.message, {
          theme: "colored",
        });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message || "Something Went Wrong, Please Try Again.", {
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <Loader />
      ) : (
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
          method="POST"
          aria-labelledby="Login Form"
        >
          <div className="relative border border-primary-600 rounded-xl">
            <FaUser
              className="absolute top-1/2 -translate-y-1/2 left-2  text-neutral-700"
              fontSize={18}
              style={{ pointerEvents: "none" }}
            />
            <input
              type="text"
              name="identifier"
              placeholder="Username"
              onChange={handleChange}
              value={formData.identifier}
              className="w-full h-10 outline-none text-base font-medium text-neutral-700 dark:text-neutral-500 rounded-xl placeholder:text-neutral-500 py-2 pl-8 pr-10 placeholder:text-base placeholder:font-medium bg-transparent"
            />
          </div>
          <div className="relative border border-primary-600 rounded-xl">
            <FaLock
              className="absolute top-1/2 -translate-y-1/2 left-2  text-neutral-700"
              fontSize={18}
              style={{ pointerEvents: "none" }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              className="w-full h-10 outline-none text-base font-medium text-neutral-700 dark:text-neutral-500 rounded-xl placeholder:text-neutral-500 py-2 pl-8 pr-10 placeholder:text-base placeholder:font-medium bg-transparent"
            />
          </div>
          <p
            className="text-neutral-700 dark:text-neutral-500 capitalize font-medium text-lg cursor-pointer w-fit"
            onClick={() => setOpenModal(true)}
          >
            forget password?
          </p>
          <button
            type="submit"
            className="w-full h-14 flex items-center justify-center gap-1 rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all text-2xl capitalize font-bold text-white"
          >
            login <LuLogIn fontSize={28} color="white" />
          </button>
        </form>
      )}
    </>
  );
};

export default LoginForm;
