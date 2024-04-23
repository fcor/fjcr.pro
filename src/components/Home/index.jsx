import React from "react";
import "./styles.css";

import Icon from "../Icon";
import logo from "../../images/logo2.png";

const icons = ["github", "twitter", "instagram", "mail"];

const Home = () => {
  return (
    <div className="home-content">
      <div className="info1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="info2">
        <div className="info-texto">
          <h1 className="title">Fabio Cortés</h1>
          <h2 className="subtitle">I make computers draw things.</h2>
          <p className="paragraph">
            I'm a Colombian creative technologist currently based in Lausanne, Switzerland.
          </p>
          <p className="paragraph">
            My practice primarily focuses on augmented and virtual reality, spatial computing, and generative art.
          </p>
        </div>
        <div className="info-redes">
          {icons.map((item) => (
            <div key={item} className="iconoRedes">
              <Icon name={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
