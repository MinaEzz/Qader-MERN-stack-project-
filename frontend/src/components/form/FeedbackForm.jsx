import { Button } from "..";
const FeedbackForm = () => {
  return (
    <form
      className="w-full flex flex-col gap-4"
      aria-labelledby="Feedback Form"
    >
      <textarea
        name="feedback"
        id="feedback"
        rows="4"
        placeholder="Leave Your Feedback..."
        className="w-full h-10 bg-transparent flex-1 outline-none text-base text-neutral-700 font-medium placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-medium border border-primary-600 rounded-xl"
      />
      <Button type="submit" label={"send"} />
    </form>
  );
};

export default FeedbackForm;
