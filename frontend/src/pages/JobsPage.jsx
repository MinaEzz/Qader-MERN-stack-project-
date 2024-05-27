import { useEffect } from "react";
import { JobAccordionCard } from "../components";
import { JOBS } from "../constants";
import { jobsVector } from "../assets/images";

const JobsPage = () => {
  useEffect(() => {
    document.title = "Find A Job";
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="min-h-[100dvh] pd-y">
      <h2 className="w-fit text-center mx-auto text-4xl font-bold uppercase text-slate-700 dark:text-slate-400 after:w-1/2 after:h-[2px] after:block after:mx-auto after:mt-[1px] after:bg-slate-700 dark:after:bg-slate-400 hover:after:w-full hover:after:transition-all hover:after:duration-500 hover:after:ease-in-out after:duration-500">
        <span className="text-primary-600">find</span> a job
      </h2>
      <div className="container mt-8 flex items-center justify-between max-lg:flex-col gap-4">
        <section className="w-full flex flex-1 flex-col gap-4">
          {JOBS.map((job) => {
            return <JobAccordionCard key={job.id} job={job} />;
          })}
        </section>
        <section className="w-full h-[500px] flex-1">
          <img src={jobsVector} alt="Find Job Image" />
        </section>
      </div>
    </section>
  );
};

export default JobsPage;
