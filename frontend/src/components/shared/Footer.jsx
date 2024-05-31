/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { whiteLogo } from "../../assets/images";
import {
  SOCIALMEDIA,
  MOBILEAPP,
  PAGES,
  FOOTER_CATEGORIES,
  FOR_USERS,
} from "../../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-600 pd-y-s">
      <div className="container flex gap-12 items-start justify-between max-lg:flex-col">
        <section className=" flex flex-1 w-full flex-col gap-8">
          <Link to="/" className="w-[80px] h-[90px] ">
            <img
              src={whiteLogo}
              alt="Qader Logo"
              draggable={false}
              loading="lazy"
            />
          </Link>
          <p className="text-sm capitalize text-white leading-6">
            Discover a world of possibilities. Qader is not just a store it's a
            gateway to independence.
          </p>
          <ul className="flex items-center gap-5">
            {SOCIALMEDIA.map((media) => {
              return (
                <li key={media.title}>
                  <a
                    className="flex justify-center items-center w-10 h-10 bg-neutral-100 dark:bg-slate-900 rounded-full"
                    href={media.ref}
                  >
                    {media.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="flex flex-1 w-full flex-col gap-8 ">
          <h4 className="text-lg font-medium text-white uppercase">pages</h4>
          <ul className="w-full flex flex-col gap-5">
            {PAGES.map((page) => {
              return (
                <li key={page.title}>
                  <Link
                    className="text-base capitalize text-white"
                    to={page.url}
                  >
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="flex flex-1 w-full flex-col gap-8">
          <h4 className="text-lg font-medium text-white uppercase">
            categories
          </h4>
          <ul className="w-full flex flex-col gap-5">
            {FOOTER_CATEGORIES.map((category) => {
              return (
                <li key={category.title}>
                  <Link
                    className="text-base capitalize text-white "
                    to={category.url}
                  >
                    {category.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="flex flex-1 w-full flex-col gap-8">
          <h4 className="text-lg font-medium text-white uppercase">users</h4>
          <ul className="w-full flex flex-col gap-5">
            {FOR_USERS.map((link) => {
              return (
                <li key={link.title}>
                  <Link
                    className="text-base capitalize text-white "
                    to={link.url}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="flex flex-1 w-full flex-col gap-8">
          <h4 className="text-lg font-medium text-white uppercase">
            download our app
          </h4>
          <ul className="w-full flex flex-col gap-5">
            {MOBILEAPP.map((store) => {
              return (
                <li className="w-[218px]" key={store.title}>
                  <a
                    className="flex w-full items-center justify-start gap-4 border border-white rounded-xl px-4 py-2"
                    href="/"
                  >
                    <div className="w-[34px]">
                      <img src={store.icon} alt={store.title} />
                    </div>
                    <p className="text-sm text-white capitalize">
                      download on <br />
                      <span className=" font-semibold ">{store.title}</span>
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
