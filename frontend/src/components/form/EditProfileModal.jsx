import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../shared/Input";
import { TYPESOFDISABILITY } from "../../constants";

const EditProfileModal = ({ open, close }) => {
  if (!open) return null;
  return (
    <section className="w-full h-full " onClick={close}>
      <div className="layer flex justify-center items-center z-40">
        <div
          className="bg-white dark:bg-slate-900 h-full w-10/12 flex flex-col p-2 gap-8 fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 overflow-scroll lg:justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-slate-700 dark:text-slate-600 text-3xl  capitalize font-medium">
            edit profile
          </h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col items gap-1">
              <label
                className="text-lg capitalize text-neutral-600"
                htmlFor="profileImage"
              >
                profile image:
              </label>
              <input
                className=" cursor-pointer text-slate-600 dark:text-white"
                type="file"
                name="profileImage"
                id="profileImage"
              />
            </div>
            <section className="flex justify-between gap-4 items-center max-lg:flex-col">
              <div className="flex w-full flex-1 flex-col items gap-1">
                <label
                  className="text-lg capitalize text-neutral-600"
                  htmlFor="name"
                >
                  name:
                </label>
                <Input
                  element="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={""}
                  id={"name"}
                />
              </div>
              <div className="flex w-full flex-1 flex-col items gap-1">
                <label
                  className="text-lg capitalize text-neutral-600"
                  htmlFor="username"
                >
                  username:
                </label>
                <Input
                  element="input"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={""}
                  id={"username"}
                />
              </div>
            </section>
            {/* ./ name & username */}
            <section className="flex justify-between gap-4 items-center max-lg:flex-col">
              <div className="flex w-full flex-1 flex-col items gap-1">
                <label
                  className="text-lg capitalize text-neutral-600"
                  htmlFor="email"
                >
                  email:
                </label>
                <Input
                  element="input"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={""}
                  id={"email"}
                />
              </div>
              <div className="flex w-full flex-1 flex-col items gap-1">
                <label
                  className="text-lg capitalize text-neutral-600"
                  htmlFor="phoneNumber"
                >
                  phone number:
                </label>
                <Input
                  element="input"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={""}
                  id={"phoneNumber"}
                />
              </div>
            </section>
            {/* ./ email & phone number  */}
            <section className="flex justify-between gap-4 items-center max-lg:flex-col">
              <div className="flex w-full flex-1 flex-col items gap-1">
                <label
                  className="text-lg capitalize text-neutral-600"
                  htmlFor="address"
                >
                  address:
                </label>
                <Input
                  element="input"
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  value={""}
                  id={"address"}
                />
              </div>
              <div className="flex w-full flex-1 flex-col items gap-1">
                <label
                  className="text-lg capitalize text-neutral-600"
                  htmlFor="dateOfBirth"
                >
                  date of birth:
                </label>
                <Input
                  element="input"
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  value={""}
                  // onChange={handleDateOfBirthChange}
                />
              </div>
              {/* birthdate */}
            </section>
            {/* ./ address & date of birth */}
            <section className="flex justify-between gap-4 items-center max-lg:flex-col">
              <div className="w-full flex flex-1 gap-1 max-md:flex-col md:items-center md:gap-3">
                <label
                  className="text-lg capitalize text-neutral-600"
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
                    // checked={formData.gender === "male"}
                    value="male"
                    // onChange={handleChange}
                  />
                  <label
                    className="text-base font-medium capitalize text-slate-700"
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
                    // checked={formData.gender === "female"}
                    value="female"
                    // onChange={handleChange}
                  />
                  <label
                    className="text-base capitalize font-medium text-slate-700"
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
                    // checked={formData.gender === "other"}
                    value="other"
                    // onChange={handleChange}
                  />
                  <label
                    className="text-base capitalize font-medium text-slate-700"
                    htmlFor="other"
                  >
                    other
                  </label>
                </div>
              </div>
              {/* gender */}
              <div className="flex w-full flex-1 flex-col items gap-1">
                <label
                  className="text-lg capitalize text-neutral-600"
                  htmlFor="typeOfDisability"
                >
                  type of disability:
                </label>
                <select
                  name="typeOfDisability"
                  id="typeOfDisability"
                  className="w-full h-10 p-2 outline-none rounded-xl border border-primary-600 capitalize text-base text-neutral-700 dark:text-neutral-500 font-medium bg-transparent"
                  defaultValue="select disability type"
                  // onChange={(e) =>
                  //   setFormData({ ...formData, disabilityType: e.target.value })
                  // }
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
              </div>
            </section>
            <div className="flex max-lg:flex-col justify-center items-center gap-4">
              <button
                className="w-[160px] h-10 rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all text-base capitalize font-medium text-white"
                type="submit"
              >
                save changes
              </button>
              <button
                className="w-[160px] h-10 rounded-xl bg-slate-700 hover:bg-slate-800 active:bg-slate-900 transition-all text-base capitalize font-medium text-white"
                onClick={close}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default EditProfileModal;
