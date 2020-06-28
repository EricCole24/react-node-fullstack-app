import React, { useEffect, useState } from "react";
import { NavLink, RouteComponentProps } from "react-router-dom";
import useUserStatus from "../userLoggedIn";
import { Route } from "react-router-dom";
import axios from "axios";
interface Props {}
const Header2: React.FC<Props> = (props) => {
  const status = useUserStatus();
  let islog = status;
  const logOut = async () => {
    const url = "http://localhost:5000/logout";
    try {
      let response = await axios(url);
      if (response.status === 200) {
        localStorage.removeItem("user");
        console.log(response.data);
        return window.location.reload();
      } else {
        throw console.error();
      }
    } catch (err) {
      console.log(err);
    }
  };
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
        style={{ color: "white" }}
        className="navbar-brand "
        to="/bookappointment"
        activeClassName="selectedLink"
      >
        {islog.authenticate ? "ScheduleAppointment" : " "}
      </NavLink>
      <NavLink
        style={{ color: "white" }}
        className="navbar-brand "
        to="/details"
        activeClassName="selectedLink"
      >
        {islog.authenticate ? "Details" : " "}
      </NavLink>
      <NavLink
        onClick={logOut}
        style={{ color: "white", float: "right" }}
        className="navbar-brand navbar-nav ml-auto "
        to=""
        activeClassName="selectedLink"
      >
        {islog.authenticate ? (
          <div>
            <button
              className="btn btn-secondary "
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Logout
            </button>
          </div>
        ) : (
          " "
        )}
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
