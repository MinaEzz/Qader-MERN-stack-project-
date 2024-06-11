import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context/theme-context";
import { noProfilePic } from "../assets/images";
import {
  EditProfileModal,
  ProfileInfo,
  DeleteAccountModal,
  Button,
  Loader,
} from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const UserProfilePage = () => {
  const { isDark } = useContext(ThemeContext);
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [user, setUser] = useState({});
  const closeEditModal = () => setOpenEditModal(false);
  const closeDeleteModal = () => setOpenDeleteModal(false);

  useEffect(() => {
    const getUserById = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(BASE_URL + `/api/users/${userId}`);
        const responseData = await response.json();
        if (response.ok) {
          console.log(responseData);
          setUser(responseData.data.user);
        } else {
          console.log(responseData);
          toast.error(responseData.message);
        }
      } catch (err) {
        console.log(err);
        toast.error(err.message || "Something Went Wrong, Please Try Again.");
      } finally {
        setIsLoading(false);
      }
    };
    getUserById();
    document.title = user.name;
    window.scrollTo(0, 0);
  }, [userId, user.name]);

  return (
    <section className="min-h-[100dvh] pd-y bg-white dark:bg-slate-950">
      <ToastContainer theme={isDark ? "dark" : "light" || "colored"} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="container flex justify-between gap-6 max-lg:flex-col">
            <section className="lg:w-[24%]  max-md:w-full w-1/2 m-auto lg:h-[340px] h-full rounded-full">
              {!user?.image ||
              user?.image === null ||
              user?.image === "null" ? (
                <img
                  className="rounded-3xl"
                  src={noProfilePic}
                  alt="profile vector image"
                />
              ) : (
                <img
                  className="rounded-3xl"
                  src={BASE_URL + "/uploads/images/" + user?.image}
                  alt={user?.name}
                />
              )}
              {/* ./profile-image */}
            </section>
            <section className="w-full flex-1 w-full flex flex-col justify-between gap-8">
              <ProfileInfo user={user} />
              <div className="flex bg-gree-600 items-center justify-between gap-2 w-fit max-lg:flex-col">
                <Button
                  label={"edit profile"}
                  width={"w-[160px]"}
                  height={"h-10"}
                  backgroundColor={"bg-slate-700"}
                  hoverBgColor={"hover:bg-slate-800"}
                  activeBgColor={"active:bg-slate-900"}
                  fontSize={"text-base"}
                  onClick={() => setOpenEditModal(true)}
                />
                <Button
                  label={"delete account"}
                  width={"w-[160px]"}
                  height={"h-10"}
                  backgroundColor={"bg-coral-red-700"}
                  hoverBgColor={"hover:bg-coral-red-800"}
                  activeBgColor={"active:bg-coral-red-900"}
                  fontSize={"text-base"}
                  onClick={() => setOpenDeleteModal(true)}
                />
              </div>
            </section>
          </div>
          <EditProfileModal
            open={openEditModal}
            close={closeEditModal}
            user={user}
            userId={userId}
          />
          <DeleteAccountModal
            open={openDeleteModal}
            close={closeDeleteModal}
            userId={userId}
          />
        </>
      )}
    </section>
  );
};

export default UserProfilePage;
