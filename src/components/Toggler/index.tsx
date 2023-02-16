import React from "react";
import { Button } from "./style";
import { ButtonProps } from "./types";

const Toggle: React.FC<ButtonProps> = ({ toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

export default Toggle;
