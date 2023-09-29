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
          href="https://avnode.net/performances/mastering-midi-for-live-coding/"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          Mastering MIDI for Live Coding
        </a>
        <p className="paragraph">Live Performers Meeting 2023 - Münster, Germany</p>
      </div>
      <div className="article column">
        <a
          href="https://www.youtube.com/watch?v=U8XMyvtVYEM&ab_channel=WebXRFrancophone"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          WebXR pour la recherche en biologie et chimie
        </a>
        <p className="paragraph">WebXR Francophone meetup April 2023 - Online</p>
      </div>
      <div className="article column">
        <a
          href="https://webzurich.ch/talks/cl0cdxmfs2fm80cxs5jrqeyo5"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          PDB2AR: Immersive web apps for research and education
        </a>
        <p className="paragraph">WebZurich March 2022 meetup - Zurich, Switzerland</p>
      </div>
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
    </div>
  );
};

export default Talks;
