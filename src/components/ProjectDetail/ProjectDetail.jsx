import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ArrowIcon from "../ArrowIcon";
import categoryCode from "../../images/category-code.svg";
import BrowserFrame from "./BrowserFrame";
import styles from "./ProjectDetail.module.css";

const classNames = (...names) => names.filter(Boolean).join(" ");

export const ProjectPage = ({ children, className = "" }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={classNames(styles.page, className)}>
      <div className={classNames("site-container", styles.container)}>{children}</div>
    </main>
  );
};

export const ProjectHeader = ({
  category,
  summary,
  title,
  titleParts = [title],
  separateTitleParts = false,
  cta,
  children,
  className = "",
}) => (
  <>
    <div className={styles.utilityRow}>
      <NavLink className={styles.backLink} to="/work">
        <ArrowIcon className={styles.backArrow} />
        <span>Selected Work</span>
      </NavLink>

      <span className={styles.category}>
        <img src={categoryCode} width="12" height="7" alt="" />
        {category}
      </span>
    </div>

    <header className={classNames(styles.hero, className)}>
      <h1
        className={classNames(styles.title, separateTitleParts && styles.separatedTitle)}
        aria-label={title}
      >
        {titleParts.map((part, index) => (
          <span key={`${part}-${index}`} aria-hidden="true">
            {part}
          </span>
        ))}
      </h1>

      <div className={styles.heroIntro}>
        <p>{summary}</p>

        {cta ? (
          <a
            className={styles.primaryLink}
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{cta.label}</span>
            <ArrowIcon className={styles.externalArrow} />
          </a>
        ) : null}
      </div>

      {children}
    </header>
  </>
);

export const ProjectSection = ({ children, className = "" }) => (
  <section className={classNames(styles.section, className)}>{children}</section>
);

export const ProjectSectionHeading = ({ label, children, align = "left", className = "" }) => (
  <header
    className={classNames(
      styles.sectionHeading,
      align === "right" && styles.sectionHeadingRight,
      className,
    )}
  >
    <span className={styles.sectionLabel}>{label}</span>
    <h2>{children}</h2>
  </header>
);

export const ProjectCopy = ({ children, align = "left", className = "" }) => (
  <div className={classNames(styles.copy, align === "right" && styles.copyRight, className)}>
    {children}
  </div>
);

export const ProjectStatement = ({ label, children, note, className = "" }) => (
  <aside className={classNames(styles.statement, className)}>
    <span className={styles.statementIndex}>{label}</span>
    <p>{children}</p>
    <span className={styles.statementNote}>{note}</span>
  </aside>
);

export const EmbeddedVideoFrame = ({ caption, src, title, className = "" }) => (
  <BrowserFrame className={className} caption={caption}>
    <div className={styles.video}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        allowFullScreen
      />
    </div>
  </BrowserFrame>
);

export const ProjectNavigation = ({ className = "", nextTitle, nextTo }) => (
  <nav className={classNames(styles.projectNavigation, className)} aria-label="Project navigation">
    <NavLink className={styles.allProjectsLink} to="/work">
      <ArrowIcon className={styles.backArrow} />
      <span>All projects</span>
    </NavLink>

    <NavLink className={styles.nextProjectLink} to={nextTo}>
      <span>
        <small>Next project</small>
        {nextTitle}
      </span>
      <ArrowIcon className={styles.nextArrow} size={20} />
    </NavLink>
  </nav>
);
