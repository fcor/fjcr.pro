import { NavLink } from "react-router-dom";
import ArrowIcon from "../ArrowIcon";
import categoryCode from "../../images/category-code.svg";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  category,
  description,
  external = false,
  image,
  imageAlt,
  reversed = false,
  title,
  titleLines = [title],
  url,
}) => {
  const LinkComponent = external ? "a" : NavLink;
  const linkProps = external
    ? { href: url, rel: "noopener noreferrer", target: "_blank" }
    : { to: url };

  return (
    <article className={`${styles.project} ${reversed ? styles.reversed : ""}`.trim()}>
      <div className={styles.mediaWindow}>
        <div className={styles.toolbar} aria-hidden="true">
          <span className={`${styles.control} ${styles.rust}`} />
          <span className={`${styles.control} ${styles.teal}`} />
          <span className={`${styles.control} ${styles.black}`} />
        </div>

        <div className={styles.imageFrame}>
          <img className={styles.image} src={image} alt={imageAlt} width="800" height="600" />
        </div>
      </div>

      <div className={styles.details}>
        <span className={styles.category}>
          <img className={styles.categoryIcon} src={categoryCode} width="12" height="7" alt="" />
          {category}
        </span>

        <h2 className={styles.title} aria-label={title}>
          {titleLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < titleLines.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
        <p className={styles.description}>{description}</p>

        <LinkComponent
          className={styles.link}
          aria-label={`Learn more about ${title}${external ? " (opens in a new tab)" : ""}`}
          {...linkProps}
        >
          <span>Learn More</span>
          <ArrowIcon className={styles.arrow} />
        </LinkComponent>
      </div>
    </article>
  );
};

export default ProjectCard;
