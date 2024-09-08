import React, { useEffect, useState } from "react";
import { getRandomColor } from "../../../utils";
import draw2 from "../../../images/draw2.jpg";

const DrawingInspiration = () => {
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
        Drawing Inspiration
      </p>

      <p className="paragraph project-detail-description">
        This project was built during 3 days at the{" "}
        <span>
          <a
            href="https://meta-aws-hackathon-xr-genai.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            Develop the Future - Meta & AWS Hackathon for XR & GenAI
          </a>
        </span>{" "}
        in August 2024 at Amazon HQ in Palo Alto, California.
      </p>

      <p className="paragraph project-detail-description">
        Inspired by the challenge of visualizing art in personal spaces before making a purchase, Drawing Inspiration
        seeks to bridge the gap between imagination and reality. This project harnesses mixed reality and generative AI
        to transform simple sketches into stunning, room-scale art previews within a user's environment. Our journey
        through this development was fueled by a passion for art, technology, and the desire to enhance the home decor
        experience.
      </p>

      <p className="paragraph project-detail-description">
        The idea was sparked by a common predicament: many people struggle to visualize how art would look in their
        space before they commit to a purchase. We wanted to empower users to not only see but also influence the art
        that fills their living spaces making the process interactive and personalized through mixed reality.
      </p>

      <div className="vimeo-embed-container">
        <iframe
          src="https://www.youtube.com/embed/tmKwzoC13y4?si=oaOImHfeKX7dFEOi"
          className="vimeo-iframe"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Drawing Inspiration"
        ></iframe>
      </div>
      
      <p className="paragraph project-detail-description">
        Throughout this project, we learned to integrate various technologies including Meta Quest's innovative tools
        like Scene, Passthrough, and Interaction SDKs, along with Unity and WebXR for frontend development. On the
        backend, we leveraged AWS services, employing the Elastic Container Registry (ECR) and Elastic Container Service
        (ECS) to manage our application deployments seamlessly and implemented generative AI through AWS Bedrock and
        Stable Diffusion models to convert textual descriptions into vivid artistic images sending to the user the final
        result generated as outcome.
      </p>

      <p className="paragraph project-detail-description">
        The project was awarded 1st place in the Hackathon for the GenAI track, and was made by me, 
        <span>
          <a href="https://www.linkedin.com/in/davidurrutia/" target="_blank" rel="noopener noreferrer" style={{ color: color2 }}>
            {" "}
            David Urrutia,
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/bill-wang-gameology/" target="_blank" rel="noopener noreferrer" style={{ color: color2 }}>
            {" "}
            Bill Wang,{" "}
          </a>
        </span>
        and
        <span>
          <a href="https://www.linkedin.com/in/danny-chavez-b5671a56/" target="_blank" rel="noopener noreferrer" style={{ color: color2 }}>
            {" "}
            Danny Chavez.
          </a>
        </span>
      </p>

      <figure className="project-square-image-container">
        <img className="project-image" src={draw2} alt="Screenshot of homer's metaverse" />
      </figure>
    </div>
  );
};

export default DrawingInspiration;
