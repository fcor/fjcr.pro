import styles from "./SectionHeading.module.css";

const SectionHeading = ({ as: Component = "h2", children, className = "", id }) => (
  <div className={`${styles.frame} ${className}`.trim()}>
    <Component className={styles.heading} id={id}>
      {children}
    </Component>
  </div>
);

export default SectionHeading;
