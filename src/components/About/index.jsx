import { useEffect } from "react";
import SectionHeading from "../SectionHeading";
import portrait from "../../images/about-portrait.jpg";
import styles from "./About.module.css";

const motto = "Make cool shit and kick some asses.";

const contactLinks = [
  {
    label: "Twitter",
    value: "@fabiojcortes",
    href: "https://twitter.com/fabiojcortes",
  },
  {
    label: "LinkedIn",
    value: "/in/fabiojcortes",
    href: "https://www.linkedin.com/in/fabiojcortes/",
  },
  {
    label: "Instagram",
    value: "@fabiojcortes",
    href: "https://www.instagram.com/fabiojcortes/",
  },
  {
    label: "Email",
    value: "fabio@fjcr.pro",
    href: "mailto:fabio@fjcr.pro",
    external: false,
  },
];

const MottoSticker = () => (
  <p className={styles.mottoSticker} aria-label={motto}>
    <span className={styles.stickerPrimary} aria-hidden="true">
      Make cool shit
    </span>
    <span className={styles.stickerSecondary} aria-hidden="true">
      and kick some asses.
    </span>
  </p>
);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.about}>
      <div className={`site-container ${styles.shell}`}>
        <SectionHeading as="h1">ABOUT ME</SectionHeading>

        <div className={styles.content}>
          <aside className={styles.identity} aria-label="Portrait and contact details">
            <figure className={styles.portrait}>
              <img
                src={portrait}
                alt="Fabio J. Cortés"
                width="1024"
                height="1024"
              />
            </figure>

            <nav
              className={`${styles.contact} sticker tilt-l`}
              aria-label="Social and contact links"
            >
              <dl>
                {contactLinks.map(({ label, value, href, external = true }) => (
                  <div className={styles.contactRow} key={label}>
                    <dt>{label}:</dt>
                    <dd>
                      <a
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {value}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </nav>
          </aside>

          <div className={styles.bioStage}>
            <div className={styles.bioFrame}>
              <article className={styles.bio}>
                <h2>Hola</h2>
                <div className={styles.bioCopy}>
                  <p>I am Fabio, a kid from Neiva, Colombia, living in Milan, Italy.</p>
                  <p>I work as a Lead Design Technologist at Amazon's Brand Innovation Lab.</p>
                  <p>
                    My background is a mix of graphics, spatial computing, and
                    creative coding.
                  </p>
                  <p>
                    I use code to draw, print, and make noise, from fine art
                    printing to pen plotting, and live-coding audiovisual shows.
                  </p>
                  <p>
                    Music is a big part of my life. From hardcore and punk rock to
                    death metal and surf rock, I'm always hunting for records to
                    grow my vinyl collection.
                  </p>
                  <p>I play drums, and I'm currently learning the bongo.</p>
                </div>
              </article>
            </div>

            <MottoSticker />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
