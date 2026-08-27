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
import draw1 from "../../../images/draw1.webp";
import draw2 from "../../../images/draw2.webp";
import styles from "./DrawingInspiration.module.css";

const DrawingInspiration = () => (
  <ProjectPage>
    <ProjectHeader
      category="Mixed Reality & AI"
      title="Drawing Inspiration"
      titleParts={["Drawing", "Inspiration"]}
      separateTitleParts
      summary="A mixed-reality prototype that turns a rough sketch into generated artwork, then previews it at room scale in the space where it could live."
      cta={{
        href: "https://meta-aws-hackathon-xr-genai.devpost.com/",
        label: "Hackathon details",
      }}
    >
      <div className={styles.heroArtifact}>
        <EmbeddedVideoFrame
          className={styles.heroFrame}
          src="https://www.youtube.com/embed/tmKwzoC13y4"
          title="Drawing Inspiration mixed-reality demo"
          caption="The complete sketch-to-room prototype, built during the three-day hackathon."
        />

        <aside className={styles.sprintNote} aria-label="Project timeline and result">
          <span>Hackathon sprint</span>
          <dl>
            <div>
              <dt>Built in</dt>
              <dd>3 days</dd>
            </div>
            <div>
              <dt>Result</dt>
              <dd>1st place</dd>
            </div>
          </dl>
        </aside>
      </div>
    </ProjectHeader>

    <ProjectSection className={styles.ideaSection}>
      <div className={styles.ideaCopy}>
        <ProjectSectionHeading label="01 / From a rough line">Draw what you mean</ProjectSectionHeading>

        <ProjectCopy>
          <p>
            Buying art asks people to imagine both the final piece and how it will feel at home. Drawing Inspiration
            starts earlier: the user sketches an idea, generative AI develops it into finished artwork, and mixed
            reality places the result in the room.
          </p>
          <p>
            The space becomes part of the process instead of an abstract measurement. Users can influence the image and
            inspect its scale before deciding whether it belongs there.
          </p>
        </ProjectCopy>
      </div>

      <BrowserFrame
        className={styles.resultFrame}
        caption="The original sketch and its generated interpretation share the same mixed-reality surface."
      >
        <img
          className={styles.resultImage}
          src={draw1}
          alt="A hand-drawn character beside its generated artwork in mixed reality"
          width="800"
          height="600"
          loading="lazy"
        />
      </BrowserFrame>
    </ProjectSection>

    <ProjectStatement
      label="Sketch to space"
      note="One continuous mixed-reality loop, from the first mark to a room-scale preview."
    >
      Draw it.<br/>Generate it.<br/>Put it on the wall.
    </ProjectStatement>

    <ProjectSection className={styles.buildSection}>
      <ProjectSectionHeading label="02 / Three-day build" align="right">
        One working loop
      </ProjectSectionHeading>

      <ProjectCopy align="right">
        <p>
          We built the prototype in August 2024 at Amazon HQ in Palo Alto during the{" "}
          <a
            href="https://meta-aws-hackathon-xr-genai.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Develop the Future: Meta & AWS Hackathon for XR & Generative AI
          </a>
          .
        </p>
        <p>
          The headset experience combined Meta Quest Scene, Passthrough and Interaction SDKs with Unity and WebXR. AWS
          ECR and ECS handled deployment, while Bedrock and Stable Diffusion generated the artwork returned to the user.
        </p>
      </ProjectCopy>

      <ol className={styles.workflow}>
        <li>
          <span>Input / 01</span>
          <strong>Sketch in context</strong>
          <p>A rough drawing captures the direction while Passthrough keeps the physical room visible.</p>
        </li>
        <li>
          <span>Generate / 02</span>
          <strong>Develop the image</strong>
          <p>Bedrock and Stable Diffusion transform the idea into artwork rather than a placeholder.</p>
        </li>
        <li>
          <span>Preview / 03</span>
          <strong>Return to the room</strong>
          <p>The generated result comes back into mixed reality at a scale the user can judge in place.</p>
        </li>
      </ol>
    </ProjectSection>

    <ProjectSection className={styles.teamSection}>
      <figure className={styles.teamArtifact}>
        <div className={styles.photoMat}>
          <img
            src={draw2}
            alt="The four-person Drawing Inspiration hackathon team at Amazon HQ"
            width="1080"
            height="1080"
            loading="lazy"
          />
        </div>
        <figcaption>The Drawing Inspiration team at Amazon HQ in Palo Alto.</figcaption>
        <strong className={styles.awardNote}>1st place / GenAI</strong>
      </figure>

      <div>
        <ProjectSectionHeading label="03 / The result">Three days. First place.</ProjectSectionHeading>

        <ProjectCopy>
          <p>Drawing Inspiration won first place in the hackathon's Generative AI track.</p>
          <p>
            The project was made by me,{" "}
            <a href="https://www.linkedin.com/in/davidurrutia/" target="_blank" rel="noopener noreferrer">
              David Urrutia
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/bill-wang-gameology/" target="_blank" rel="noopener noreferrer">
              Bill Wang
            </a>{" "}
            and{" "}
            <a href="https://www.linkedin.com/in/danny-chavez-b5671a56/" target="_blank" rel="noopener noreferrer">
              Danny Chavez
            </a>
            .
          </p>
        </ProjectCopy>
      </div>
    </ProjectSection>

    <ProjectNavigation nextTo="/duality" nextTitle="Duality" />
  </ProjectPage>
);

export default DrawingInspiration;
