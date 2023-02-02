import {
  NavContainer,
  NavLeft,
  NavRight,
  AlecImage,
  DotContainer,
  NavLink,
} from "./style";
import image from "../../assets/images/alecwhite.png";
import DotIcon from "../icons/Dot";
import { IconProps, icons } from "./types";

const Header = () => {
  return (
    <NavContainer>
      <NavLeft>
        <DotContainer>
          <DotIcon />
        </DotContainer>
        <AlecImage style={{ position: "absolute" }} src={image} />
      </NavLeft>
      <NavRight>
        {icons.map((icon: IconProps) => (
          <NavLink href={icon.url}>{icon.icon}</NavLink>
        ))}
      </NavRight>
    </NavContainer>
  );
};

export default Header;
