/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { GrSend } from "react-icons/gr";
import { Button, Loader } from "..";
import Input from "../shared/Input";
import { validateContactForm } from "../../utils/validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../context/theme-context";
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isDark } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
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
    if (!validateContactForm(formData)) return;
    setIsLoading(true);
    try {
      const response = await fetch(BASE_URL + "/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        toast.success(
          "Your message has been successfully sent! 🚀 We'll get back to you soon."
        );
      } else {
        toast.error(responseData.message);
      }
    } catch (err) {
      toast.error(err.message || "Something Went Wrong, Please Try Again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <ToastContainer theme={isDark ? "dark" : "light" || "colored"} />
      {isLoading ? (
        <Loader />
      ) : (
        <form
          className=" w-full flex flex-col gap-4"
          onSubmit={handleSubmit}
          aria-labelledby="Contact Form"
        >
          <div className="w-full flex gap-2 items-center justify-between">
            <Input
              element="input"
              type="text"
              name="firstName"
              id="firstName"
              value={formData?.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
            <Input
              element="input"
              type="text"
              name="lastName"
              id="lastName"
              value={formData?.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Input
              element="input"
              type="email"
              name="email"
              id="email"
              value={formData?.email}
              placeholder="E-mail"
              onChange={handleChange}
            />
            <small className=" text-neutral-600 dark:text-neutral-200">
              We'll never share your email with anyone else.
            </small>
          </div>
          <Input
            name="message"
            id="message"
            rows={4}
            value={formData?.message}
            placeholder="Leave Your Message..."
            onChange={handleChange}
          />
          <Button
            type={"submit"}
            label={"send"}
            icon={<GrSend fontSize={28} color="white" />}
            fontWeight={"font-semibold"}
          />
        </form>
      )}
    </>
  );
};

export default ContactForm;
