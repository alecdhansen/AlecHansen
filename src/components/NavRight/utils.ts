import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export interface IconProps {
  content?: string;
  icon?: any;
  url?: string;
}

export const icons = [
  {
    content: "email",
    icon: typeof HiOutlineMail,
    url: "alecdhansen@gmail.com",
  },
  {
    content: "linkedin",
    icon: typeof BsLinkedin,
    url: "https://www.linkedin.com/in/alecdhansen/",
  },
  {
    content: "github",
    icon: typeof BsGithub,
    url: "https://github.com/alecdhansen",
  },
];
