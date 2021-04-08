import React from "react";
import "./styles.css";
import { getRandomColor } from "../../utils/index";

const Talks = () => {
  const onHoverOut = (e) => {
    e.target.style.color = "white";
  };

  const onHover = (e) => {
    const col = getRandomColor();
    e.target.style.color = col;
  };

  return (
    <div className="articles-container column">
      <p className="paragraph">
        I often lead talks and workshops about immersive technologies and
        creative coding:
      </p>
      <div className="article column">
        <a
          href="https://youtu.be/yq_APtAkgD8?t=463"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          MoleculARweb: Chemistry and Biology education through AR
        </a>
        <p className="paragraph">WebZurich March 2021 meetup - Online</p>
      </div>
      <div className="article column">
        <a
          href="https://youtu.be/rzNm_XL4j7w"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          UI Design for AR
        </a>
        <p className="paragraph">Global XR Bootcamp 2020 - Online</p>
      </div>
      <div className="article column">
        <a
          href="https://youtu.be/9TohHPGviSM?t=3585"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          WebXR and the next generation of immersive web experiences
        </a>
        <p className="paragraph">JSWeek 2020 - Online</p>
      </div>
      <div className="article column">
        <a
          href="https://2019.boyaconf.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          Immersive web experiences with React 360
        </a>
        <p className="paragraph">Boyaconf 2019, Duitama, Colombia</p>
      </div>
      <div className="article column">
        <a
          href="https://youtu.be/EsIXYYKJsa0"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          From 2D to 3D: UI design for VR
        </a>
        <p className="paragraph">JSConf Colombia 2018, Medellín, Colombia</p>
      </div>
      <div className="article column">
        <a
          href="https://flisol.info/FLISOL2019/Colombia/Bogota"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          A-Frame & WebVR Workshop
        </a>
        <p className="paragraph">
          FLISOL Open source festival 2018, Bogotá, Colombia
        </p>
      </div>
    </div>
  );
};

export default Talks;
