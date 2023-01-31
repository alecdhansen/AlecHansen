import { NavLink } from "./style";
import { IconProps, icons } from "./utils";

export const NavRightContent = () => {
  return icons.map((icon: IconProps) => (
    <NavLink href={icon.url}>{icon.icon}</NavLink>
  ));
};
