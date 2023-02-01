import {
  NavContainer,
  NavLeft,
  NavRight,
  AlecImage,
  DotContainer,
} from "./style";
import image from "../../assets/images/alecwhite.png";
import NavRightContent from "../NavRight";
import DotIcon from "../icons/Dot";

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
        <NavRightContent />
      </NavRight>
    </NavContainer>
  );
};

export default Header;
