const ServiceCard = ({ title, icon }) => {
  return (
    <div
      className="flex flex-1 w-full items-center justify-center max-md:justify-start gap-2 p-4"
      key={title}
    >
      <i className="text-neutral-600 dark:text-neutral-500">{icon}</i>
      <p className="capitalize text-slate-700 dark:text-slate-400 font-medium text-xl">
        {title}
      </p>
    </div>
  );
};

export default ServiceCard;
