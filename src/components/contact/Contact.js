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
              <a href="https://wa.me/+27600748715">Whatsapp</a>
            </li>
            {/* <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li> */}
          </ul>
        </div>
        <div className="address">
          <div className="arow">
            <h3>Mailing Address</h3>
            <h4>
              331 Albert Rd, <br /> Woodstock, Cape Town, 7915
            </h4>
          </div>
          <div className="arow">
            <h3>Email Address</h3>
            <a href="mailto:info@eazithenga.com">
              <h4>info@eazithenga.com</h4>
            </a>
          </div>
          <div className="arow">
            <h3>Phone Number</h3>
            <a href="https://wa.me/+27600748715">
              <h4>+27 60 074 8715</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
