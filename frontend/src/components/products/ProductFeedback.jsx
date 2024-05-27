import FeedbackForm from "../form/FeedbackForm";

const ProductFeedback = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-900 rounded-xl p-4 flex flex-col gap-4">
      <h4 className="text-slate-700 dark:text-slate-600 text-xl font-bold capitalize">
        feedback
      </h4>
      <div className="w-full flex flex-col gap-8 ">
        <p className="text-sm text-slate-700 dark:text-slate-500  py-2 border-b border-neutral-400 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis
          mollitia non cumque. Cum at quo dolorem, ipsam natus tempore fugiat,
          obcaecati assumenda consequuntur blanditiis aspernatur odit, velit
          vitae quidem?
        </p>
        <p className="text-sm text-slate-700 dark:text-slate-500 py-2 border-b border-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis
          mollitia non cumque. Cum at quo dolorem, ipsam natus tempore fugiat,
          obcaecati assumenda consequuntur blanditiis aspernatur odit, velit
          vitae quidem?
        </p>
        <p className="text-sm text-slate-700 dark:text-slate-500 py-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis
          mollitia non cumque. Cum at quo dolorem, ipsam natus tempore fugiat,
          obcaecati assumenda consequuntur blanditiis aspernatur odit, velit
          vitae quidem?
        </p>
      </div>
      <FeedbackForm />
    </section>
  );
};

export default ProductFeedback;
