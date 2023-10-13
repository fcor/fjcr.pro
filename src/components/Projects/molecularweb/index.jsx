import React, { useEffect, useState } from "react";
import { getRandomColor } from "../../../utils";
import mw1 from "../../../images/mw1.png";
import mw2 from "../../../images/mw2.jpg";
import mw3 from "../../../images/mw3.jpg";
import mw4 from "../../../images/mw4.jpg";
import mw5 from "../../../images/mw5.jpg";

const Molecularweb = () => {
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("");
  useEffect(() => {
    const myColor1 = getRandomColor();
    const myColor2 = getRandomColor();
    setColor(myColor1);
    setColor2(myColor2);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-detail-container column">
      <p className="title project" style={{ color }}>
        MoleculARweb
      </p>

      <p className="paragraph project-detail-description">
        MoleculARweb is a free website with out-of-the-box interactive AR
        activities that works in laptops, tablets and smartphones, where
        students and teachers can naturally handle virtual objects to explore
        molecular structure, reactivity, dynamics and interactions.
      </p>

      <p className="paragraph project-detail-description">
        As an{" "}
        <span>
          <a
            href="https://github.com/molecularwebxr/molecularweb"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            open source{" "}
          </a>
        </span>{" "}
        project, with more than 20 different activities, MoleculARweb is used by
        teachers and students all over the world as an engaging and useful for
        teaching and learning chemistry, proving the potential of AR in future
        education and showing the large impact that modern web technologies have
        in democratizing access to digital learning tools.
      </p>

      <figure className="project-large-image-container">
        <img
          className="project-image"
          src={mw1}
          alt="Screenshot of molecularweb"
        />
      </figure>

      <p className="paragraph project-detail-description">
        The app comprises various mini-apps, referred to as "activities,"
        designed to help students and educators delve into various concepts in
        chemistry and biology. These activities range from pure 3D
        visualizations to interactive simulations, and the app offers two
        distinct modes: Marker-based AR and Markerless AR.
      </p>
      <p className="paragraph project-detail-description">
        In the marker-based activities, users are required to print a set of
        black and white markers on regular paper to display and manipulate 3D
        elements. In desktop mode, users have access to controls for tasks such
        as rotation and scaling of molecules. On mobile devices, users can
        employ finger gestures to rotate and zoom in on 3D elements.
      </p>

      <div className="project-small-img-container row">
        <img
          className="project-image-small"
          src={mw4}
          alt="Screenshot of molecularweb"
        />
        <img
          className="project-image-small"
          src={mw5}
          alt="Screenshot of molecularweb"
        />
      </div>

      <p className="paragraph project-detail-description">
        Some activities are designed for visualization and, in addition to
        marker-based AR, can be used without markers. This allows users to place
        elements in their physical space, providing the freedom to walk around
        and even immerse themselves within the molecules.
      </p>

      <div className="project-small-img-container row">
        <img
          className="project-image-small"
          src={mw3}
          alt="Screenshot of molecularweb"
        />
        <img
          className="project-image-small"
          src={mw2}
          alt="Screenshot of molecularweb"
        />
      </div>

      <p className="paragraph project-detail-description">
        The flagship feature of MoleculARweb is the virtual modeling kit, which
        serves as the AR equivalent of the plastic molecular models
        traditionally used in schools for teaching chemistry. Here, there are no
        limitations regarding the number of atoms or elements. Users can upload,
        copy, and paste PDB (Atomic coordinates) files or create custom
        molecules using the JSMol editor. Cube markers are utilized for this
        feature to eliminate blind spots for the camera, enhancing users'
        control over the elements.
      </p>
      <p className="paragraph project-detail-description">
        Furthermore, users can simulate molecule interactions, including the
        formation of hydrogen bonds, visualization of atom clashes, and
        observing how molecules respond to changes in temperature — all within
        the web browser.
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
            {" "}
            Luciano Abriata{" "}
          </a>
        </span>
        at the Laboratory for biomolecular modeling at EPFL.
      </p>
    </div>
  );
};

export default Molecularweb;
