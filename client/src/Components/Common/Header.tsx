import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-dark"
      style={{ marginBottom: "10px" }}
    >
      <NavLink style={{ color: "white" }} className="navbar-brand" to="/">
        Home
      </NavLink>
      <NavLink style={{ color: "white" }} className="navbar-brand" to="/about">
        About
      </NavLink>
      <NavLink style={{ color: "white" }} className="navbar-brand " to="/view">
        ViewData
      </NavLink>
    </nav>
  );
};
export default Header;
