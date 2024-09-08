import React, { useEffect, useState } from "react";
import { getRandomColor } from "../../../utils";
import mwxr2 from "../../../images/mwxr2.jpg";
import mwxr4 from "../../../images/mwxr4.jpg";
import mwxr7 from "../../../images/mwxr7.png";

const MolecularWebXR = () => {
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
        MolecularWebXR
      </p>

      <p className="paragraph project-detail-description project-subtitle" style={{ color: color2 }}>
        Welcome to the future of science education and scientific collaboration over molecular structures
      </p>

      <p className="paragraph project-detail-description">
        MolecularWebXR is the Metaverse's ultimate immersive tool for education and peer discussion in chemistry and
        structural biology. Running on web browsers hence on all modern devices like smartphones, tablets, computers and
        VR-headsets, MolecularWebXR allows users to interact with each other and with virtual objects seamlessly in
        augmented and virtual reality.
      </p>

      <p className="paragraph project-detail-description">
        Try the app{" "}
        <span>
          <a href="https://molecularwebxr.org/" target="_blank" rel="noopener noreferrer" style={{ color: color2 }}>
            here
          </a>
        </span>
        .
      </p>

      <figure className="project-large-image-container">
        <img className="project-image" src={mwxr2} alt="Screenshot of MolecularWebXR's metaverse" />
      </figure>

      <p className="paragraph project-detail-description">
        MolecularWebXR comes up with a set of rooms with ready-to-use content relevant for education in chemistry and
        structural biology, prepared together with university-level teachers to focus on topics where visualization and
        object manipulation in three dimensions should help to better grasp the key concepts.
      </p>

      <div className="vimeo-embed-container">
        <iframe
          src="https://player.vimeo.com/video/947984945?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          className="vimeo-iframe"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Structural biology in Mixed reality"
        ></iframe>
      </div>

      <p className="paragraph project-detail-description">
        By design, access to MolecularWebXR is highly democratized, as the web standard ensures that the software works
        out of the box in the web browsers of all kinds of devices from high-end VR headsets to smartphones, tablets and
        computers, leaving nobody out.
      </p>

      <p className="paragraph project-detail-description">
        MolecularWebXR is used globally by teachers and researchers to enhance their work and serve as an outreach tool.
        It facilitates collaboration and allows users to share their work, inspiring others to engage with science.
      </p>

      <div className="vimeo-embed-container">
        <iframe
          src="https://player.vimeo.com/video/742185709?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          className="vimeo-iframe"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Multi user VR talk at Transcure Conference"
        ></iframe>
      </div>

      <p className="paragraph project-detail-description">
        We are frequently invited to showcase MolecularWebXR at various events, where we conduct interactive sessions
        designed to spark community interest in science. Below are some pictures and videos from these sessions. The
        first is from the European Molecular Biology Laboratory in Heidelberg, Germany, at the Visualizing Biology
        Conference (Vizbi 2023). The second is from the EPFL Open Days in Lausanne, Switzerland, where we held 20
        interactive sessions over two days to engage the community with the university's ongoing research.
      </p>

      <figure className="project-large-image-container">
        <img className="project-image" src={mwxr4} alt="people using molecularwebxr in a conference" />
      </figure>

      <div className="vimeo-embed-container">
        <iframe
          src="https://player.vimeo.com/video/947982294?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          className="vimeo-iframe"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="VR Session at EPFL Open Days 2023"
        ></iframe>
      </div>

      <p className="paragraph project-detail-description">
        MolecularWebXR was nominated for Education Experience of the Year and Mixed Reality Experience of the Year at
        The Polys WebXR Awards 2023, competing against major players like Niantic, Meta, and the World Bank. This was a
        huge achievement for our small team of just one developer and one biologist, with no promotion or advertising,
        but a relentless commitment to democratizing access to digital learning tools and making them accessible to
        everyone, everywhere.
      </p>

      <p className="paragraph project-detail-description">
        This project was funded by the{" "}
        <span>
          <a href="https://www.snf.ch" target="_blank" rel="noopener noreferrer" style={{ color: color2 }}>
            Swiss National Science Foundation{" "}
          </a>
        </span>
        and was made by me and
        <span>
          <a href="https://www.lucianoabriata.com/" target="_blank" rel="noopener noreferrer" style={{ color: color2 }}>
            {" "}
            Luciano Abriata{" "}
          </a>
        </span>
        at the Laboratory for biomolecular modeling at EPFL.
      </p>

      <figure className="project-square-image-container">
        <img className="project-image" src={mwxr7} alt="nominations to polys webxr awards" />
      </figure>
    </div>
  );
};

export default MolecularWebXR;
