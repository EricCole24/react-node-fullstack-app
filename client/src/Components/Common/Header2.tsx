import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useUserStatus from "../userLoggedIn";
import { Route } from "react-router-dom";
const Header2: React.FC = (props) => {
  const status = useUserStatus();
  const islog = status;

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
      <NavLink
        style={{ color: "white", float: "right" }}
        className="navbar-brand navbar-nav ml-auto"
        to="/logout"
        activeClassName="selectedLink"
      >
        {islog.authenticate ? "Logout" : " "}
      </NavLink>
    </nav>
  );
};
export default Header2;

/* 
<nav
      className="navbar navbar-expand-lg navbar-light bg-dark"
      style={{ marginBottom: "10px" }}
    >
        {localStorage.length > 0}
      <NavLink style={{ color: "white" }} className="navbar-brand" to="/">
        Home
      </NavLink>
      <NavLink style={{ color: "white" }} className="navbar-brand" to="/about">
        About
      </NavLink>

      <NavLink style={{ color: "white" }} className="navbar-brand " to="/view">
        {islog.authenticate ? "signout" : "signup"}
      </NavLink>
    </nav>
  );
*/
