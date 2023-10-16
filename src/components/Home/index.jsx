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
            &gt; I'm a generative artist and creative coder from Bogotá,
            Colombia, and now based in Lausanne, Switzerland.
          </p>
          <p className="paragraph">
            &gt; I strive to craft dazzling visuals that evoke curiosity and
            wonder, seamlessly merging the realms of science and art within
            virtual and augmented reality experiences.
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
