import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";

const links = [
  // { label: "LinkedIn", href: "https://www.linkedin.com/in/fabiojcortes/" },
  { label: "GitHub", href: "https://github.com/fcor" },
  { label: "Instagram", href: "https://www.instagram.com/fabiojcortes/" },
  { label: "Shop", href: "https://fjcr.bigcartel.com/" },
];

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) {
    return (
      <footer className={styles.palette} aria-label="Footer">
        <span style={{ background: "var(--rust)" }} />
        <span style={{ background: "var(--teal)" }} />
        <span style={{ background: "var(--sand)" }} />
        <span style={{ background: "#000" }} />
      </footer>
    );
  }

  return (
    <footer className={styles.footer}>
      <div className={`chrome-container ${styles.inner}`}>
        <span className={`${styles.brand} sticker`}>Fabio J. Cortés</span>
        <nav className={styles.links}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
