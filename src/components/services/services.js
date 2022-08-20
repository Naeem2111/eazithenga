import React from "react";
import Service1 from "../../assets/images/service1.png";
import Service2 from "../../assets/images/service2.png";
import Service3 from "../../assets/images/service3.png";
import Service from "../../assets/images/service.png";
const Services = () => {
  return (
    <div className="container">
      <div className="service-main">
        <h2>Our Services</h2>
        <div className="service-block">
          <div className="s-block">
            <img draggable={false} src={Service1} alt="" />
          </div>
          <div className="s-block">
            <img draggable={false} src={Service2} alt="" />
          </div>
          <div className="s-block">
            <img draggable={false} src={Service3} alt="" />
          </div>
          <img className="service-img" src={Service} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
