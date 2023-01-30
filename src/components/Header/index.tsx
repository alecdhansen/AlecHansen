import { NavContainer, NavLeft, NavRight, AlecImage } from "./style";
import image from "../../assets/images/alec.jpg";
import NavRightContent from "../NavRightContent";

const Header = () => {
  return (
    <NavContainer>
      <NavLeft>
        <AlecImage src={image} />
      </NavLeft>
      <NavRight>
        <NavRightContent />
      </NavRight>
    </NavContainer>
  );
};

export default Header;
