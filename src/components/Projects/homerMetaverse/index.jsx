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
    window.scrollTo(0, 0);
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

      <div
        style={{ margin: "1rem 0 2.25rem 0",  width: "80vw", padding: "75% 0 0 0", position: "relative" }}
      >
        <iframe
          src="https://player.vimeo.com/video/534958787?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          title="Homer's Metaverse"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>

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
