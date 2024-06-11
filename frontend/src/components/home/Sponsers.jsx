import { SPONSERS } from "../../constants";

const Sponsers = () => {
  return (
    <ul className="flex items-center justify-center gap-4 flex-wrap">
      {SPONSERS.map((sponser) => {
        return (
          <li key={sponser.name} className=" w-[260px] h-[260px]">
            <img
              src={sponser.image}
              alt={sponser.name}
              className=" rounded-xl"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Sponsers;
