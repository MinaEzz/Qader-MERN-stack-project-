const PageNotFound = () => {
  return (
    <section className="w-full min-h-[100dvh] pd-y">
      <div className="container flex flex-col gap-4 items-center justify-center">
        <h1 className="text-6xl text-center font-bold text-primary-600">
          404 Not Found
        </h1>
        <p className="text-xl text-center text-neutral-600 dark:text-neutral-200">
          The page you are looking for does not exist.
        </p>
      </div>
    </section>
  );
};

export default PageNotFound;
