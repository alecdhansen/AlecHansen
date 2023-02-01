import EmailIcon from "../icons/email";
import GithubIcon from "../icons/github";
import LinkedInIcon from "../icons/LinkedIn";

export interface IconProps {
  content?: string;
  icon?: any;
  url?: string;
}

export const icons = [
  {
    content: "email",
    icon: <EmailIcon />,
    url: "mailto:alecdhansen@gmail.com",
  },
  {
    content: "linkedin",
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/alecdhansen/",
  },
  {
    content: "github",
    icon: <GithubIcon />,
    url: "https://github.com/alecdhansen",
  },
];
