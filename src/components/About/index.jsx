import { useEffect } from "react";
import styles from "./About.module.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.about}>
      <h1 className={styles.title}>About</h1>
      <p className={styles.paragraph}>
        Placeholder — bio and content coming soon.
      </p>
    </div>
  );
};

export default About;
