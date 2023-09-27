import React, { useEffect, useState } from "react";
import { getRandomColor } from "../../../utils";
import duality2 from "../../../images/duality2.jpg";
import duality4 from "../../../images/duality4.jpg";

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
        Duality
      </p>

      <p className="paragraph project-detail-description">
        Duality is a live performance that combines generative algorithms,
        analog remixing, and audiovisual improvisation to create a unique and
        captivating experience for audiences.
      </p>

      <p className="paragraph project-detail-description">
        The performance consists of a live coding session where I generate
        unpredictable patterns and compositions using generative algorithms,
        based on the manipulation of different waves, inspired by the
        conflicting inner voices within us. These visuals are accompanied by
        repetitive rhythm patterns, based on simple tracks that I remix and
        tweak live, analogically, following my intuition to align them with the
        visuals.
      </p>

      <p className="paragraph project-detail-description">
        Inspired by Jekyll and Hyde, Duality is a unique and captivating
        performance that invites you to reflect on the many facets of duality
        and the complexity of the human experience through spontaneity and
        creativity.
      </p>

      <p className="paragraph project-detail-description">
        This show was performed at the {" "}
        <span>
          <a
            href="https://liveperformersmeeting.net/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            Live Performers Meeting
          </a>
        </span>
        {" "} in April 2023 at the Bennohaus in Münster, Germany.
      </p>

      <figure className="project-large-image-container">
        <img
          className="project-image"
          src={duality4}
          alt="Screenshot of homer's metaverse"
        />
      </figure>

      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/819829228?h=85137abcd6"
        width="640"
        height="360"
        frameborder="0"
        allowfullscreen
        style={{margin: "0 0 2rem 0"}}
      ></iframe>

      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/819829195?h=d076c052f6"
        width="640"
        height="360"
        frameborder="0"
        allowfullscreen
      ></iframe>

      <figure className="project-large-image-container">
        <img
          className="project-image"
          src={duality2}
          alt="Screenshot of homer's metaverse"
        />
      </figure>

      <p className="paragraph project-detail-description">
        Watch the full show{" "}
        <span>
          <a
            href="https://vimeo.com/819805051?share=copy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            here.
          </a>
        </span>
      </p>
    </div>
  );
};

export default Homer;
