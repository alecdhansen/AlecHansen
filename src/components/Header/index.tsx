import {
  NavContainer,
  NavLeft,
  NavRight,
  AlecImage,
  DotContainer,
  NavLink,
  IconContainer,
  ColorInput,
  InputContainer,
  Icons,
  Pickers,
} from "./style";
import image from "../../assets/images/alecwhite.png";
import DotIcon from "../icons/Dot";
import { IconProps, icons } from "./types";
import { Props } from "../../utils/types";
import { appColors, randomColor } from "../../App/utils";
import Toggle from "../Toggler";
import ColorPicker from "../icons/ColorPicker";
import { useState } from "react";
import "animate.css";

const Header: React.FC<Props> = ({
  setFocus,
  setC1,
  setC2,
  themeToggler,
  colorTheme,
  c1,
  c2,
}) => {
  const [open, setOpen] = useState(false);
  const handleImageClick = () => {
    setFocus(1);
    setC1(randomColor(appColors, 1));
    setC2(randomColor(appColors, 2));
  };

  return (
    <NavContainer>
      <NavLeft>
        <DotContainer>
          <DotIcon />
        </DotContainer>
        <AlecImage
          onClick={handleImageClick}
          style={{ position: "absolute" }}
          src={image}
        />
      </NavLeft>
      <NavRight>
        <Icons>
          <IconContainer
            title={
              open ? "Close color picker" : "Click me to customize theme color!"
            }
            onClick={() => (!open ? setOpen(true) : setOpen(false))}
          >
            <ColorPicker colorTheme={colorTheme} open={open} />
          </IconContainer>
          <Toggle toggleTheme={themeToggler} colorTheme={colorTheme} />

          {icons.map((icon: IconProps) => (
            <NavLink
              title={icon.title}
              key={icon.content}
              href={icon.url}
              target="_blank"
            >
              {icon.icon}
            </NavLink>
          ))}
        </Icons>
        <Pickers>
          {open && (
            <InputContainer>
              <ColorInput
                type="color"
                onChange={(e: any) => setC1(e.target.value)}
                value={c1}
                title="Pick your favorite color!"
                mtop="-300px"
                mleft="35px"
                marginRight="7px"
              />
              <ColorInput
                type="color"
                onChange={(e: any) => setC2(e.target.value)}
                value={c2}
                title="Pick your favorite color!"
                mtop="-300px"
                mleft="75px"
              />
            </InputContainer>
          )}
        </Pickers>
      </NavRight>
    </NavContainer>
  );
};

export default Header;
