import React from "react";
import "../../assets/css/style.css";
import HomeIcon from "../../assets/images/home-icon.png";

const Home = () => {
  return (
    <div className="container">
      <div className="block">
        <div className="column-left">
          <h1>
            SELL EASILY ON <br /> SOCIAL MEDIA
          </h1>
          <p>
            Simplify the way you <br /> receive & manage orders, <br /> engage
            with customers, <br /> facilitate payments & <br /> much more
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className="column-right">
          <img src={HomeIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
