import React from "react";
import "./styles.css";
import { getRandomColor } from "../../utils/index";
import molecularWeb from "../../images/mw.png";
import homer from "../../images/homer.png";
import handTracking from "../../images/hand-tracking.png";

const Projects = () => {
  return (
    <div className="articles-container column">
      <p className="paragraph">Here is some of my work:</p>
      <div className="projects-container">
        <div className="project">
          <a
            href="https://www.behance.net/gallery/117219867/MoleculARweb"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              width="400"
              alt="molecularweb"
            ></img>
          </a>
        </div>
        <div className="project">
          <a
            href="https://www.behance.net/gallery/76327299/Homers-Metaverse"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </a>
        </div>
        <div className="project">
          <a
            href="https://www.behance.net/gallery/117236443/Hand-Tracking-in-VR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-detail column">
              <p className="project-title">Hand Tracking - Butane</p>
              <p className="project-description">
                Proof of concept of hand tracking for manipulating molecules in
                virtual reality.
              </p>
            </div>
            <img
              className="project-img"
              src={handTracking}
              width="400"
              alt="homer"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
