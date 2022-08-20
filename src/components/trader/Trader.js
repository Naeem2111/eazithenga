import React from "react";
import Trader1 from "../../assets/images/trader-1.png";
import Trader2 from "../../assets/images/trader-2.png";
import Trader3 from "../../assets/images/trader-3.png";
const Trader = () => {
  return (
    <div className="container">
      <div className="trader">
        <h1>A Home for Every Trader</h1>
        <div className="row-main">
          <div className="row">
            <img draggable={false} src={Trader1} alt="" />
            <h3>
              Build free digital <br /> storefronts
            </h3>
          </div>
          <div className="row">
            <img draggable={false} src={Trader2} alt="" />
            <h3>
              Receive orders as soon <br /> as they come in
            </h3>
          </div>
          <div className="row">
            <img draggable={false} src={Trader3} alt="" />
            <h3>
              Receive secure <br /> payments
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trader;
