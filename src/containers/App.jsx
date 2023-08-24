import React from "react";
import SideBar from "../components/side-bar/SideBar";
import Header from "../components/header/Header";

import "./app.css";

function App({ children }) {
  return (
    <div className="container-app">
      <Header />
      <div className="app">
        <SideBar />
        <div className="wrapper-app">{children}</div>
      </div>
    </div>
  );
}

export default App;
