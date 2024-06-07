import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { ToastContainer, toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import { Button, Loader } from "..";
import { ThemeContext } from "../../context/theme-context";
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const DeleteAccountModal = ({ open, close, userId }) => {
  const auth = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(false);
  if (!open) return null;

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(BASE_URL + `/api/users/${userId}`, {
        method: "DELETE",
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData);
        toast.success("User deleted successfully");
        auth.logout();
      } else {
        toast.error(responseData.message || "Failed to delete user");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong, please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer theme={isDark ? "dark" : "light" || "colored"} />
      <section className="w-full h-full" onClick={close}>
        <div className="layer flex justify-center items-center z-40">
          <div
            className="bg-white dark:bg-slate-900 lg:w-10/12 w-full min-h-[230px] flex flex-col p-2 fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {" "}
                <div className="flex w-full justify-between items-start">
                  <h3 className="text-slate-700 dark:text-slate-400 text-3xl  capitalize font-medium">
                    Delete Account Confirmation
                  </h3>
                  <button className="w-fit h-fit " onClick={close}>
                    <IoClose
                      className="text-slate-700 dark:text-slate-400 "
                      fontSize={30}
                    />
                  </button>
                </div>
                <p className="text-neutral-600 dark:text-neutral-200 text-lg my-8">
                  Are you sure you want to delete your account? This action
                  cannot be undone. All your data will be permanently deleted
                  and you will no longer have access to your account.
                </p>
                <div className="flex w-full justify-center items-center gap-5">
                  <Button
                    type={"button"}
                    label={"cancel"}
                    width={"w-[160px]"}
                    height={"h-10"}
                    backgroundColor={"bg-slate-700"}
                    hoverBgColor={"hover:bg-slate-800"}
                    activeBgColor={"active:bg-slate-900"}
                    fontSize={"text-base"}
                    onClick={close}
                  />
                  <Button
                    type={"button"}
                    label={"delete account"}
                    width={"w-[160px]"}
                    height={"h-10"}
                    backgroundColor={"bg-coral-red-700"}
                    hoverBgColor={"hover:bg-coral-red-800"}
                    activeBgColor={"active:bg-coral-red-900"}
                    fontSize={"text-base"}
                    onClick={handleDelete}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteAccountModal;
