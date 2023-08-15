import React from "react";
import "./sidebar.css";
import NavItem from "./nav-item/NavItem";

function SideBar() {
  return (
    <div className="side-bar">
      <nav className="nav-side">
        <NavItem labelItem="yoga" />
        <NavItem labelItem="natation" />
        <NavItem labelItem="bike" />
        <NavItem labelItem="musculation" />
      </nav>

      <span className="copyright">Copiryght, SportSee 2020</span>
    </div>
  );
}

export default SideBar;
