import React from "react";
import Logo from "../../assets/logo/logo";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../services/hooks/Request";

function Header() {
  const navigate = useNavigate();
  const { data, error } = useFetch(`http://localhost:3000/user/12`);
  const userData = data?.data;
  if (error) {
    return <span>Il y a un problème</span>;
  }

  return (
    <header className="header">
      <div className="container-logo">
        <Logo />
        <span className="app-name">SportSee</span>
      </div>
      <nav className="nav-bar">
        <a href="/">Accueil</a>
        <span onClick={() => navigate("/user/" + userData.id)}>Profil</span>
        <a href="/">Réglage</a>
        <a href="/">Communauté</a>
      </nav>
    </header>
  );
}

export default Header;
