import React from "react";
import Pblock1 from "../../assets/images/block1.png";
import Pblock2 from "../../assets/images/block2.png";
const Plan = () => {
  return (
    <div className="container">
      <div className="plan">
        <h2>What We Offer</h2>
        <h4>Our Pricing Plan For You</h4>
        <div className="planbtn">
          <button className="btn1">MONTHLY</button>
          <button className="btn2">YEARLY</button>
        </div>
        <div className="plan-block">
          <div className="p-block pt2">
            <h3>BASIC</h3>
            <img src={Pblock1} alt="" />
            <ul>
              <li> &nbsp; &nbsp;Store Catalog</li>
              <li> &nbsp; &nbsp;Linked with Whatsapp Catalog</li>
              <li> &nbsp; &nbsp;Linked with Facebook Catalog</li>
              <li> &nbsp; &nbsp;Upload up to 10 products</li>
              <li> &nbsp; &nbsp;Payment Gateway</li>
              <li> &nbsp; &nbsp;Chat Automation</li>
              <li> &nbsp; &nbsp;Order Management</li>
            </ul>
            <button>GET STARTED</button>
          </div>
          <div className="p-block ">
            <div className="pop">
              <h3>POPULAR</h3>
            </div>
            <h3>STANDARD</h3>
            <img src={Pblock2} alt="" />
            <ul>
              <li> &nbsp; &nbsp;Store Catalog</li>
              <li> &nbsp; &nbsp;Linked with Whatsapp Catalog</li>
              <li> &nbsp; &nbsp;Linked with Facebook Catalog</li>
              <li> &nbsp; &nbsp;Upload up to 10 products</li>
              <li> &nbsp; &nbsp;Payment Gateway</li>
              <li> &nbsp; &nbsp;Chat Automation</li>
              <li> &nbsp; &nbsp;Order Management</li>
            </ul>
            <button>GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
