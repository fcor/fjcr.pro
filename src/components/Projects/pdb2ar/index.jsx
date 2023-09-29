import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomColor } from "../../../utils";
import pdb2ar2 from "../../../images/pdb2ar2.jpg";
import pdb2ar3 from "../../../images/pdb2ar3.jpg";
import pdb2ar4 from "../../../images/pdb2ar4.jpg";
import pdb2ar5 from "../../../images/pdb2ar5.png";
import pdb2ar6 from "../../../images/pdb2ar6.gif";

const PDB2AR = () => {
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("");
  useEffect(() => {
    const myColor1 = getRandomColor();
    const myColor2 = getRandomColor();
    setColor(myColor1);
    setColor2(myColor2);
  }, []);
  return (
    <div className="project-detail-container column">
      <p className="title project" style={{ color }}>
        PDB2AR
      </p>

      <p className="paragraph project-detail-description">
        A few months after launching{" "}
        <span>
          <Link style={{ color: color2 }} to="/molecularweb">
            MoleculARweb,
          </Link>
        </span>{" "}
        we started to receive a lot of requests from users to add new content.
        At first we did, but pretty soon we realized how this was not going to
        escalate since we were a small team with limited resources. So we asked
        ourselves, how can we automate this process so everyone can create their
        own immersive content?
      </p>

      <p className="paragraph project-detail-description">
        This is how PDB2AR was born, a tool where scientists and educators can
        create their own immersive experiences.
      </p>

      <p className="paragraph project-detail-description">
        The web app is based on{" "}
        <span>
          <a
            href="https://www.fjcr.studio/product/nuestras-esperanzas"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            VMD
          </a>
        </span>
        , a tool that most biologists are familiar with, so we provide a
        friendly UI were users can upload PDB files, copy and paste PDB entries
        or upload 3D models (exported from VMD) so they can customize how do
        they want to visualize it.
      </p>

      <p className="paragraph project-detail-description">
        We start by parsing the PDB string (atomic coordinates), then we detect
        the elements and users can select which elements wants to visualize and
        how to represent them.
      </p>

      <figure className="project-square-image-container">
        <img
          className="project-image"
          src={pdb2ar2}
          alt="screenshot from PDB2AR"
        />
      </figure>

      <p className="paragraph project-detail-description">
        Based on the user's selection, we create a script for rendering the
        scene in VMD, which can be edited. After adding a custom title and
        submiting, PDB2AR will create 3 immersive apps:
      </p>
      <p className="paragraph project-detail-description">
        - AR with a cube marker.
      </p>
      <p className="paragraph project-detail-description">
        - AR to visualize the molecule in your space
      </p>
      <p className="paragraph project-detail-description">
        - VR app to manipulate your molecule with your hands or controllers
        using a VR headset
      </p>

      <figure className="project-square-image-container">
        <img
          className="project-image"
          src={pdb2ar6}
          alt="gif from PDB2AR"
        />
      </figure>

      <p className="paragraph project-detail-description">
        Since everything is web-based, users will receive an email containing 3
        URLS, one for each immersive app. No installs, no access barriers,
        accesible to everyone, everywhere.
      </p>

      <div className="project-small-img-container row">
        <img
          className="project-image-small"
          src={pdb2ar3}
          alt="generative artwork"
        />
        <img className="project-image-small" src={pdb2ar4} alt="postcard" />
      </div>

      <figure className="project-square-image-container">
        <img className="project-image" src={pdb2ar5} alt="pdb2ar screenshot" />
      </figure>

      <p className="paragraph project-detail-description">
        This tool is free and it's available{" "}
        <span>
          <a
            href="https://molecularweb.epfl.ch/pages/pdb2ar.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            here.{" "}
          </a>
        </span>
        We open sourced the templates used for the immersive apps {" "}
        <span>
          <a
            href="https://github.com/molecularwebxr/pdb2ar-templates"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            here.
          </a>
        </span>
      </p>

      <p className="paragraph project-detail-description">
        This project was funded by the{" "}
        <span>
          <a
            href="https://www.snf.ch"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            Swiss National Science Foundation{" "}
          </a>
        </span>
        and was made by me and 
        <span>
          <a
            href="https://www.lucianoabriata.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            {" "}Luciano Abriata{" "}
          </a>
        </span>
        at the Laboratory for biomolecular modeling at EPFL.
      </p>
     
    </div>
  );
};

export default PDB2AR;
