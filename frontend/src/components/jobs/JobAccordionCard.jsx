import { useState } from "react";
import { Button } from "..";
import { jobVector } from "../../assets/images";

const JobAccordionCard = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex flex-col gap-4 bg-white dark:bg-slate-900 shadow-md rounded-xl p-4 transition-all ease-in-out duration-300">
      <div
        className=" w-full flex justify-between items-center cursor-pointer "
        onClick={toggleAccordion}
      >
        <h3 className="text-xl capitalize font-semibold text-slate-700 dark:text-slate-400">
          {job?.title}
        </h3>
        <svg
          className={`w-6 h-6 text-slate-700 dark:text-slate-400 ${
            isOpen
              ? "transform rotate-180 transition-all ease-in-out duration-300"
              : "transition-all ease-in-out duration-300"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      <div
        className={` overflow-auto flex gap-2 justify-between max-md:flex-col transition-max-height duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen max-w-full opacity-100"
            : "max-h-0 max-w-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-[250px] max-md:w-full h-[270px]">
          <img src={jobVector} alt={job?.title} />
        </div>
        <div className="w-full flex-1 flex flex-col gap-4 justify-between">
          <div>
            <h4 className="text-primary-600 text-lg font-bold capitalize">
              job description
            </h4>
            <p className="text-stone-600 dark:text-stone-200  text-base">
              {job?.description}
            </p>
          </div>
          <div>
            <h4 className="text-primary-600 text-lg font-bold capitalize">
              location
            </h4>
            <p className="text-stone-600 dark:text-stone-200  text-base">
              {job?.location}
            </p>
          </div>
          <div>
            <h4 className="text-primary-600 text-lg font-bold capitalize">
              expected salary
            </h4>
            <p className="text-stone-600 dark:text-stone-200  text-base">
              {!job?.expectedSalary || job?.expectedSalary === 0
                ? "unkown"
                : "EGP " + job?.expectedSalary}
            </p>
          </div>
          <Button
            label={"apply to job"}
            href={job?.applyLink}
            width={"w-32 max-md:w-full"}
            height={"h-10"}
            fontSize={"text-base"}
            target={"-blank"}
          />
        </div>
      </div>
    </div>
  );
};

export default JobAccordionCard;
