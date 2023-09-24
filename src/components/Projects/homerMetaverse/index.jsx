import React, { useEffect, useState } from "react";
import { getRandomColor } from "../../../utils";
import homero1 from "../../../images/homero1.png";
import homero2 from "../../../images/homero2.png";

const Homer = () => {
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
        Homer's Metaverse
      </p>

      <p className="paragraph project-detail-description">
        My first exposure to VR was{" "}
        <span>
          <a
            href="https://en.wikipedia.org/wiki/Treehouse_of_Horror_VI#Homer3_(Homer_Cubed)"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            an episode of The Simpsons from 1995
          </a>
        </span>{" "}
        where Homer finds himself in a mysterious 3D world behind a book shelf.
      </p>

      <p className="paragraph project-detail-description">
        I wanted to recreate this memory in VR and here it is!
      </p>

      <p className="paragraph project-detail-description">
        Try the live version{" "}
        <span>
          <a
            href="https://homer-metaverse.glitch.me/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            here.
          </a>
        </span>
      </p>

      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/534958787?h=6b5260ce9d"
        width="600"
        height="600"
        frameborder="0"
        allowfullscreen
      ></iframe>

      <figure className="project-large-image-container">
        <img
          className="project-image"
          src={homero1}
          alt="Screenshot of homer's metaverse"
        />
      </figure>

      <figure className="project-large-image-container">
        <img
          className="project-image"
          src={homero2}
          alt="Screenshot of homer's metaverse"
        />
      </figure>
    </div>
  );

};

export default Homer;
