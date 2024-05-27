import { useState, useContext } from "react";
import Input from "../shared/Input";
import { TYPESOFDISABILITY } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../context/auth-context";
import Loader from "../shared/Loader";
import { validateRegisterForm } from "../../utils/validation";
import "react-toastify/dist/ReactToastify.css";

const RegistForm = () => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
    birthDate: "",
    age: 0,
    disabilityType: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Handle radio inputs separately
    if (type === "radio" && checked) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  // Handle and calculate the age
  const calculateAge = (birthDate) => {
    const date = new Date(birthDate);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - date.getFullYear();
    const monthDiff = currentDate.getMonth() - date.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < date.getDate())
    ) {
      return age - 1;
    }
    return age;
  };
  // Handle dateOfBirth change
  const handleDateOfBirthChange = (e) => {
    const newDateOfBirth = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      birthDate: newDateOfBirth,
      age: calculateAge(newDateOfBirth),
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateRegisterForm(formData)) return;
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData);
        toast.success("User registered successfully", {
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
          action="/"
          aria-labelledby="Register Form"
        >
          <Input
            element="input"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            element="input"
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            element="input"
            type="text"
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
          />
          <Input
            element="input"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            element="input"
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <Input
            element="input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            element="input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <select
            name="disabilityType"
            id="typeOfDisability"
            className="w-full h-10 p-2 outline-none rounded-xl border border-primary-600 capitalize text-base text-neutral-700 dark:text-neutral-500 font-medium bg-transparent"
            defaultValue="select disability type"
            onChange={(e) =>
              setFormData({ ...formData, disabilityType: e.target.value })
            }
          >
            <option
              value="select disability type"
              disabled
              className="capitalize text-base font-medium text-neutral-500 "
            >
              select disability type
            </option>
            {TYPESOFDISABILITY.map((type) => {
              return (
                <option
                  value={type}
                  key={type}
                  className="capitalize text-base font-medium text-slate-700"
                >
                  {type}
                </option>
              );
            })}
          </select>
          {/* basic info */}
          <div className="w-full flex gap-1 max-md:flex-col md:items-center md:gap-3">
            <label
              className="text-lg capitalize text-neutral-600"
              htmlFor="gender"
            >
              select your gender
            </label>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                id="male"
                checked={formData.gender === "male"}
                value="male"
                onChange={handleChange}
              />
              <label
                className="text-base font-medium capitalize text-slate-700 dark:text-slate-400"
                htmlFor="male"
              >
                male
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                id="female"
                checked={formData.gender === "female"}
                value="female"
                onChange={handleChange}
              />
              <label
                className="text-base capitalize font-medium text-slate-700 dark:text-slate-400"
                htmlFor="female"
              >
                female
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                id="other"
                checked={formData.gender === "other"}
                value="other"
                onChange={handleChange}
              />
              <label
                className="text-base capitalize font-medium text-slate-700 dark:text-slate-400"
                htmlFor="other"
              >
                other
              </label>
            </div>
          </div>
          {/* gender */}
          <div className="w-full flex justify-between gap-1 max-md:flex-col md:items-center md:gap-2">
            <label
              className="text-lg capitalize text-neutral-600"
              htmlFor="dateOfBirth"
            >
              enter your birth date
            </label>
            <Input
              element="input"
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={formData.birthDate}
              onChange={handleDateOfBirthChange}
            />
          </div>
          {/* birthdate */}
          <button
            type="submit"
            className="w-full h-14 rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all text-2xl capitalize font-bold text-white"
          >
            register now
          </button>
        </form>
      )}
    </>
  );
};

export default RegistForm;
