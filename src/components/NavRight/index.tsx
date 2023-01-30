import { NavButton, NavLink } from "./style";
import { IconProps, icons } from "./utils";

const NavRight = () => {
  return (
      {icons.map((icon) => (
        <NavButton>
          <NavLink href={icon.url}>{icon.icon}</NavLink>
        </NavButton>
      ))}
  );
};
export default NavRight;
