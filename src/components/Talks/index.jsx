import React from "react";
import "./styles.css";

const Articles = () => (
  <div className="articles-container column">
    <p className="paragraph">
      I often lead talks and workshops about immersive technologies and creative
      coding:
    </p>
    <div className="article column">
      <h1 className="title">
        MoleculARweb: Chemistry and Biology education through AR
      </h1>
      <p className="paragraph">WebZurich March 2021 meetup - Online</p>
    </div>
    <div className="article column">
      <h1 className="title">UI Design for AR</h1>
      <p className="paragraph">Global XR Bootcamp 2020 - Online</p>
    </div>
    <div className="article column">
      <h1 className="title">
        WebXR and the next generation of immersive web experiences
      </h1>
      <p className="paragraph">JSWeek 2020 - Online</p>
    </div>
    <div className="article column">
      <h1 className="title">Immersive web experiences with React 360</h1>
      <p className="paragraph">Boyaconf 2019, Duitama, Colombia</p>
    </div>
    <div className="article column">
      <h1 className="title">From 2D to 3D: UI design for VR</h1>
      <p className="paragraph">JSConf Colombia 2018, Medellín, Colombia</p>
    </div>
    <div className="article column">
      <h1 className="title">A-Frame & WebVR Workshop</h1>
      <p className="paragraph">
        FLISOL Open source festival 2018, Bogotá, Colombia
      </p>
    </div>
  </div>
);

export default Articles;
