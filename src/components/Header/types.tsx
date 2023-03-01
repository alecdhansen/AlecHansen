import EmailIcon from "../icons/Email";
import GithubIcon from "../icons/Github";
import LinkedInIcon from "../icons/LinkedIn";
import Resume from "../icons/Resume";

export type ImageProps = {
  width?: number;
  marginTop?: number;
  zIndex?: number;
  clipPath?: any;
  animation?: any;
};
export type IconProps = {
  content?: string;
  icon?: any;
  url?: string;
  title?: string;
};

export type InputProps = {
  top?: string;
  mtop?: string;
  left?: string;
  mleft?: string;
};

export const icons: IconProps[] = [
  {
    content: "email",
    icon: <EmailIcon />,
    url: "mailto:alecdhansen@gmail.com",
    title: "Send me an Email!",
  },
  {
    content: "linkedin",
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/alecdhansen/",
    title: "LinkedIn",
  },
  {
    content: "github",
    icon: <GithubIcon />,
    url: "https://github.com/alecdhansen",
    title: "Github",
  },
  {
    content: "resume",
    icon: <Resume />,
    url: "https://docs.google.com/document/d/e/2PACX-1vSPICv58jzub-4o9KTeONYGhKuwVHiN_RdqlaTIn6EjheiyKvz0gzXBrowoYs93faBDOKCmKMjlZa8v/pub",
    title: "My Resume",
  },
];
