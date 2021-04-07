import React from "react";
import "./styles.css";

import Icon from "../Icon";
import logo2 from "../../images/logo.png";

const iconos = ["github", "twitter", "mail"];

class Home extends React.Component {
  render() {
    return (
      <div className="home-content">
        <div className="info1">
          <img src={logo2} alt="Logo" />
        </div>
        <div className="info2">
          <div className="info-texto">
            <h1>Fabio Cortés</h1>
            <h2>I write things that make things.</h2>
            <p>
              &gt; Creative developer exploring the intersection between art and technology.
            </p>
          </div>
          <div className="info-redes">
            {iconos.map((item) => (
              <div key={item} className="iconoRedes">
                <Icon name={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
