// Services Constants
import { FaRegFaceSmileBeam, FaFaceGrinStars } from "react-icons/fa6";
import { FaDollarSign, FaShippingFast } from "react-icons/fa";
export const SERVICES = [
  { title: "100% satisfaction", icon: <FaRegFaceSmileBeam size={38} /> },
  { title: "valuable products", icon: <FaDollarSign size={38} /> },
  { title: "fast shipping", icon: <FaShippingFast size={38} /> },
  { title: "job opportunities", icon: <FaFaceGrinStars size={38} /> },
];
// Sponsers Constants
import { sofco, appxcel, forasna, qadron, velva } from "../assets/images";
export const SPONSERS = [
  {
    name: "فرصنا",
    image: forasna,
  },
  {
    name: "قادرون باختلاف",
    image: qadron,
  },
  {
    name: "sofco",
    image: sofco,
  },
  {
    name: "appxcel",
    image: appxcel,
  },
  {
    name: "velva",
    image: velva,
  },
];
// About page Constants
export const VISION =
  "Create an inclusive and empowering online space where individuals with disabilities can access a diverse range of specialized equipment and explore meaningful job opportunities. We envision a world where everyone, regardless of ability, has the tools and opportunities to lead a fulfilling and independent life.";

export const MISSION = `Offer a curated selection of high-quality equipment designed to enhance the daily lives of individuals with disabilities, promoting accessibility and independence.
  Cultivate an inclusive online community that celebrates diversity and fosters a sense of belonging, ensuring that our users feel seen, heard, and valued.
  Connect individuals with disabilities to meaningful job opportunities, partnering with organizations that prioritize diversity and inclusivity in the workplace.
  Raise awareness about the challenges faced by individuals with disabilities and advocate for a more inclusive society. Support initiatives that promote accessibility and equal opportunities.
  Deliver exceptional customer service to ensure a positive and supportive experience for every user, from product selection to employment connections.
  we strive to revolutionize the shopping experience for people with disabilities.
  `;

// Footer Constants
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";
export const SOCIALMEDIA = [
  {
    icon: <FaFacebook size={20} className="text-primary-600" />,
    title: "facebook",
    ref: "",
  },
  {
    icon: <FaTwitter size={20} className="text-primary-600" />,
    title: "twitter",
    ref: "",
  },
  {
    icon: <FaInstagram size={20} className="text-primary-600" />,
    title: "instagram",
    ref: "",
  },
  {
    icon: <FaLinkedin size={20} className="text-primary-600" />,
    title: "linkedin",
    ref: "",
  },
  {
    icon: <FaEnvelope size={20} className="text-primary-600" />,
    title: "email",
    ref: "mailto:qader2024bis@gmail.com",
  },
];
import { googlePlayIcon, appleIcon } from "../assets/images";
export const MOBILEAPP = [
  { title: "google play store", icon: googlePlayIcon },
  { title: "apple store", icon: appleIcon },
];
export const PAGES = [
  { title: "home", url: "/" },
  { title: "products", url: "/products" },
  { title: "about us", url: "/about-us" },
  { title: "contact us", url: "/contact-us" },
  { title: "jobs", url: "/jobs" },
];
export const FOOTER_CATEGORIES = [
  {
    title: "all",
    url: "/products",
  },
  {
    title: "home healthcare",
    url: "products/6658a6fa10999fa1733c9ac7/home healthcare",
  },
  {
    title: "hearing & deaf",
    url: "/products/6658a749b5b98b9959dc60ed/hearing & deaf",
  },
  {
    title: "household",
    url: "/products/6658a757b5b98b9959dc60f0/household",
  },
  {
    title: "mobility",
    url: "/products/6658a760b5b98b9959dc60f3/mobility",
  },
  {
    title: "vision & blind",
    url: "/products/6658a76cb5b98b9959dc60f6/vision%20&%20blind",
  },
  {
    title: "technology",
    url: "/products/6658a777b5b98b9959dc60f9/technology",
  },
];
export const FOR_USERS = [
  {
    title: "login",
    url: "/authentication",
  },
  {
    title: "regist",
    url: "/authentication",
  },
  {
    title: "profile",
    url: "/profile/:userId",
  },
];
// jobs constants
export const JOBS = [
  {
    id: 1,
    title: "Job Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat veniam earum vel, possimus ducimus modi? Illo iure obcaecati quibusdam quaerat, nostrum reiciendis? Sint, totam eaque fugit amet quae aliquam. 1",
  },
  {
    id: 2,
    title: "Job Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat veniam earum vel, possimus ducimus modi? Illo iure obcaecati quibusdam quaerat, nostrum reiciendis? Sint, totam eaque fugit amet quae aliquam. 2",
  },
  {
    id: 3,
    title: "Job Title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat veniam earum vel, possimus ducimus modi? Illo iure obcaecati quibusdam quaerat, nostrum reiciendis? Sint, totam eaque fugit amet quae aliquam. 3",
  },
  {
    id: 4,
    title: "Job Title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat veniam earum vel, possimus ducimus modi? Illo iure obcaecati quibusdam quaerat, nostrum reiciendis? Sint, totam eaque fugit amet quae aliquam. 4",
  },
  {
    id: 5,
    title: "Job Title 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat veniam earum vel, possimus ducimus modi? Illo iure obcaecati quibusdam quaerat, nostrum reiciendis? Sint, totam eaque fugit amet quae aliquam. 5",
  },
];
