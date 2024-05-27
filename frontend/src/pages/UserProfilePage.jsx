import { useState, useEffect } from "react";
import { noProfilePic } from "../assets/images";
import { EditProfileModal, ProfileInfo } from "../components";

const UserProfilePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);

  useEffect(() => {
    document.title = "username";
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="min-h-[100dvh] pd-y bg-white dark:bg-slate-950">
      <div className="container flex justify-between gap-6 max-lg:flex-col">
        <section className="lg:w-1/5  max-md:w-full w-1/2 m-auto h-[340px] rounded-full">
          <img
            className="rounded-3xl"
            src={noProfilePic}
            alt="profile vector image"
          />
          {/* ./profile-image */}
        </section>
        <section className="w-full flex-1 flex flex-col justify-between gap-8">
          <ProfileInfo />
          <div className="flex bg-gree-600 items-center justify-between gap-2 w-fit max-lg:flex-col">
            <button
              className="w-[160px] h-10 rounded-xl bg-slate-700 hover:bg-slate-800 active:bg-slate-900 transition-all text-base capitalize font-medium text-white"
              onClick={() => setOpenModal(true)}
            >
              edit profile
            </button>
            <button className="w-[160px] h-10 rounded-xl bg-coral-red-700 hover:bg-coral-red-800 active:bg-coral-red-900 transition-all text-base capitalize font-medium text-white">
              deactivate account
            </button>
          </div>
        </section>
      </div>
      <EditProfileModal open={openModal} close={closeModal} />
    </section>
  );
};

export default UserProfilePage;
