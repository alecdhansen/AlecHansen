import { NavContainer, NavLeft, AlecImage } from "./style";
import image from "../../assets/images/alec.jpg";
import NavRight from "../NavRight";

const Header = () => {
  return (
    <NavContainer>
      <NavLeft>
        <AlecImage src={image} />
      </NavLeft>
      <NavRight />
    </NavContainer>
  );
};

export default Header;
