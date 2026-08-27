import BrowserFrame from "../../ProjectDetail/BrowserFrame";
import {
  ProjectCopy,
  ProjectHeader,
  ProjectNavigation,
  ProjectPage,
  ProjectSection,
  ProjectSectionHeading,
} from "../../ProjectDetail";
import mw1 from "../../../images/mw1.webp";
import mw2 from "../../../images/mw2.webp";
import mw3 from "../../../images/mw3.webp";
import mw4 from "../../../images/mw4.webp";
import mw5 from "../../../images/mw5.webp";
import vmk from "../../../images/vmk.mp4";
import styles from "./Molecularweb.module.css";

const Molecularweb = () => (
  <ProjectPage>
    <ProjectHeader
      category="Augmented Reality"
      title="MoleculARweb"
      summary="A free website with interactive AR activities where students and teachers can explore molecular structure, reactivity, dynamics and interactions."
      cta={{
        href: "https://molecularweb.org/",
        label: "Try MoleculARweb",
      }}
    >
      <div className={styles.heroArtifact}>
        <BrowserFrame className={styles.heroFrame}>
          <img
            className={styles.heroImage}
            src={mw1}
            alt="The MoleculARweb virtual modeling kit running in augmented reality"
            width="1920"
            height="1080"
          />
        </BrowserFrame>

        <aside className={styles.heroNote} aria-label="Project availability">
          <span>Free and open source</span>
          <strong>More than 20 activities.</strong>
          <strong>Runs in the browser.</strong>
        </aside>
      </div>
    </ProjectHeader>

    <ProjectSection className={styles.activitiesSection}>
      <ProjectSectionHeading label="01 / The activities">Chemistry and biology in AR</ProjectSectionHeading>

      <ProjectCopy>
        <p>
          MoleculARweb is made up of mini-apps that we call activities. They cover different concepts in chemistry and
          biology, from 3D visualizations to interactive simulations.
        </p>
        <p>
          There are more than 20 activities. MoleculARweb is free and{" "}
          <a
            href="https://github.com/molecularwebxr/molecularweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            open source
          </a>
          , and it is used by teachers and students around the world.
        </p>
      </ProjectCopy>
    </ProjectSection>

    <ProjectSection className={styles.modesSection}>
      <ProjectSectionHeading label="02 / Two modes" align="right">
        Marker-based and markerless AR
      </ProjectSectionHeading>

      <ProjectCopy align="right">
        <p>
          The activities can use printed markers or place the 3D content directly in the user's space. Some also include
          a regular 3D mode for laptops and mobile devices.
        </p>
      </ProjectCopy>

      <div className={styles.modeList}>
        <div className={styles.mode}>
          <div className={styles.modeCopy}>
            <span>Mode / 01</span>
            <h3>Marker-based AR</h3>
            <p>
              Users print black-and-white markers on regular paper and use them to display and manipulate 3D elements.
              Desktop controls allow rotation and scaling, while mobile devices use finger gestures.
            </p>
          </div>

          <BrowserFrame
            className={styles.modeFrame}
            caption="Two marker-based activities running on a mobile device."
          >
            <div className={styles.phonePair}>
              <img
                className={styles.phoneLeft}
                src={mw4}
                alt="A marker-based activity showing a protein secondary structure"
                width="540"
                height="1024"
                loading="lazy"
              />
              <img
                className={styles.phoneRight}
                src={mw5}
                alt="A marker-based activity showing a green molecular structure"
                width="540"
                height="1024"
                loading="lazy"
              />
            </div>
          </BrowserFrame>
        </div>

        <div className={`${styles.mode} ${styles.modeReverse}`}>
          <BrowserFrame
            className={styles.modeFrame}
            caption="The same activity in markerless AR and regular 3D mode."
          >
            <div className={styles.phonePair}>
              <img
                className={styles.phoneLeft}
                src={mw2}
                alt="A bacteriophage activity placed outdoors with markerless augmented reality"
                width="558"
                height="728"
                loading="lazy"
              />
              <img
                className={styles.phoneRight}
                src={mw3}
                alt="The bacteriophage activity displayed in regular 3D mode"
                width="558"
                height="728"
                loading="lazy"
              />
            </div>
          </BrowserFrame>

          <div className={styles.modeCopy}>
            <span>Mode / 02</span>
            <h3>Markerless AR and 3D</h3>
            <p>
              Some visualization activities work without markers. Users can place the elements in their physical space,
              walk around them and even move inside larger molecular structures.
            </p>
          </div>
        </div>
      </div>
    </ProjectSection>

    <ProjectSection className={styles.kitSection}>
      <div>
        <ProjectSectionHeading label="03 / Main feature">The virtual modeling kit</ProjectSectionHeading>

        <ProjectCopy>
          <p>
            The virtual modeling kit is the AR equivalent of the plastic molecular models traditionally used in schools.
            There are no limits on the number of atoms or elements. Users can upload or paste PDB files, or create custom
            molecules with the JSMol editor.
          </p>
          <p>
            Cube markers remove blind spots for the camera and give users better control. The kit can simulate hydrogen
            bonds, atom clashes and changes in temperature, all in the browser.
          </p>
        </ProjectCopy>
      </div>

      <BrowserFrame className={styles.kitFrame} caption="Building and manipulating a molecule with the virtual modeling kit.">
        <video
          className={styles.kitImage}
          src={vmk}
          aria-label="The MoleculARweb virtual modeling kit in use"
          width="600"
          height="292"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </BrowserFrame>
    </ProjectSection>

    <ProjectSection className={styles.creditsSection}>
      <ProjectSectionHeading label="04 / Project" align="right">
        Made at EPFL
      </ProjectSectionHeading>

      <ProjectCopy className={styles.creditsCopy} align="right">
        <p>
          This project was funded by the{" "}
          <a href="https://www.snf.ch" target="_blank" rel="noopener noreferrer">
            Swiss National Science Foundation
          </a>{" "}
          and was made by me and{" "}
          <a href="https://www.lucianoabriata.com/" target="_blank" rel="noopener noreferrer">
            Luciano Abriata
          </a>{" "}
          at EPFL's Laboratory for Biomolecular Modeling.
        </p>
      </ProjectCopy>
    </ProjectSection>

    <ProjectNavigation className={styles.projectNavigation} nextTo="/pdb2ar" nextTitle="PDB2AR" />
  </ProjectPage>
);

export default Molecularweb;
