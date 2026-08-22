import styles from "./BrowserFrame.module.css";

const BrowserFrame = ({ caption, children, className = "" }) => (
  <figure className={`${styles.frame} ${className}`.trim()}>
    <div className={styles.toolbar} aria-hidden="true">
      <span className={`${styles.control} ${styles.rust}`} />
      <span className={`${styles.control} ${styles.teal}`} />
      <span className={`${styles.control} ${styles.black}`} />
    </div>

    <div className={styles.viewport}>{children}</div>

    {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
  </figure>
);

export default BrowserFrame;
