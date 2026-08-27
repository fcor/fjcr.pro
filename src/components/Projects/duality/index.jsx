import {
  ProjectCopy,
  ProjectHeader,
  ProjectNavigation,
  ProjectPage,
  ProjectSection,
  ProjectSectionHeading,
  ProjectStatement,
} from "../../ProjectDetail";
import BrowserFrame from "../../ProjectDetail/BrowserFrame";
import duality1 from "../../../images/duality1.webp";
import duality2 from "../../../images/duality2.webp";
import duality4 from "../../../images/duality4.webp";
import styles from "./Duality.module.css";

const PerformanceVideo = ({ caption, label, src, title }) => (
  <BrowserFrame
    className={styles.videoArtifact}
    caption={
      <span className={styles.videoCaption}>
        <strong>{label}</strong>
        {caption}
      </span>
    }
  >
    <div className={styles.video}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
      />
    </div>
  </BrowserFrame>
);

const Duality = () => (
  <ProjectPage>
    <ProjectHeader
      category="Live Coding"
      title="Duality"
      summary="A live performance combining generative algorithms, analog remixing and audiovisual improvisation."
      cta={{
        href: "https://vimeo.com/819805051?share=copy",
        label: "Watch the full show",
      }}
    >
      <div className={styles.heroArtifact}>
        <BrowserFrame className={styles.heroFrame}>
          <img
            className={styles.heroImage}
            src={duality2}
            alt="Duality performed in front of an audience at Live Performers Meeting"
            width="7130"
            height="4759"
          />
        </BrowserFrame>

        <aside className={styles.setTicket} aria-label="Performance location and date">
          <span>Live set / LPM</span>
          <strong>Münster, Germany</strong>
          <small>April 2023</small>
        </aside>
      </div>
    </ProjectHeader>

    <ProjectSection className={styles.systemSection}>
      <div className={styles.systemCopy}>
        <ProjectSectionHeading label="01 / The performance">
          Live coding and analog remixing
        </ProjectSectionHeading>

        <ProjectCopy>
          <p>
            Duality is a live coding performance where I generate unpredictable patterns and compositions with
            generative algorithms. The visuals are created by manipulating different waves, inspired by the conflicting
            inner voices within us.
          </p>
          <p>
            They are accompanied by repetitive rhythms built from simple tracks that I remix and tweak live with analog
            equipment. I follow my intuition and try to keep the sound and visuals connected as the performance evolves.
          </p>
        </ProjectCopy>
      </div>

      <BrowserFrame
        className={styles.closeArtifact}
        caption="Code, rendered output and analog controls remain visible on stage."
      >
        <img
          className={styles.closeImage}
          src={duality4}
          alt="Fabio live-coding generative visuals while manipulating analog audio controls"
          width="1500"
          height="1125"
          loading="lazy"
        />
      </BrowserFrame>
    </ProjectSection>

    <ProjectStatement
      label="Improvised live"
      note="I change the visuals and remix the sound live, following what happens on screen and in the room."
    >
      Every performance is different.
    </ProjectStatement>

    <ProjectSection className={styles.channelSection}>
      <ProjectSectionHeading label="02 / Visuals and sound" align="right">
        Two parts of the same performance
      </ProjectSectionHeading>

      <ProjectCopy align="right">
        <p>
          The setup is split between the live-coded visuals and the tracks I remix. I control both at the same time and
          adjust one in response to the other.
        </p>
      </ProjectCopy>

      <div className={styles.channelBand}>
        <article>
          <span>Visuals / Live coding</span>
          <h3>Generative visuals</h3>
          <p>
            I create the visuals live with generative algorithms. Changing the values of different waves produces
            patterns and compositions that are sometimes predictable and sometimes not.
          </p>
        </article>
        <article>
          <span>Sound / Analog remix</span>
          <h3>Repetitive rhythms</h3>
          <p>
            The music starts from simple, repetitive tracks. I remix and tweak them with analog equipment, trying to
            match their rhythm and intensity with the visuals.
          </p>
        </article>
      </div>

      <div className={styles.featuredVideo}>
        <PerformanceVideo
          label="Live fragment"
          src="https://player.vimeo.com/video/819827938?h=9fc274dbf8"
          title="Excerpt from Duality at Live Performers Meeting 2023"
          caption="A fragment from the live audiovisual set."
        />
      </div>
    </ProjectSection>

    <ProjectSection className={styles.originSection}>
      <BrowserFrame
        className={styles.performerArtifact}
        caption="Performing Duality at Live Performers Meeting in Münster."
      >
        <img
          className={styles.performerImage}
          src={duality1}
          alt="Fabio performing Duality from the side of the stage"
          width="800"
          height="600"
          loading="lazy"
        />
      </BrowserFrame>

      <div>
        <ProjectSectionHeading label="03 / Inspiration">Jekyll, Hyde and Duality</ProjectSectionHeading>

        <ProjectCopy>
          <p>
            Duality is inspired by Jekyll and Hyde and by the conflicting voices within us. Through spontaneity and
            improvisation, the performance reflects on the many sides of duality and the complexity of the human
            experience.
          </p>
          <p>
            The show was performed at{" "}
            <a href="https://liveperformersmeeting.net/" target="_blank" rel="noopener noreferrer">
              Live Performers Meeting
            </a>{" "}
            in April 2023 at Bennohaus in Münster, Germany. The{" "}
            <a href="https://vimeo.com/819805051?share=copy" target="_blank" rel="noopener noreferrer">
              full performance
            </a>{" "}
            is available on Vimeo.
          </p>
        </ProjectCopy>
      </div>
    </ProjectSection>

    <ProjectNavigation nextTo="/molecularweb" nextTitle="MoleculARweb" />
  </ProjectPage>
);

export default Duality;
