import React, { useEffect, useState } from "react";
import { getRandomColor } from "../../../utils";
import culpable2 from "../../../images/culpable2.jpg";
import culpable3 from "../../../images/culpable3.jpg";

const NuestrasEsperanzas = () => {
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
        Culpable
      </p>

      <p
        className="paragraph project-detail-description project-subtitle"
        style={{ color: color2 }}
      >
        "Hazlo tu mismo, pero no lo hagas solo"
      </p>

      <p className="paragraph project-detail-description">
        In june 2023, Grito invited different artists to collaborate for the art
        of their new album "8". Each artist was assigned with one of the songs and
        the job was to create an unique artwork inspired by the song and its
        message.
      </p>

      <p className="paragraph project-detail-description">
        I received the third song, Culpable.
      </p>

      <figure className="project-square-image-container">
        <img
          className="project-image"
          src={culpable2}
          alt="generative artwork"
        />
      </figure>

      <p className="paragraph project-detail-description">
        Creating this code-based artwork, inspired by the song and the symbolic
        scorpion from the indigenous Arhuacas community in Colombia, was a labor
        of love, a true celebration of the unity of art and music and a tribute
        to the values we stand for.
      </p>
      <p className="paragraph project-detail-description">
        I can't help but think back to the 19-year-old me who wouldn't believe
        that someday I'd have the chance to blend my passions for music and art,
        all thanks to the amazing band that played that unforgettable night at
        the legendary Teatro La Mama in Bogota.
      </p>

      <p className="paragraph project-detail-description">
        This collaboration is not just about art, it's a journey that connects
        me to my roots, my inspiration, and the values that have shaped who I am
        today.
      </p>

      <figure className="project-square-image-container">
        <img
          className="project-image"
          src={culpable3}
          alt="generative artwork"
        />
      </figure>

      <p className="paragraph project-detail-description">
        Listen to the song{" "}
        <span>
          <a
            href="https://www.youtube.com/watch?v=ukudtRv3A4Q&ab_channel=Grito-Topic"
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

export default NuestrasEsperanzas;
