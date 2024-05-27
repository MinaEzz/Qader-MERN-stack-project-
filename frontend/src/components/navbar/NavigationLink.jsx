import { NavLink } from "react-router-dom";

const NavigationLink = (probs) => {
  return (
    <NavLink
      to={probs.to}
      className="capitalize text-slate-700 dark:text-slate-400 active:text-slate-900 text-lg font-semibold after:w-0 after:h-[2px] after:block after:mt-[1px] after:bg-slate-700 dark:after:bg-slate-400 hover:after:w-full hover:after:transition-all hover:after:duration-300 after:duration-300 hover:after:ease-in-out"
    >
      {probs.title}
    </NavLink>
  );
};

export default NavigationLink;
