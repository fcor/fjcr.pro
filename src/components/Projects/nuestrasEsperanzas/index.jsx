import React, { useEffect, useState } from "react";
import { getRandomColor } from "../../../utils";
import ne2 from "../../../images/ne2.jpg";
import ne5 from "../../../images/ne5.jpg";
import ne3 from "../../../images/ne3.jpg";
import ne4 from "../../../images/ne4.jpg";

const NuestrasEsperanzas = () => {
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
        Nuestras Esperanzas
      </p>

      <p
        className="paragraph project-detail-description project-subtitle"
        style={{ color: color2 }}
      >
        "El hardcore son los amigos, lo aprendido junto a ellos, y es vivir,
        sentir, pensar, plasmar para dejar algo a los demas!"
      </p>

      <p className="paragraph project-detail-description">
        Generative artwork inspired by the amazing song "Nuestras esperanzas" by
        Grito, one of my favorite bands, 100% colombian Hardcore!
      </p>

      <figure className="project-large-image-container">
        <img className="project-image" src={ne2} alt="generative artwork" />
      </figure>

      <p className="paragraph project-detail-description">
        In collaboration with the band, we released a{" "}
        <span>
          <a
            href="https://www.fjcr.studio/product/nuestras-esperanzas"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            limited edition{" "}
          </a>
        </span>
        of 12 prints and some postcards.
      </p>

      <figure className="project-large-image-container">
        <img className="project-image" src={ne5} alt="generative artwork" />
      </figure>

      <p className="paragraph project-detail-description">
        The pattern is a generative design made in Processing. Edits and
        post-processing were made on Affinity Designer.
      </p>

      <div className="project-small-img-container row">
        <img
          className="project-image-small"
          src={ne3}
          alt="generative artwork"
        />
        <img className="project-image-small" src={ne4} alt="postcard" />
      </div>

      <p className="paragraph project-detail-description">
        The font is Prociono and can be found{" "}
        <span>
          <a
            href="https://www.theleagueofmoveabletype.com/prociono"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            here.{" "}
          </a>
        </span>
        It's an open source font made by Barry Schwartz and published
        exclusively on{" "}
        <span>
          <a
            href="https://www.theleagueofmoveabletype.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color2 }}
          >
            The League of Movable Type.
          </a>
        </span>
      </p>
    </div>
  );
};

export default NuestrasEsperanzas;
