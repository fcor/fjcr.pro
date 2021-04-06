import React from "react";
import "./styles.css";

import Icon from "../Icon";
import logo from "../../images/logo.svg";

const iconos = ["github", "twitter", "mail"];

class Home extends React.Component {
  render() {
    return (
      <div className="home-content">
        <div className="info1">
          <img src={logo} alt="Logo" />
        </div>
        <div className="info2">
          <div className="info-texto">
            <h1>Fabio Cortés</h1>
            <h2>I write things that make things.</h2>
            <p>
              - I'm a WebXR engineer & Creative Coder.
              <br />
              <br />
              - Right now I'm working at the Laboratory for Biomolecular Modeling at EPFL.
              <br />
              <br />
              - I'm learning about 3D modeling and openFrameworks.
              <br />
              <br />- I love reading, running, movies, music and beer.
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
