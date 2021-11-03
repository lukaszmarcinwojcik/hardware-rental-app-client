import React from "react";
import { NavLink } from "react-router-dom";

import LogoutButton from "../components/LogoutButton";
import UserInfo from "../components/UserInfo";

import "../styles/Navigation.css";

function Navigation() {
  return (
    <>
      <nav className="main">
        <UserInfo />
        <ul>
          <li>
            <NavLink to="/dashboard/hardwarelist">
              <i className={"navImg hardwareListNav"}></i>
              <p className={"navTxt"}>Hardware list</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/renthardware">
              <i className={"navImg rentHardwareNav"}></i>{" "}
              <p className={"navTxt"}>Rent hardware</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/adminpage">
              <i className={"navImg adminNav"}></i>{" "}
              <p className={"navTxt"}>Admin panel</p>
            </NavLink>
          </li>
        </ul>
        <LogoutButton />
      </nav>
    </>
  );
}

export default Navigation;
