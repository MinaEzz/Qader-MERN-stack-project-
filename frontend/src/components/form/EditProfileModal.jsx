import { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../shared/Input";
import Loader from "../shared/Loader";
import { Button } from "..";
import { validateUpdateForm } from "../../utils/validation";
import { ThemeContext } from "../../context/theme-context";
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const EditProfileModal = ({ open, close, user, userId }) => {
  const { isDark } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(false);
  const [disabilityTypes, setDisabilityTypes] = useState([]);
  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email,
    address: user?.address,
    username: user?.username,
    phoneNumber: user?.phoneNumber,
    gender: user?.gender,
    birthDate: user?.birthDate,
    age: user?.age,
    disabilityTypeName: user?.disabilityType?.name,
    disabilityTypeId: user?.disabilityType?.id,
    image: user?.image,
  });
  // Handle file input and generate image URL
  const pickFile = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
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
    const newDateOfBirth = new Date(e.target.value)
      .toISOString()
      .substring(0, 10);
    setFormData((prevData) => ({
      ...prevData,
      birthDate: newDateOfBirth,
      age: calculateAge(newDateOfBirth),
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "file") {
      pickFile(e);
    } else if (type === "radio" && checked) {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateUpdateForm(formData)) return;
    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await fetch(BASE_URL + `/api/users/${userId}`, {
        method: "PATCH",
        body: formDataToSend,
      });
      const responseData = await response.json();
      if (response.ok) {
        toast.success("User updated successfully.");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error(responseData?.message);
      }
    } catch (err) {
      toast.error(err?.message || "Something Went Wrong, Please Try Again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchDisabilities = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(BASE_URL + "/api/disability");
        const responseData = await response.json();
        if (response.ok) {
          setDisabilityTypes(responseData?.data?.disabilities);
        } else {
          toast.error(responseData?.message);
        }
      } catch (err) {
        toast.error(err?.message || "Something Went Wrong, Please Try Again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchDisabilities();
  }, []);

  if (!open) return null;
  return (
    <>
      <ToastContainer theme={isDark ? "dark" : "light"} />
      <section className="w-full h-full " onClick={close}>
        <div className="layer flex justify-center items-center z-40">
          <div
            className="bg-white dark:bg-slate-900 h-full w-10/12 flex flex-col p-2 gap-8 fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 overflow-scroll lg:justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {" "}
                <h3 className="text-slate-700 dark:text-slate-400 text-3xl  capitalize font-medium">
                  edit profile
                </h3>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  <div className="flex flex-col items gap-1">
                    <label
                      className="text-lg capitalize text-neutral-600 dark:text-neutral-200"
                      htmlFor="image"
                    >
                      profile image:
                    </label>
                    <input
                      className=" cursor-pointer text-neutral-600 dark:text-neutral-200"
                      type="file"
                      name="image"
                      id="image"
                      accept=".jpg, .png, .jpeg"
                      onChange={handleChange}
                    />
                  </div>
                  <section className="flex justify-between gap-4 items-center max-lg:flex-col">
                    <div className="flex w-full flex-1 flex-col items gap-1">
                      <label
                        className="text-lg capitalize text-neutral-600 dark:text-neutral-200"
                        htmlFor="name"
                      >
                        name:
                      </label>
                      <Input
                        element="input"
                        type="text"
                        name="name"
                        id={"name"}
                        placeholder="Name"
                        value={formData?.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex w-full flex-1 flex-col items gap-1">
                      <label
                        className="text-lg capitalize text-neutral-600 dark:text-neutral-200"
                        htmlFor="username"
                      >
                        username:
                      </label>
                      <Input
                        element="input"
                        type="text"
                        name="username"
                        id={"username"}
                        placeholder="Username"
                        value={formData?.username}
                        onChange={handleChange}
                      />
                    </div>
                  </section>
                  {/* ./ name & username */}
                  <section className="flex justify-between gap-4 items-center max-lg:flex-col">
                    <div className="flex w-full flex-1 flex-col items gap-1">
                      <label
                        className="text-lg capitalize text-neutral-600 dark:text-neutral-200"
                        htmlFor="email"
                      >
                        email:
                      </label>
                      <Input
                        element="input"
                        type="email"
                        name="email"
                        id={"email"}
                        placeholder="E-mail"
                        value={formData?.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex w-full flex-1 flex-col items gap-1">
                      <label
                        className="text-lg capitalize text-neutral-600 dark:text-neutral-200"
                        htmlFor="phoneNumber"
                      >
                        phone number:
                      </label>
                      <Input
                        element="input"
                        type="tel"
                        name="phoneNumber"
                        id={"phoneNumber"}
                        placeholder="Phone Number"
                        value={formData?.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </section>
                  {/* ./ email & phone number  */}
                  <section className="flex justify-between gap-4 items-center max-lg:flex-col">
                    <div className="flex w-full flex-1 flex-col items gap-1">
                      <label
                        className="text-lg capitalize text-neutral-600 dark:text-neutral-200"
                        htmlFor="address"
                      >
                        address:
                      </label>
                      <Input
                        element="input"
                        type="text"
                        name="address"
                        id={"address"}
                        placeholder="Your Address"
                        value={formData?.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex w-full flex-1 flex-col items gap-1">
                      <label
                        className="text-lg capitalize text-neutral-600 dark:text-neutral-200"
                        htmlFor="birthDate"
                      >
                        date of birth:
                      </label>
                      <Input
                        element="input"
                        type="date"
                        name="birthDate"
                        id="birthDate"
                        value={new Date(formData?.birthDate)
                          .toISOString()
                          .substring(0, 10)}
                        onChange={handleDateOfBirthChange}
                      />
                    </div>
                    {/* birthdate */}
                  </section>
                  {/* ./ address & date of birth */}
                  <section className="flex justify-between gap-4 items-center max-lg:flex-col">
                    <div className="w-full flex flex-1 gap-1 max-md:flex-col md:items-center md:gap-3">
                      <label
                        className="text-lg capitalize text-neutral-600 dark:text-neutral-200"
                        htmlFor="gender"
                      >
                        gender:
                      </label>
                      <div className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          required
                          checked={formData?.gender === "male"}
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
                          required
                          checked={formData?.gender === "female"}
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
                          required
                          checked={formData?.gender === "other"}
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
                    <div className="flex w-full flex-1 flex-col items gap-1">
                      <label
                        className="text-lg capitalize text-neutral-600 dark:text-neutral-200"
                        htmlFor="disabilityType"
                      >
                        type of disability:
                      </label>
                      <select
                        name="disabilityType"
                        id="disabilityType"
                        className="w-full h-10 p-2 outline-none rounded-xl border border-primary-600 capitalize text-base text-neutral-600 dark:text-neutral-200 font-medium bg-transparent"
                        value={formData?.disabilityTypeId}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            disabilityTypeId: e.target.value,
                          });
                        }}
                      >
                        {disabilityTypes?.map((type) => {
                          return (
                            <option
                              value={type?._id}
                              key={type?._id}
                              className="capitalize text-base font-medium text-slate-700"
                            >
                              {type?.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </section>
                  <div className="flex max-lg:flex-col justify-center items-center gap-4">
                    <Button
                      label={"cancel"}
                      type={"button"}
                      width={"w-[160px]"}
                      fontSize={"text-base"}
                      height={"h-10"}
                      backgroundColor={"bg-slate-700"}
                      hoverBgColor={"hover:bg-slate-800"}
                      activeBgColor={"active:bg-slate-900"}
                      onClick={close}
                    />
                    <Button
                      label={"save changes"}
                      type={"submit"}
                      width={"w-[160px]"}
                      fontSize={"text-base"}
                      height={"h-10"}
                    />
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProfileModal;
