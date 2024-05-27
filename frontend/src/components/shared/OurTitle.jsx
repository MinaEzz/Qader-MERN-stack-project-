const OurTitle = ({ title }) => {
  return (
    <h2 className="w-fit mx-auto text-center text-4xl font-bold uppercase text-slate-700 dark:text-slate-600 after:bg-slate-700 dark:after:bg-slate-600 after:w-1/2 after:h-[2px] after:block after:mx-auto after:mt-[1px]  hover:after:w-full hover:after:transition-all hover:after:duration-500 hover:after:ease-in-out after:duration-500">
      <span className="text-primary-600">our</span> {title}
    </h2>
  );
};

export default OurTitle;
