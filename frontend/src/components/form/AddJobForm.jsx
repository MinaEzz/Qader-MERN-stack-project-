import Input from "../shared/Input";
const AddJobForm = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-4 flex flex-col gap-4">
      <h2 className="text-center capitalize text-3xl font-semibold text-primary-600">
        add a job
      </h2>
      <form
        className="w-full flex flex-col gap-4"
        aria-labelledby="Add Job Form"
      >
        <Input type={"text"} placeholder={"Job Title"} />
        <Input type={"text"} placeholder={"Applying Job Link"} />

        <textarea
          name="jobDescription"
          id="jobDescription"
          rows="4"
          placeholder="Job Description..."
          className="w-full h-10 bg-transparent flex-1 outline-none text-base text-neutral-700 dark:text-neutral-500 font-medium placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-medium border border-primary-600 rounded-xl"
        />
        <button
          type="submit"
          className=" w-40 mx-auto h-12  rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all text-xl capitalize font-bold text-white"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default AddJobForm;
