import React from "react";
import "../Styles/Header.scss";
import logo from "../Media/logo.png";
const Header = () => {
  return (
    <header>
      <div id="logo-description-wrapper">
        <img src={logo} alt="logo" />
        <h2>My Application</h2>
      </div>
      <div id="userimage-username-wrapper">
        <div id="user-image-wrapper">
          {" "}
          <img src={logo} alt="user"></img>
        </div>
        <p>Arindam Sarkar</p>
      </div>
    </header>
  );
};

export default Header;
