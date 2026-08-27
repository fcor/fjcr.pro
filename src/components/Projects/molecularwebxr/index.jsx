import BrowserFrame from "../../ProjectDetail/BrowserFrame";
import {
  EmbeddedVideoFrame,
  ProjectCopy,
  ProjectHeader,
  ProjectNavigation,
  ProjectPage,
  ProjectSection,
  ProjectSectionHeading,
  ProjectStatement,
} from "../../ProjectDetail";
import mwxr2 from "../../../images/mwxr2.webp";
import mwxr4 from "../../../images/mwxr4.webp";
import mwxr7 from "../../../images/mwxr7.webp";
import styles from "./MolecularWebXR.module.css";

const heroVideo = "https://killcloud.nyc3.cdn.digitaloceanspaces.com/assets/xr.mp4";

const MolecularWebXR = () => (
  <ProjectPage>
    <ProjectHeader
      category="Mixed Reality"
      title="MolecularWebXR"
      titleParts={["Molecular", "WebXR"]}
      summary="A shared mixed-reality room where students, teachers and researchers can explore molecular structures together, directly from the browser."
      cta={{
        href: "https://molecularwebxr.org/",
        label: "Visit MolecularWebXR",
      }}
    >
      <div className={styles.heroArtifact}>
        <BrowserFrame className={styles.heroFrame}>
          <video
            className={styles.heroVideo}
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="A shared MolecularWebXR session with participants examining a molecular structure"
          >
            Your browser does not support embedded video.
          </video>
        </BrowserFrame>

        <aside className={styles.fieldNote} aria-label="Project characteristics">
          <span>Multi-User / WebXR</span>
          <strong>Mixed reality.</strong>
          <strong>One link, no installs.</strong>
        </aside>
      </div>
    </ProjectHeader>

    <ProjectSection className={styles.meetSection}>
      <ProjectSectionHeading label="01 / Shared space">Meet inside the molecule</ProjectSectionHeading>

      <ProjectCopy>
        <p>
          Most molecular viewers are designed for one person and one screen. MolecularWebXR turns the same material
          into a place people can enter together. Participants can talk, point to structures and manipulate the same
          virtual objects in real time, in augmented or virtual reality.
        </p>
        <p>
          Because it runs on the web, the room can be opened from modern phones, tablets, computers and VR headsets. No
          dedicated installation or single type of device becomes the price of entry.
        </p>
      </ProjectCopy>

      <BrowserFrame
        className={styles.sharedRoomFrame}
        caption="Inside a MolecularWebXR room, participants share the same structures and spatial context."
      >
        <img
          className={`${styles.artifactImage} ${styles.tiltRight}`}
          src={mwxr2}
          alt="A MolecularWebXR room displaying molecular structures in mixed reality"
          width="1427"
          height="1070"
          loading="lazy"
        />
      </BrowserFrame>
    </ProjectSection>

    <ProjectSection className={styles.classroomSection}>
      <div className={styles.classroomCopy}>
        <ProjectSectionHeading label="02 / Ready to explore">Rooms ready for class</ProjectSectionHeading>

        <ProjectCopy>
          <p>
            MolecularWebXR includes rooms with ready-to-use material for chemistry and structural biology. The content
            was prepared with university teachers around topics where spatial visualization and direct manipulation can
            make difficult concepts easier to grasp.
          </p>
          <p>
            Teachers and researchers use these rooms for lessons, scientific discussion and outreach. A session can
            move from a laptop to a headset without changing the shared experience.
          </p>
        </ProjectCopy>
      </div>

      <EmbeddedVideoFrame
        src="https://player.vimeo.com/video/947984945?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        title="Structural biology in mixed reality"
        caption="Exploring structural biology in mixed reality."
      />
    </ProjectSection>

    <ProjectStatement
      label="Browser first"
      note="From high-end VR headsets to phones and tablets, the web keeps access open."
    >
      One link. Almost any device.
    </ProjectStatement>

    <ProjectSection className={styles.outreachSection}>
      <ProjectSectionHeading label="03 / Beyond the lab" align="right">
        Science in public
      </ProjectSectionHeading>

      <ProjectCopy align="right">
        <p>
          MolecularWebXR is used around the world as both a collaborative tool and a way to bring science closer to the
          public. Interactive sessions let visitors handle research subjects that would otherwise remain diagrams on a
          screen.
        </p>
        <p>
          At VIZBI 2023 at the European Molecular Biology Laboratory in Heidelberg, researchers explored the platform
          together. At EPFL Open Days in Lausanne, we ran 20 interactive sessions over two days for the wider community.
        </p>
      </ProjectCopy>

      <figure className={styles.photoArtifact}>
        <div className={styles.photoMat}>
          <img
            src={mwxr4}
            alt="Visitors wearing VR headsets during a MolecularWebXR conference session"
            width="4032"
            height="2268"
            loading="lazy"
          />
        </div>
        <figcaption>Visitors trying MolecularWebXR during a public session.</figcaption>
      </figure>

      <div className={styles.videoGrid}>
        <EmbeddedVideoFrame
          src="https://player.vimeo.com/video/742185709?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          title="Multi-user VR talk at the TransCure conference"
          caption="A multi-user VR talk at the TransCure conference."
        />
        <EmbeddedVideoFrame
          src="https://player.vimeo.com/video/947982294?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          title="MolecularWebXR at EPFL Open Days 2023"
          caption="One of 20 interactive sessions held during EPFL Open Days."
        />
      </div>
    </ProjectSection>

    <ProjectSection className={styles.creditsSection}>
      <div>
        <ProjectSectionHeading label="04 / Small team">Built by two people</ProjectSectionHeading>

        <ProjectCopy>
          <p>
            MolecularWebXR was nominated for Education Experience of the Year and Mixed Reality Experience of the Year
            at The Polys WebXR Awards 2023, alongside work from organizations including Niantic, Meta and the World
            Bank.
          </p>
          <p>
            The project was made by me and{" "}
            <a href="https://www.lucianoabriata.com/" target="_blank" rel="noopener noreferrer">
              Luciano Abriata
            </a>{" "}
            at EPFL's Laboratory for Biomolecular Modeling, with funding from the{" "}
            <a href="https://www.snf.ch" target="_blank" rel="noopener noreferrer">
              Swiss National Science Foundation
            </a>
            .
          </p>
        </ProjectCopy>
      </div>

      <figure className={styles.awardArtifact}>
        <div className={styles.awardMat}>
          <img
            src={mwxr7}
            alt="MolecularWebXR nominations for the 2023 Polys WebXR Awards"
            width="2048"
            height="2048"
            loading="lazy"
          />
        </div>
        <figcaption>Two nominations at The Polys WebXR Awards 2023.</figcaption>
      </figure>
    </ProjectSection>

    <ProjectNavigation nextTo="/drawing-inspiration" nextTitle="Drawing Inspiration" />
  </ProjectPage>
);

export default MolecularWebXR;
