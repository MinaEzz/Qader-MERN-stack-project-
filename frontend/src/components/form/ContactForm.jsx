import Input from "../shared/Input";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className=" w-full flex flex-col gap-4"
      onSubmit={handleSubmit}
      aria-labelledby="Contact Form"
    >
      <div className="w-full flex gap-2 items-center justify-between">
        <Input
          element="input"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
        />
        <Input
          element="input"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Input
          element="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <small className=" text-neutral-700">
          We'll never share your email with anyone else.
        </small>
      </div>
      <Input
        name="message"
        id="message"
        rows={4}
        placeholder="Leave Your Message..."
        className="w-full h-10 bg-transparent flex-1 outline-none text-base text-neutral-700 font-medium placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-medium border border-primary-600 rounded-xl"
      />
      <button
        type="submit"
        className="w-52 mx-auto h-14  rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all text-2xl capitalize font-bold text-white"
      >
        submit
      </button>
    </form>
  );
};

export default ContactForm;
