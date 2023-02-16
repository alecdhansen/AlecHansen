import React from "react";
import LightbulbFilled from "../icons/LightbulbFilled";
import { Button } from "./style";
import { ButtonProps } from "./types";

const Toggle: React.FC<ButtonProps> = ({ toggleTheme }) => {
  return (
    <Button as="button" onClick={toggleTheme}>
      <LightbulbFilled />
    </Button>
  );
};

export default Toggle;
