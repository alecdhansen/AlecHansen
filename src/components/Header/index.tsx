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
import { Props } from "../../utils/types";

const Header: React.FC<Props> = ({ setFocus }) => {
  return (
    <NavContainer>
      <NavLeft>
        <DotContainer>
          <DotIcon />
        </DotContainer>
        <AlecImage
          onClick={() => setFocus(1)}
          style={{ position: "absolute" }}
          src={image}
        />
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
