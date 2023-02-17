import React from "react";
import LightbulbFilled from "../icons/LightbulbFilled";
import { Button } from "./style";
import { ButtonProps } from "./types";

const Toggle: React.FC<ButtonProps> = ({ toggleTheme, colorTheme }) => {
  return (
    <Button as="button" onClick={toggleTheme}>
      <LightbulbFilled colorTheme={colorTheme} />
    </Button>
  );
};

export default Toggle;
