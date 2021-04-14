import React from "react";
import "./styles.css";
import molecularWeb from "../../images/mw.png";
import homer from "../../images/homer.png";
import handTracking from "../../images/hand-tracking.png";
import gestures from "../../images/gestures.png";
import faceTracking from "../../images/facetracking.png";

const Projects = () => {
  return (
    <div className="project-section-container column">
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
        <div className="project">
          <a
            href="https://www.behance.net/gallery/117272265/Face-tracking-on-iOS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-detail column">
              <p className="project-title">Face Tracking on iOS</p>
              <p className="project-description">
                Web-based Face Tracking scene made for iOS.
              </p>
            </div>
            <img
              className="project-img"
              src={faceTracking}
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
