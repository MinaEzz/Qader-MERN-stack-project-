const AboutContent = ({ title, content, image }) => {
  return (
    <section className="flex justify-between items-center gap-5 max-lg:flex-col py-4 lg:even:flex-row-reverse ">
      <div className="flex-1">
        <h3 className="text-primary-600 text-3xl font-bold capitalize">
          {title}
        </h3>
        <p className="mt-6 text-stone-600 text-lg"> {content} </p>
      </div>
      <div className="w-full lg:flex-1 h-[500px]">
        <img src={image} alt="Vision image" />
      </div>
    </section>
  );
};

export default AboutContent;
