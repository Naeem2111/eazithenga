import React from "react";
import Connect from "../../assets/images/connecr.png";
const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="social">
          <ul>
            <li>
              <img src={Connect} alt="" />
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="address">
          <div className="arow">
            <h3>Mailing Address</h3>
            <h4>
              123 Anywhere St., Any City <br /> State, Country 12345
            </h4>
          </div>
          <div className="arow">
            <h3>Email Address</h3>
            <h4>hello@reallygreatsite.com</h4>
          </div>
          <div className="arow">
            <h3>Phone Number</h3>
            <h4>(123) 456 7890</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
