import { useEffect } from "react";
import { UsTitle } from "../components";
import ContactForm from "../components/form/ContactForm";
import { FaPhone, FaEnvelope, FaMobile } from "react-icons/fa";

const ContactUsPage = () => {
  useEffect(() => {
    document.title = "Contact Us";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-[100dvh] pd-y bg-white dark:bg-slate-950">
      <UsTitle title="contact" />
      <div className="container flex justify-between items-center max-lg:flex-col gap-4 mt-8">
        <section className="w-full flex-1">
          <ContactForm />
        </section>
        <section className="w-full flex-1 flex flex-col gap-2">
          <iframe
            className="w-full h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4922513823444!2d30.95363942537168!3d29.965280222318913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145856f244e1460f%3A0xb54edb6f7dd85227!2sSquare%20mall!5e0!3m2!1sar!2seg!4v1708717815741!5m2!1sar!2seg"
            loading="lazy"
          />
          <div className="w-full flex items-center justify-between max-lg:flex-col gap-2">
            <p className="w-full flex flex-1 items-center gap-1  text-sm text-stone-600 font-medium">
              <FaPhone className="text-primary-600" fontSize={14} />
              0235168014
            </p>
            <p className="w-full flex flex-1 items-center gap-1  text-sm text-stone-600 font-medium">
              <FaMobile className="text-primary-600" fontSize={14} />
              +201032266950
            </p>
            <p className="w-full flex flex-1 items-center gap-1  text-sm text-stone-600 font-medium">
              <FaEnvelope className="text-primary-600" fontSize={14} />
              qader2024bis@gmail.com
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactUsPage;
