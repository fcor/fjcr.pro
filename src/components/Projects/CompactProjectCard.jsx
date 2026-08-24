import { NavLink } from "react-router-dom";
import ArrowIcon from "../ArrowIcon";
import categoryCode from "../../images/category-code.svg";
import styles from "./CompactProjectCard.module.css";

const CompactProjectCard = ({
  category,
  description,
  external = false,
  image,
  imageAlt,
  title,
  url,
}) => {
  const LinkComponent = external ? "a" : NavLink;
  const linkProps = external
    ? { href: url, rel: "noopener noreferrer", target: "_blank" }
    : { to: url };

  return (
    <article className={styles.project}>
      <LinkComponent
        className={styles.link}
        aria-label={`${title}${external ? " (opens in a new tab)" : ""}`}
        {...linkProps}
      >
        <div className={styles.mediaWindow}>
          <div className={styles.toolbar} aria-hidden="true">
            <span className={`${styles.control} ${styles.rust}`} />
            <span className={`${styles.control} ${styles.teal}`} />
            <span className={`${styles.control} ${styles.black}`} />
          </div>

          <div className={styles.imageFrame}>
            <img
              className={styles.image}
              src={image}
              alt={imageAlt}
              width="800"
              height="600"
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.details}>
          <span className={styles.category}>
            <img className={styles.categoryIcon} src={categoryCode} width="12" height="7" alt="" />
            {category}
          </span>

          <div className={styles.titleRow}>
            <h3 className={styles.title}>{title}</h3>
            <ArrowIcon className={styles.arrow} size={20} />
          </div>

          <p className={styles.description}>{description}</p>
        </div>
      </LinkComponent>
    </article>
  );
};

export default CompactProjectCard;
