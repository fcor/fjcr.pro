import React from "react";
import "./styles.css";

import Icon from "../Icon";
import logo from "../../images/logo2.png";

const icons = ["github", "twitter", "behance", "instagram", "mail"];

const Home = () => {
  return (
    <div className="home-content">
      <div className="info1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="info2">
        <div className="info-texto">
          <h1 className="title">Fabio Cortés</h1>
          <h2 className="subtitle">I write things that make things.</h2>
          <p className="paragraph">
            &gt; I'm a Creative developer from Bogotá, Colombia, and now based
            in Lausanne, Switzerland.
          </p>
          {/* <p className="paragraph">
            &gt; Creative developer exploring the intersection between art and technology. 
          </p> */}
          <p className="paragraph">
            &gt; I'm focused on immersive technologies, 3D development and
            generative art.
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
