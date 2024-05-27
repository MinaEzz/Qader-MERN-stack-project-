const ProfileInfo = () => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h3 className="text-3xl text-primary-600 font-bold capitalize">
        abdo mousa
      </h3>
      <div className="flex justify-between  gap-2 max-lg:flex-col">
        <ul className="flex-1 w-full space-y-2">
          <li className="text-lg text-slate-700 dark:text-slate-600">
            Age: <span className="font-bold">21</span>
          </li>
          <li className="text-lg text-slate-700 dark:text-slate-600">
            Gender: <span className="font-bold">male</span>
          </li>
          <li className="text-lg text-slate-700 dark:text-slate-600">
            Adress: <span className="font-bold">Fesal, Giza</span>
          </li>
        </ul>
        <ul className="flex-1 w-full space-y-2">
          <li className="text-lg text-slate-700 dark:text-slate-600">
            Username: <span className="font-bold">Mosa22</span>
          </li>
          <li className="text-lg text-slate-700 dark:text-slate-600">
            Email: <span className="font-bold">abdomosa@gmail.com</span>
          </li>
          <li className="text-lg text-slate-700 dark:text-slate-600">
            Phone number: <span className="font-bold">0111222444888</span>
          </li>
          <li className="text-lg text-slate-700 dark:text-slate-600">
            Profile type: <span className="font-bold">unkown</span>
          </li>
          <li className="text-lg text-slate-700 dark:text-slate-600">
            Company name OR Type of disability:
            <span className="font-bold">unkown</span>
          </li>
          <li className="text-lg text-slate-700 dark:text-slate-600">
            Account creation date: <span className="font-bold">21/5/2025</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProfileInfo;
