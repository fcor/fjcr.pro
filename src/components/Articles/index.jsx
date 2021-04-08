import React from "react";
import "./styles.css";
import { getRandomColor } from "../../utils/index";

const Articles = () => {
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
        I sometimes write about development on my blog:
      </p>
      <div className="article column">
        <a
          href="https://medium.com/@fabiojcortes/manipulate-your-3d-content-with-gestures-in-ar-js-78da4c076607"
          target="_blank"
          rel="noopener noreferrer"
          className="title"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          Manipulate your 3D content with gestures in AR.js
        </a>
        <p className="paragraph">
          Learn how to add gesture controls on any Image tracking or Marker
          Based AR.js scene.
        </p>
      </div>
    </div>
  );
};

export default Articles;
