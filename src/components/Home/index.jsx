import { useEffect } from "react";
import styles from "./Home.module.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`chrome-container ${styles.inner}`}>
        <h1 className={styles.heading}>
          <span className={styles.line}>I make</span>
          <span className={styles.line}>computers</span>
          {/* "draw" — kept separate from its container so both can be
              animated / treated independently later. */}
          <span className={styles.drawWrap}>
            <span className={styles.draw}>draw</span>
          </span>
          <span className={styles.line}>things.</span>
        </h1>

        <p className={styles.paragraph}>
          Exploring the intersection between art and technology <br /> using
          code as creative medium
        </p>

        <div className={styles.badges}>
          <span className={`${styles.badge} ${styles.badgeArtist} sticker`}>
            New Media Artist
          </span>
          <span className={`${styles.badge} ${styles.badgeEngineer} sticker`}>
            Design Engineer
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
