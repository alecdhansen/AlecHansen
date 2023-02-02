import EmailIcon from "../icons/Email";
import GithubIcon from "../icons/Github";
import LinkedInIcon from "../icons/LinkedIn";
export interface ImageProps {
  width?: number;
  marginTop?: number;
  zIndex?: number;
  clipPath?: any;
  animation?: any;
}
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
