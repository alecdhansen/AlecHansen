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
    icon: <HiOutlineMail />,
    url: "alecdhansen@gmail.com",
  },
  {
    content: "linkedin",
    icon: <BsLinkedin />,
    url: "https://www.linkedin.com/in/alecdhansen/",
  },
  {
    content: "github",
    icon: <BsGithub />,
    url: "https://github.com/alecdhansen",
  },
];
