import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow">
      <div className="container mx-auto py-5">
        <div className="space-x-4 text-center">
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/login"> Login </NavLink>
          <NavLink to="/register"> Register </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
