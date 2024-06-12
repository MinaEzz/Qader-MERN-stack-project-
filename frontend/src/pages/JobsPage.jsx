import { useEffect, useState } from "react";
import { JobAccordionCard, Loader } from "../components";
import { jobsVector } from "../assets/images";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(BASE_URL + "/api/jobs");
      const responseData = await response.json();
      if (response.ok) {
        setJobs(responseData?.data?.jobs);
      } else {
        toast.error(responseData?.message);
      }
    } catch (err) {
      toast.error(err?.message || "Something Went Wrong, Please Try Again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
    document.title = "Find A Job";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ToastContainer />
      <section className="min-h-[100dvh] pd-y">
        <h2 className="w-fit text-center mx-auto text-4xl font-bold uppercase text-slate-700 dark:text-slate-400 after:w-1/2 after:h-[2px] after:block after:mx-auto after:mt-[1px] after:bg-slate-700 dark:after:bg-slate-400 hover:after:w-full hover:after:transition-all hover:after:duration-500 hover:after:ease-in-out after:duration-500">
          <span className="text-primary-600">find</span> a job
        </h2>
        <div className="container mt-8 flex justify-between max-lg:flex-col gap-4">
          <section className="w-full flex flex-1 flex-col gap-4">
            {isLoading ? (
              <Loader />
            ) : !jobs || jobs?.length === 0 ? (
              <h2> no jobs found</h2>
            ) : (
              jobs?.map((job) => {
                return <JobAccordionCard key={job?._id} job={job} />;
              })
            )}
          </section>
          <section className="w-full h-[500px] flex-1">
            <img src={jobsVector} alt="Find Job Image" />
          </section>
        </div>
      </section>
    </>
  );
};

export default JobsPage;
