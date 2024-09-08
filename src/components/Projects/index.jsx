import React, { useState } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import molecularWeb from "../../images/mw.png";
import homer from "../../images/homer.png";
import nuestrasEsperanzas from "../../images/ne1.png";
import gestures from "../../images/gestures.png";
import duality1 from "../../images/duality1.jpg";
import culpable1 from "../../images/culpable1.jpg";
import draw1 from "../../images/draw1.jpg";
import pdb2ar1 from "../../images/pdb2ar1.jpg";
import mwxr1 from "../../images/mwxr1.png";

const Projects = () => {
  const [isTouched, setIsTouched] = useState(false);
  const handleTouch = () => {
    setIsTouched(!isTouched);
  };
  return (
    <div className="project-section-container column">
      <p className="paragraph">Selected work</p>
      <div className="projects-container">
        <ProjectCard
          url="/molecularwebxr"
          title="MolecularWebXR"
          description="A multi-user mixed reality app where scientists can discuss and manipulate molecular structures in real time"
          image={mwxr1}
        />
        <ProjectCard
          url="/molecularweb"
          title="MoleculARweb"
          description="A website for chemistry and structural biology education through
          augmented reality."
          image={molecularWeb}
        />

        <ProjectCard
          url="/pdb2ar"
          title="PDB2AR"
          description="A tool where scientists and educators can build their own WebXR
          scenes from PDB files, PDB entries or uploading their own 3D
          models."
          image={pdb2ar1}
        />

        <ProjectCard
          url="/drawing-inspiration"
          title="Drawing Inspiration"
          description="A Mixed Reality Approach to Artistic Visualization for Home Decor. 1st place at Develop the Future: Meta & AWS Hackathon for XR & Generative AI."
          image={draw1}
        />

        <ProjectCard
          url="/nuestras-esperanzas"
          title="Nuestras Esperanzas"
          description='Generative artwork inspired by the amazing song "Nuestras
          esperanzas" by Grito, one of my favorite bands. In collaboration
          with the band, we released a limited edition of 12 prints and
          some postcards.'
          image={nuestrasEsperanzas}
        />

        <ProjectCard
          url="/duality"
          title="Duality"
          description="A live performance intertwining generative algorithms, analog
          remixing, and audiovisual improvisation into a distinctive and
          captivating experience."
          image={duality1}
        />

        <ProjectCard
          url="/culpable"
          title="Culpable"
          description='I was invited by Grito to create an artwork for one the songs
          from their new album "8".'
          image={culpable1}
        />

        <ProjectCard
          url="/homers-metaverse"
          title="Homer's Metaverse"
          description="My first exposure to VR was an episode of The Simpsons from 1995
          where Homer finds himself in a 3D world behind a book shelf.
          Here's my version of that scene in VR!"
          image={homer}
        />

        <div className="project" onTouchStart={handleTouch} onTouchEnd={handleTouch}>
          <a href="https://github.com/fcor/arjs-gestures" target="_blank" rel="noopener noreferrer">
            <div className={`project-detail column ${isTouched ? "isTouched" : ""}`}>
              <p className="project-title">AR.js Gestures</p>
              <p className="project-description">
                Open source library for adding gesture controls to manipulate an AR.js scene using known patterns like
                pinch, zoom and drag.
              </p>
            </div>
            <img className="project-img" src={gestures} width="400" alt="homer"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, image, description, url }) => {
  const [isTouched, setIsTouched] = useState(false);
  const handleTouch = () => {
    setIsTouched(!isTouched);
  };

  return (
    <NavLink to={url}>
      <div className="project" onTouchStart={handleTouch} onTouchEnd={handleTouch}>
        <div className={`project-detail column ${isTouched ? "isTouched" : ""}`}>
          <p className="project-title">{title}</p>
          <p className="project-description">{description}</p>
        </div>
        <img className="project-img" src={image} width="400" alt="project card"></img>
      </div>
    </NavLink>
  );
};

export default Projects;
