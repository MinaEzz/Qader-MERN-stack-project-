const ProfileInfo = ({ user }) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="text-3xl text-primary-600 font-bold dark:font-extrabold capitalize">
        {user?.name}
      </h3>
      <div className="flex justify-between  gap-2 max-lg:flex-col">
        <ul className="flex-1 w-full space-y-2">
          <li className="text-lg capitalize text-slate-700 dark:text-slate-400">
            Age:{" "}
            <span className="font-bold dark:font-extrabold">{user?.age}</span>
          </li>
          <li className="text-lg capitalize text-slate-700 dark:text-slate-400">
            Gender:{" "}
            <span className="font-bold dark:font-extrabold">
              {user?.gender}
            </span>
          </li>
          <li className="text-lg capitalize text-slate-700 dark:text-slate-400">
            Adress:{" "}
            <span className="font-bold dark:font-extrabold">
              {user?.address}
            </span>
          </li>
        </ul>
        <ul className="flex-1 w-full space-y-2">
          <li className="text-lg capitalize text-slate-700 dark:text-slate-400">
            Username:{" "}
            <span className="font-bold dark:font-extrabold">
              {user?.username}
            </span>
          </li>
          <li className="text-lg text-slate-700 dark:text-slate-400">
            Email:{" "}
            <span className="font-bold dark:font-extrabold">{user?.email}</span>
          </li>
          <li className="text-lg text-slate-700 dark:text-slate-400">
            Phone Number:{" "}
            <span className="font-bold dark:font-extrabold">
              {user?.phoneNumber}
            </span>
          </li>
          <li className="text-lg capitalize text-slate-700 dark:text-slate-400">
            Type of disability:{" "}
            <span className="font-bold dark:font-extrabold">
              {user?.disabilityType?.name}
            </span>
          </li>
          <li className="text-lg capitalize text-slate-700 dark:text-slate-400">
            Account creation date:{" "}
            <span className="font-bold dark:font-extrabold">
              {new Date(user?.createdAt).toLocaleDateString()}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProfileInfo;
