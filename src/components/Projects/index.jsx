import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import molecularWeb from "../../images/mw.png";
import homer from "../../images/homer.png";
import nuestrasEsperanzas from "../../images/ne1.png";
import gestures from "../../images/gestures.png";

const Projects = () => {
  return (
    <div className="project-section-container column">
      <p className="paragraph">Selected work</p>
      <div className="projects-container">
        <NavLink to="/molecularweb">
          <div className="project">
            <div className="project-detail column">
              <p className="project-title">MoleculARweb</p>
              <p className="project-description">
                A website for chemistry and structural biology education through
                augmented reality.
              </p>
            </div>
            <img
              className="project-img"
              src={molecularWeb}
              alt="molecularweb"
            ></img>
          </div>
        </NavLink>

        <NavLink to="/homers-metaverse">
          <div className="project">
            <div className="project-detail column">
              <p className="project-title">Homer's Metaverse</p>
              <p className="project-description">
                My first exposure to VR was an episode of The Simpsons from 1995
                where Homer finds himself in a 3D world behind a book shelf.
                Here's my version of that scene in VR!
              </p>
            </div>
            <img
              className="project-img"
              src={homer}
              width="400"
              alt="homer"
            ></img>
          </div>
        </NavLink>

        <div className="project">
          <a
            href="https://github.com/fcor/arjs-gestures"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-detail column">
              <p className="project-title">AR.js Gestures</p>
              <p className="project-description">
                Open source library for adding gesture controls to manipulate an
                AR.js scene using known patterns like pinch, zoom and drag.
              </p>
            </div>
            <img
              className="project-img"
              src={gestures}
              width="400"
              alt="homer"
            ></img>
          </a>
        </div>

        <NavLink to="/nuestras-esperanzas">
          <div className="project">
            <div className="project-detail column">
              <p className="project-title">Nuestras esperanzas</p>
              <p className="project-description">
                Generative artwork inspired by the amazing song "Nuestras
                esperanzas" by Grito, one of my favorite bands. In collaboration
                with the band, we released a limited edition of 12 prints and
                some postcards.
              </p>
            </div>
            <img
              className="project-img"
              src={nuestrasEsperanzas}
              width="400"
              alt="homer"
            ></img>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Projects;
