import React from "react";
import "../../assets/css/style.css";
import Logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-column-left">
          <img src={Logo} alt="" />
        </div>
        <div className="header-column-right">
          <ul className="nav-li">
            <li className="active">Home</li>
            <li>Contact</li>
            <li>Sign up</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
