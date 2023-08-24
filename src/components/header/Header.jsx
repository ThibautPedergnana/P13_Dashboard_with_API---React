import React from "react";
import Logo from "../../assets/logo/logo";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container-logo">
        <Logo />
        <span className="app-name">SportSee</span>
      </div>
      <nav className="nav-bar">
        <a href="/">Accueil</a>
        <a href="/">Profil</a>
        <a href="/">Réglage</a>
        <a href="/">Communauté</a>
      </nav>
    </header>
  );
}

export default Header;
