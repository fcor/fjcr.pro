import React from "react";
import "./styles.css";
import { getRandomColor } from "../../utils/index";

const Teaching = () => {
  const onHoverOut = (e) => {
    e.target.style.color = "white";
  };

  const onHover = (e) => {
    const col = getRandomColor();
    e.target.style.color = col;
  };

  return (
    <div className="articles-container column">
      <p className="paragraph">
        Here are some the courses I've teached recently:
      </p>
      <div className="article column">
        <a
          href="https://ed.team/cursos/ar-web"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
         Augmented reality on the web with AR.js
        </a>
        <p className="paragraph article-description">
          In this course you will learn the core concepts of augmented reality and how
          to create interactive experiences using markers, image tracking and location based AR using
          A-Frame and AR.js.
        </p>
      </div>

      <div className="article column">
        <a
          href="https://ed.team/cursos/rv-web"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          Get started with virtual reality on the web
        </a>
        <p className="paragraph article-description">
          In this course you will learn the core concepts of virtual reality and how
          to create interactive and immersive experiences using A-Frame.
        </p>
      </div>
    </div>
  );
};

export default Teaching;
