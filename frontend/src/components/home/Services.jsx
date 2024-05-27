import { SERVICES } from "../../constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="w-full h-fit py-3 bg-white dark:bg-slate-900">
      <div className="container flex justify-between items-center gap-2 flex-wrap max-md:flex-col">
        {SERVICES.map((service) => {
          return <ServiceCard key={service.title} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
