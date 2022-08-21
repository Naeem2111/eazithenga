import React from "react";
import "../../assets/css/style.css";
import Logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div className="container">
      <div className="header">
        <div className="header-column-left">
          <img src={Logo} alt="" />
        </div>
        <div className="header-column-right">
          <ul className="nav-li">
            <Link to="/">
              <li className={splitLocation[1] === "" ? "active" : ""}>Home</li>
            </Link>
            <Link to="contactus">
              <li className={splitLocation[1] === "contactus" ? "active" : ""}>
                Contact
              </li>
            </Link>
            <Link to="signup">
              <li className={splitLocation[1] === "signup" ? "active" : ""}>
                Sign up
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
