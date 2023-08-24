import React from "react";
import App from "../../containers/App";
import { useNavigate } from "react-router-dom";
import "../home/Accueil.css";

function Home() {
  const navigate = useNavigate();

  return (
    <App>
      <div className="wrapper-content-home">
        <h1>Accueil</h1>
        <div className="wrapper-card-user">
          <div
            className="container-card-user"
            onClick={() => navigate("/user/12")}
          >
            Karl Dovineau - 12
          </div>
          <div
            className="container-card-user"
            onClick={() => navigate("/user/18")}
          >
            Cecilia Ratorez - 18
          </div>
        </div>
      </div>
    </App>
  );
}

export default Home;
